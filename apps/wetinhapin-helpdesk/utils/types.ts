
/**
 * All the pieces Supabase needs to read/write cookies in App Router.
 */
export interface CookieEntry {
    name: string
    value: string
    options?: Record<string, unknown>
}
