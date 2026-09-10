import { refreshToken } from "$lib/auth";
import { getCurrentUser } from "$lib/discord";
import { createAppConfig, getAppConfig } from "$lib/server/db/appConfig";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    let appState = getAppConfig();
  if (!appState) createAppConfig();

    if (event.url.pathname.startsWith("/dashboard")) {
      if (!event.cookies.get("token-0")) {
        event.locals.authorized = false;
      } else {
        const tokenUser = await getCurrentUser(event.cookies.get("token-0") as string);
        event.locals.authorized = tokenUser !== null;
        if (!event.locals.authorized && event.cookies.get("token-r")) {
          const rt = event.cookies.get("token-r") as string;
          const refreshed = await refreshToken(event.fetch, rt);
          if (refreshed) {
            event.cookies.set("token-0", refreshed.access_token, { path: "/", expires: new Date(Date.now() + refreshed.expires_in * 1000) });
            if (refreshed.refresh_token) {
              event.cookies.set("token-r", refreshed.refresh_token, { path: "/" });
            } else event.cookies.delete("token-r", {path: "/"});
            event.locals.authorized = true;
          }
        }
      }

    }

    const response = await resolve(event);
    return response;
}
