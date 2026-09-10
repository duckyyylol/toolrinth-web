import type { UserNotification } from "@toolrinth/lib";
import { APIUser } from "discord-api-types/v10"

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
    interface Locals {
      authorized: boolean;
		}
    interface PageData {
      authorized: boolean;
      loggingOut: boolean;
      user: APIUser;
      notifications: UserNotification[];
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
