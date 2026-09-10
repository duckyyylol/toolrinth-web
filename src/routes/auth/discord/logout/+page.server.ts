import { revokeToken } from "$lib/auth";
import { redirect, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals, fetch, cookies }) => {
  const token = cookies.get("token-0");
  if (token) {
    await revokeToken(fetch, token);
    cookies.delete("token-0", {path: "/"})
    cookies.delete("token-r", {path: "/"})
  }

  redirect(302, "/")

  return {
    authorized: locals.authorized,
    loggingOut: token !== null
  }
}
