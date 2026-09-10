import { getCurrentUser } from "$lib/discord";
import { redirect, type ServerLoad } from "@sveltejs/kit";
import { UserNotificationTypes, type UserNotification } from "@toolrinth/lib";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";

function random<T>(arr: T[]): T {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export const load: ServerLoad = async ({locals, cookies}) => {
  const token = cookies.get("token-0");

  let user = null;

  if (token) {
    user = await getCurrentUser(token);
  }

  const notifications: UserNotification[] = [];

  for (var i = 0; i < 50; i++) {
    notifications.push({
      id: randomUUID().replace(/-/g, '').slice(0, 16),
      user_id: randomUUID().replace(/-/g, '').slice(0, 16),
      created: new Date(Date.now() - i * 60e3).toISOString(),
      link: "https://toolrinth.com",
      read: false,
      actions: [],
      type: random(Object.values(UserNotificationTypes)) as UserNotificationTypes,
      text: faker.lorem.words({min: 30, max: 300}),
      title: faker.lorem.words({min: 5, max: 50}),
    })
  }

  return {
    authorized: locals.authorized,
    user,
    notifications
  }
}
