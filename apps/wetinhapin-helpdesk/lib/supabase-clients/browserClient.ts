import {createBrowserClient} from '@supabase/ssr';

import {assertEnvVar} from "@/utils/helpers";

export const supabaseBrowserClient = () => {
    const url = assertEnvVar(process.env.NEXT_PUBLIC_SUPABASE_URL!);
    const key = assertEnvVar(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

    return createBrowserClient(url, key);
}
