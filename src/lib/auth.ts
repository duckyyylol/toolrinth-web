import { PRIVATE_DISCORD_CLIENT_SECRET } from "$env/static/private";
import { PUBLIC_DISCORD_BASE_URL, PUBLIC_DISCORD_CLIENT_ID, PUBLIC_DISCORD_REDIRECT_URI } from "$env/static/public";
import type { AccessToken } from "$lib/types";

export async function exchangeCodeForToken(f: ((input: URL | RequestInfo, init?: RequestInit) => Promise<Response>), code: string): Promise<AccessToken | null> {

    let fetchHeaders = new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
    })

    let fetchConfig: RequestInit = {
        method: "post",
        headers: fetchHeaders,
        body: new URLSearchParams({
        "code": code,
        "grant_type": "authorization_code",
        "redirect_uri": PUBLIC_DISCORD_REDIRECT_URI,
        "client_id": PUBLIC_DISCORD_CLIENT_ID,
        "client_secret": PRIVATE_DISCORD_CLIENT_SECRET,
    })
    };

    let res = await (await f(`${PUBLIC_DISCORD_BASE_URL}/oauth2/token`, fetchConfig)).json();

    if(!res?.access_token) return null;
    res.access_token = res.access_token;
    return res;
}

export async function revokeToken(f: ((input: URL | RequestInfo, init?: RequestInit) => Promise<Response>), token: string): Promise<void> {
    let fetchHeaders = new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
    })

    let fetchConfig: RequestInit = {
        method: "post",
        headers: fetchHeaders,
        body: new URLSearchParams({
        "token": token,
        "token_type_hint": "access_token",
        "client_id": PUBLIC_DISCORD_CLIENT_ID,
        "client_secret": PRIVATE_DISCORD_CLIENT_SECRET,
    })
    };

    let res = await (await f(`${PUBLIC_DISCORD_BASE_URL}/oauth2/token/revoke`, fetchConfig)).json();

    console.log(res);
}

export async function refreshToken(f: ((input: URL | RequestInfo, init?: RequestInit) => Promise<Response>), token: string): Promise<AccessToken | null> {
    let fetchHeaders = new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
    })

    let fetchConfig: RequestInit = {
            method: "post",
            headers: fetchHeaders,
            body: new URLSearchParams({
            "grant_type": "refresh_token",
            "refresh_token": token,
            "client_id": PUBLIC_DISCORD_CLIENT_ID,
            "client_secret": PRIVATE_DISCORD_CLIENT_SECRET,
        })
        };

  let res = await (await f(`${PUBLIC_DISCORD_BASE_URL}/oauth2/token`, fetchConfig)).json();

  if (!res?.access_token) return null;

  return res;
}
