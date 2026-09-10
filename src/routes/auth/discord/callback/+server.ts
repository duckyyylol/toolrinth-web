import { PUBLIC_DISCORD_WORKING_GUILD_ID } from "$env/static/public";
import { exchangeCodeForToken } from "$lib/auth.js";
import { getCurrentUser, getCurrentUserGuildMember, getCurrentUserGuilds, parseEnvironmentRoleIds } from "$lib/discord.js";
import { redirect } from "@sveltejs/kit";

export const GET = async ({url, cookies, fetch}): Promise<void> => {

  const code = url.searchParams.get("code") || null;
  const state = url.searchParams.get("state") || null;
  const storedState = cookies.get("state") || null;

  if (!code) return redirect(302, "/auth/discord/login");
  cookies.delete("state", { path: "/" });
  if (!state || !storedState || storedState !== state) return redirect(302, `/auth/failure?f=${encodeURIComponent(url.toString())}&e=${encodeURIComponent("Invalid State")}`);

  const token = await exchangeCodeForToken(fetch, code);
  if (!token) return redirect(302, `/auth/failure?f=${encodeURIComponent(url.toString())}&e=${encodeURIComponent("Invalid Response")}`)

  const guilds = await getCurrentUserGuilds(token.access_token);
  if (!guilds || !guilds.some(g => g.id === PUBLIC_DISCORD_WORKING_GUILD_ID)) return redirect(302, `/auth/failure?f=${encodeURIComponent(url.toString())}&e=${encodeURIComponent("No Permission")}`);

  const guildMember = await getCurrentUserGuildMember(token.access_token, PUBLIC_DISCORD_WORKING_GUILD_ID);
  if(!guildMember || !guildMember.roles.some(rId => parseEnvironmentRoleIds().includes(rId))) return redirect(302, `/auth/failure?f=${encodeURIComponent(url.toString())}&e=${encodeURIComponent("No Permission")}`);

  cookies.set("token-0", token.access_token, { path: "/", maxAge: token.expires_in });
  cookies.set("token-r", token.refresh_token, { path: "/" });

  redirect(302, "/dashboard");
}
