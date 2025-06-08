import {NextRequest} from "next/server";

import {middlewareClient} from "@/lib/supabase-clients/middlewareClient";

export async function middleware(request: NextRequest) {
    const {supabase, response} = await middlewareClient(request);

    // Return the response
    return response.value;

}
