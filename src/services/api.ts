import { treaty, edenFetch } from "@elysiajs/eden";
import type { API } from "@/app/api/[[...slugs]]/route";

const host =
  typeof window === "undefined"
    ? `http://localhost:${process.env.PORT ?? 3000}`
    : window.location.origin;
/**
 * Eden Treaty (Recommended)
 * @example api.auth.get({})
 */
export const api = treaty<API>(host);

/**
 * Eden Fetch
 * 方便二次封装
 */
export const fetch = edenFetch<API>(host);
