'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, LockKeyhole, Mail, CircleUser } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import signUpBg from '@/assets/auth/signup-astronout.svg';
import { InputPassword } from '@/components/ui/input-password';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { RegisterSchema, RegisterType } from '@/domains/auth';

const SignUp = () => {
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema)
  });

  const onSubmit = (values: RegisterType) => {
    console.log(values);
  };
  return (
    <div className="w-screen h-screen p-4">
      <div className="flex min-h-full relative overflow-hidden justify-center items-center">
        <Image
          priority
          src={signUpBg}
          alt="Sign Up Background"
          className="hidden lg:block w-2/5 h-2/5"
        />
        <div className="flex flex-col items-center justify-center lg:w-4/12">
          <div className="flex flex-col gap-6 mx-auto lg:w-96">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">Sign Up</h1>
              <p className="text-sm text-[#828282] mt-2">
                Let&apos;s started! Please sign up to unlock the best learning
                resources.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Username"
                          className="border-[#828282]"
                          suffix={<CircleUser className="text-[#828282]" />}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter Email"
                          className="border-[#828282]"
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
                          className="border-[#828282]"
                          colorIcon="text-[#828282]"
                          suffix={<Lock className="text-[#828282]" />}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputPassword
                          type="password"
                          placeholder="Confirm Password"
                          className="border-[#828282]"
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
                Sign Up
              </Button>
              <p className="text-xs text-center">
                Already have an account?{' '}
                <Link href="/sign-in" className="text-hmc-base">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
