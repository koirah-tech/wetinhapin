import {createServerClient} from "@supabase/ssr";
import {type SupabaseClient} from "@supabase/supabase-js";
import {cookies} from "next/headers";

import {assertEnvVar} from "@/utils/helpers";
import { ExternalServiceError } from "@/utils/errors";



/**
 * Lazily grab and validate required ENV, then
 * return a Supabase client wired to Next.js cookies().
 *
 * @throws MissingEnvVarError if URL or key is unset
 * @throws ExternalServiceError on cookie write failures
 *  */
export async function cookiesClient(): Promise<SupabaseClient> {
    // Validate required environment variables
    const sb_url = assertEnvVar(process.env.NEXT_PUBLIC_SUPABASE_URL!);
    const sb_key = assertEnvVar(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

    // Get the Next.js cookie store
    const cookieStore = await cookies();

    // Return a Supabase client wired to Next.js cookies I/O
    return createServerClient(
        sb_url,
        sb_key,
        {
            cookies: {
                getAll: () => cookieStore.getAll(),
                setAll:  (entries) => {
                    try{
                        for (const { name, value, options } of entries) {
                            cookieStore.set(name, value, options);
                        }
                    } catch (error) {
                        throw new ExternalServiceError(
                            "Next.js Cookie Store",
                            "Failed to write supabase cookies",
                            error
                        )
                    }
                    
                }
            }
        }
    )
}
