import { createAppConfig, getAppConfig } from "$lib/server/db/appConfig";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    let appState = getAppConfig();
    if(!appState) createAppConfig();
    
    const response = await resolve(event);
    return response;
}