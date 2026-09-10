import { PUBLIC_DISCORD_ADMIN_ROLES, PUBLIC_DISCORD_BASE_URL, PUBLIC_DISCORD_WORKING_GUILD_ID } from "$env/static/public";
import { type APIGuild, type APIGuildMember, type APIUser } from "discord-api-types/v10";
import axios, { type AxiosResponse } from "axios";

async function get(endpoint: string, token: string): Promise<AxiosResponse<any>> {
    const res = await axios.get(`${PUBLIC_DISCORD_BASE_URL}${endpoint}`, {headers: {"Authorization": `Bearer ${token}`}});
    return res;
}

export async function getCurrentUser(token: string | null): Promise<APIUser | null> {
    if(!token) return null;
    try {
        const {data: user} = await get("/users/@me", token);
        if(!user || user?.error) {
            return null;
        } else {
            return user;
        }
    } catch(e) {
        return null;
    }
}

export async function getCurrentUserGuildMember(token: string | null, guildId: string = PUBLIC_DISCORD_WORKING_GUILD_ID): Promise<APIGuildMember | null> {
    if(!token) return null;
    try {
        const {data: member} = await get(`/users/@me/guilds/${guildId}/member`, token);
        if(!member || member?.error) {
            return null;
        } else {
            return member;
        }
    } catch(e) {
        return null;
    }
}

export async function getCurrentUserGuilds(token: string | null, filter: boolean = false): Promise<APIGuild[]> {
    if(!token) return [];

    try {
        const {data: guilds} = await get("/users/@me/guilds", token);
        if(!guilds || guilds?.error) {
            return [];
        } else {
            if(filter) return guilds.filter((g: APIGuild) => g.id === PUBLIC_DISCORD_WORKING_GUILD_ID)
            return guilds;
        }
    } catch(e) {
        return [];
    }
}

export async function getCurrentUserGuildRoles(token: string | null, guildId: string = PUBLIC_DISCORD_WORKING_GUILD_ID): Promise<string[]> {
    if(!token) return [];

    try {
        const member = await getCurrentUserGuildMember(token, guildId);
        if(!member || !member?.roles) {
            return [];
        } else {
            return member.roles;
        }
    } catch(e) {
        return [];
    }
}

export function parseEnvironmentRoleIds(): string[] {
    return PUBLIC_DISCORD_ADMIN_ROLES.split(",");
}

export async function currentUserIsInGuild(token: string | null): Promise<boolean> {
    try {
        const guilds: APIGuild[] = await getCurrentUserGuilds(token, true);
        if(guilds.length <= 0) return false;
        return true;
    } catch(e) {
        return false;
    }
}

export async function currentUserHasAdminRole(token: string | null, guildId: string = PUBLIC_DISCORD_WORKING_GUILD_ID): Promise<boolean> {
    const roleIds = await getCurrentUserGuildRoles(token, guildId);
    const validRoleIds = parseEnvironmentRoleIds();

    let pass = false;

    validRoleIds.forEach((id: string) => {
        if(roleIds.includes(id)) pass = true;
    })

    return pass;
}
