'use client';
import { useCallback, useState } from 'react';
import axios from 'axios';
import Input from '@/components/input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Auth = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => { 
        setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
    }, []);

    const login = useCallback(async () => {
        try {
            const result = await signIn('credentials', { 
                email, 
                password,
                redirect: false,
            });

            if (result?.error) {
                console.error(result.error);
            } else {
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    }, [email, password, router])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/auth/register', { 
                email, 
                name, 
                password 
            });

            login(); 
        } catch (error) {
            console.error(error);
        }
    }, [email, name, password, login]);

    return (
        <div className="relative w-full h-full overflow-hidden bg-[url('/images/login_bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="The website's logo." className="h-24"/>
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Sign Up'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input 
                                    label='Username'
                                    onChange={(ev: any) => setName(ev.target.value)}
                                    id='name'
                                    value={name}
                                />
                            )}
                            <Input 
                                label='Email'
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id='email'
                                type='email'
                                value={email}
                            />
                            <Input 
                                label='Password'
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id='password'
                                type='password'
                                value={password}
                            />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                        <p className='text-neutral-500 text-sm mt-12'>
                            {variant === 'login' ? 'First time using Netflix? ' : 'Already have an account?'}
                            <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                {variant === 'login' ? 'Create an account' : 'Sign In.'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;