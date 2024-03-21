'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LockKeyhole, Mail } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import signInBg from '@/assets/auth/signin-astronout.svg';
import { InputPassword } from '@/components/ui/input-password';
import { LoginSchema, LoginType } from '@/domains/auth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { useAuthLogin } from './hooks';

const SignIn = () => {
  const { mutate } = useAuthLogin();
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = (values: LoginType) => {
    mutate(values);
  };

  return (
    <div className="w-screen h-screen p-4">
      <div className="flex min-h-full relative overflow-hidden justify-center items-center">
        <div className="flex flex-col items-center justify-center lg:w-4/12">
          <div className="flex flex-col gap-4 mx-auto lg:w-96">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">Sign In</h1>
              <p className="text-sm text-[#828282] mt-2">
                Let&apos;s started! Please Sign In to access the best learning
                resources.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter Email"
                          suffix={<Mail className="text-[#828282]" />}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputPassword
                          type="password"
                          placeholder="Enter Password"
                          colorIcon="text-[#828282]"
                          suffix={<LockKeyhole className="text-[#828282]" />}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                className="text-white rounded-2xl"
                onClick={form.handleSubmit(onSubmit)}
              >
                Sign In
              </Button>
              <p className="text-xs text-center">
                Don&apos;t have an account yet?{' '}
                <Link href="/sign-up" className="text-hmc-base">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Image
          priority
          src={signInBg}
          alt="Sign In Background"
          className="hidden lg:block w-4/12 h-4/12"
        />
      </div>
    </div>
  );
};
export default SignIn;
