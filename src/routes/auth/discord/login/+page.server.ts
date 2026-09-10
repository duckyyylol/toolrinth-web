import { PUBLIC_DISCORD_AUTH_URL, PUBLIC_DISCORD_CLIENT_ID, PUBLIC_DISCORD_REDIRECT_URI } from "$env/static/public";
import { AppConfig } from "$lib/config";
import { redirect, type ServerLoad } from "@sveltejs/kit";
import { randomUUID } from "node:crypto";

export const load: ServerLoad = async ({cookies}) => {
  const state = randomUUID();
  const redirectUrl = `${PUBLIC_DISCORD_AUTH_URL}?response_type=code&client_id=${PUBLIC_DISCORD_CLIENT_ID}&scope=${AppConfig.scopes.join(" ")}&redirect_uri=${PUBLIC_DISCORD_REDIRECT_URI}&prompt=consent&state=${state}`;

  cookies.set("state", state, { path: "/", maxAge: 600, httpOnly: true });

  redirect(302, redirectUrl);
}
