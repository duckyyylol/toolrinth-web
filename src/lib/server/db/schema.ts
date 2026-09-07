
import { integer, sqliteTable, text,  } from 'drizzle-orm/sqlite-core';

export interface DBAccount {
	id: string;
	user_id: string;
	username: string;
	avatar_url: string;
}

export interface DBSession {
	id?: string;
	user_id: string;
	access_token: string;
	refresh_token: string;
	expires_at: number;
}

export const app_config = sqliteTable("app_config", {
	id: text("id").notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
})
