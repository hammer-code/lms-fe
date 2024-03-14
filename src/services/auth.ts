import { RegisterResType, RegisterType } from '@/domains/auth';
import { BaseResponseType } from '@/domains/response';
import { fetcher } from './instance';

export const RegisterService = async (
  data: RegisterType
): Promise<BaseResponseType<RegisterResType>> => {
  const res = await fetcher.post('/v1/register', data);
  return res.data;
};
