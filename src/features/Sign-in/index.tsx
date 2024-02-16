'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

const SignIn = () => {
  return (
    <div>
      <Button>Sign In</Button>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
        <Input
          id="picture"
          type="text"
          className="pl-12"
          icon={<EnvelopeOpenIcon className="absolute left-4" />}
        />
      </div>
    </div>
  );
};
export default SignIn;
