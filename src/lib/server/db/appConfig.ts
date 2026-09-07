import type { DBAppConfig } from "$lib/types";
import { eq } from "drizzle-orm";
import { db } from ".";
import { app_config } from "./schema";

export const createAppConfig = () => {
    let ac = getAppConfig();
    if(!ac) return db.insert(app_config).values({}).returning().get();
    if(ac) return db.update(app_config).set({}).where(eq(app_config.id, ac.id)).returning().get()
}

export const getAppConfig = (): DBAppConfig | null => {
    return db.select().from(app_config).all()?.[0] || null;
}

export const updateAppConfig = (data: typeof app_config.$inferInsert): DBAppConfig | null => {
    let ac = getAppConfig();
    let toReturn: DBAppConfig | null = null;

    if(!ac) toReturn = db.insert(app_config).values(data).returning().get() || null;
    if(ac) toReturn = db.update(app_config).set(data).where(eq(app_config.id, ac.id)).returning().get() || null;

    return toReturn;
}