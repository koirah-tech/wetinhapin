import {createBrowserClient} from '@supabase/ssr';

export const supabaseBrowserClient = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
        throw new Error("Supabase URL or Key is not defined in environment variables.");
    }

    return createBrowserClient(url, key);
}
