'use client';

import Link from 'next/link';
import { useActionState, useState, useEffect } from 'react';
import {motion} from 'framer-motion';

import { 
    RiMailFill, 
    RiCheckboxCircleFill 
} from '@remixicon/react';

import { loginSchema } from '@/utils/zodSchemas';
// import 

import { Label } from '@workspace/ui/components/label';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { loginAction, LoginState } from '@/lib/actions/login';
import { OAuthIconProvider } from '@workspace/ui/components/common/google-microsoft-icons';


const initialState: LoginState = {
};
const LoginForm = () => {

    const [email, setEmail] = useState<string>('');

    const [state, formAction, pending] = useActionState(loginAction, initialState);

    useEffect(() => {
        if (state.error?.email && email.length > 0) {
            const result = loginSchema.safeParse({ email });
            if (result.success) {
                state.error.email = undefined; // suppress UI without resetting server state
            }
        }
    }, [email]);

    return (
        <div className='grid gap-8'>
            <div className="grid gap-2">
                <h1 className='h1-bold'>
                    Welcome Back {" "}  
                    <span className='inline-block'> 👋</span>
                </h1>
                <p className="w-sm body-regular">
                    Sign in to manage support tickets, collaborate with your team, and help customers faster. 
                </p>
            </div>
        
            <div>
                <form action={formAction}
                className='flex flex-col gap-3'
                >
                    <div className='grid gap-4'>
                        <div className='flex flex-col'>
                            <Label htmlFor="email" className="body-semibold">
                                Email address
                            </Label>
                            <motion.div 
                            className='relative w-full'
                            animate={state.error?.email
                                ? {x: [0, -8, 8, -8, 8, 0]}
                                : {x: 0}
                            }
                            transition={{duration: 0.4}}
                            >
                                <RiMailFill 
                                    className='absolute left-3 top-3/5 -translate-y-1/2 text-primary rounded-md'
                                    size={24}
                                    aria-hidden="true"
                                />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="sarah@example.com"
                                    className="w-full mt-2 pl-10 pr-10 border-gray-800 border-2 body-bold placeholder:text-gray-500 placeholder:font-normal" 
                                    autoComplete="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    disabled={pending}
                                    aria-invalid={state.error?.email ? true : undefined}
                                    aria-describedby={state.error?.email ? 'email-error' : undefined}
                                />
                                {!state.error?.email && !pending && ( <RiCheckboxCircleFill className='absolute right-3 top-3/5 -translate-y-1/2 text-primary' size={24} aria-hidden="true" />)}
                                
                            </motion.div>
                            {state.error?.email && (
                                <p id="email-error" className="text-red-500 small-regular mt-1">
                                    {state.error.email.join(', ')}
                                </p>
                            )}
                        </div>
                        <Button
                            className='border-gray-800 border-2 body-semibold cursor-pointer'
                        >
                            continue
                        </Button>
                    </div>
            
                    <div className=" flex justify-center text-xs">
                        <span>or login with</span>
                    </div>
                   
                    <div className='flex gap-4 '>
                        <Button variant={'outline'} size={'lg'} className='border-gray-500 border-1 flex-1 cursor-pointer'>
                            <OAuthIconProvider type='google'/>
                            <span className=''>Google</span>
                        </Button>

                        <Button variant={'outline'} size={'lg'} className='border-gray-500 border-1  flex-1 cursor-pointer'>
                            <OAuthIconProvider type='microsoft'/>
                            <span className=''>Microsoft</span>
                        </Button>
                    </div>
                    <p className='text-center small-regular mt-4'>
                        Need help signing in? <Link href="mailto:zXxGZ@example.com" className='text-primary small-semibold border-b border-primary'>Contact your team admin</Link>
                    </p>
                </form>
            </div>
        </div>
        
    )
}

export default LoginForm;