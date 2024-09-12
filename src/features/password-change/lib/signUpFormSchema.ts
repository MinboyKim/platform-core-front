import { z } from 'zod';

export const signUpFormSchema = z.object({
  id: z.string().min(1, {
    message: '아이디를 입력해주세요.',
  }),
  password: z.string().min(1, {
    message: '비밀번호를 입력해주세요.',
  }),
});

export type SignUpFormFields = z.infer<typeof signUpFormSchema>;
