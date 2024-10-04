import FormFieldAuth from './FormFieldAuth'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const RegisterFormSchema = z
  .object({
    name: z.string().min(2, { message: 'Введите имя' }),
    email: z.string().email('Неверно введённый email'),
    password: z.string().min(6, { message: 'Пароль должен быть не короче 6 символов' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export type RegisterForm = z.infer<typeof RegisterFormSchema>

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onFormSubmit = (data: RegisterForm) => {
    console.log(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='border-2 rounded-lg py-8 px-6 sm:w-96 mx-auto md:mt-10'
    >
      <h2 className='text-center text-2xl mb-8'>Регистрация</h2>

      <FormFieldAuth
        type='text'
        placeholder='Иван Иванов'
        label='Имя'
        name='name'
        register={register}
        error={errors.name?.message}
      />

      <FormFieldAuth
        type='text'
        placeholder='ivan@ivanov.ru'
        label='Email'
        name='email'
        register={register}
        error={errors.email?.message}
      />

      <FormFieldAuth
        type='password'
        label='Пароль'
        name='password'
        register={register}
        error={errors.password?.message}
      />

      <FormFieldAuth
        type='password'
        label='Повторите пароль'
        name='confirmPassword'
        register={register}
        error={errors.confirmPassword?.message}
      />

      <button className='button py-4 w-full mt-8' type='submit'>
        Регистрация
      </button>
    </form>
  )
}
