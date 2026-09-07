import { AppConfig } from "./config";
import type { ApiError, ApiResponse } from "./types";

export function serializeJSONCookie<T>(obj: T): string {
    return JSON.stringify(obj);
}

export function deserializeJSONCookie<T>(cookie: string): T {
    return JSON.parse(cookie);
}

export function parseCookie(cookie_string: string | null, key: string): string | null {
    if (!cookie_string) return null;
    let pairs = cookie_string.split(";");
    let splitPairs = pairs.map(cookie => cookie.split("="))
    let o: { [key: string]: string; } = splitPairs.reduce<{ [key: string]: string; }>((obj, cookie) => {
        obj[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(cookie[1].trim())

        return obj;
    }, {})

    if (!o[key]) return null;
    return o[key];
}

export function apiResponse<T>(data: T, requester: string | null = null, statusCode: number = 0, success: boolean = true, errorMessage: string | null = null): ApiResponse<T> {
    let res: ApiResponse<T> = {
        data: data,
        v: AppConfig.api_version
    }

    if (requester !== null) res.for = requester;

    if (statusCode > 0) res.status = statusCode;
    if (!success && errorMessage !== null) {
        let error: ApiError = {
            message: errorMessage
        }

        res.error = error;
    }

    return res;
}

