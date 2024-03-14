import { RegisterType } from '@/domains/auth';
import useToast from '@/hooks/useToast';
import { AuthService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useAuthRegister = () => {
  const { showToast } = useToast();
  return useMutation({
    mutationFn: async (values: RegisterType) => await AuthService(values),
    onSuccess: () => {
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
