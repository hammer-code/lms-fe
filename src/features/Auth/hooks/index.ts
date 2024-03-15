import { LoginType, RegisterType } from '@/domains/auth';
import useToast from '@/hooks/useToast';
import { AuthService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export const useAuthRegister = () => {
  const { showToast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: RegisterType) =>
      await AuthService.register(values),
    onSuccess: () => {
      router.push('/sign-in');
      showToast({
        title: 'Registration Successfuly',
        description: 'Please Login!'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Registration Failed',
        description: err?.message || 'Something when wrong!'
      });
    }
  });
};

export const useAuthLogin = () => {
  const { showToast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: LoginType) => await AuthService.login(values),
    onSuccess: data => {
      router.push('/');
      showToast({
        title: data?.message || 'Login Successful',
        description: 'Welcome to hmc learn!'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Login Failed!',
        description: err?.message || 'Something went wrong!'
      });
    }
  });
};
