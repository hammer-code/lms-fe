import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import loginBg from '@/assets/auth/login-astronout.svg';
import { LockKeyhole, Mail } from 'lucide-react';
import { InputPassword } from '@/components/ui/input-password';

const SignIn = () => {
  return (
    <div className="w-screen h-screen p-4">
      <div className="flex min-h-full relative overflow-hidden justify-center">
        <div className="flex flex-col items-center justify-center lg:w-4/12">
          <div className="flex flex-col gap-6 mx-auto lg:w-96">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">Sign In</h1>
              <p className="text-sm text-[#828282] mt-2">
                Let&apos;s started! Please Sign In to access the best learning
                resources.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Masukkan Email"
                className="border-[#828282]"
                suffix={<Mail className="text-[#828282]" />}
              />
              <InputPassword
                type="password"
                placeholder="Masukkan Password"
                className="border-[#828282]"
                colorIcon="text-[#828282]"
                suffix={<LockKeyhole className="text-[#828282]" />}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button className="text-white rounded-2xl">Sign In</Button>
              <p className="text-xs text-center">
                Don&apos;t have an account yet?{' '}
                <Link href="" className="text-hmc-base">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Image
          priority
          src={loginBg}
          alt="Login Background"
          className="hidden lg:block w-4/12 h-4/12"
        />
      </div>
    </div>
  );
};
export default SignIn;
