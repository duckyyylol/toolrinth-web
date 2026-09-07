import { apiResponse } from "$lib/util";
import { json } from "@sveltejs/kit";

export const GET = async (): Promise<Response> => {
    return json(apiResponse("Pong!"))
}