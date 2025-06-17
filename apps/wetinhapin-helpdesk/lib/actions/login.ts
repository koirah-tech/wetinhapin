import { loginSchema } from "@/utils/zodSchemas";


export type LoginState = {
    error?: {
        email?: string[];
    }
}

export const loginAction = async (initialState: LoginState, formData: FormData) => {
    const isEmailValid = loginSchema.safeParse({
        email: formData.get("email")
    });

    if(!isEmailValid.success) {
        return {
            error: isEmailValid.error.flatten().fieldErrors
        }
    }
    console.log(isEmailValid.data)

    return {}
}