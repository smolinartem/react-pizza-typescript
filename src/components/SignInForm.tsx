import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import FormFieldAuth from './FormFieldAuth'

const LoginFormSchema = z.object({
  email: z.string().email('Неверно введённый email'),
  password: z.string().min(6, { message: 'Пароль должен быть не короче 6 символов' }),
})

export type LoginForm = z.infer<typeof LoginFormSchema>

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
  })

  const onFormSubmit = (data: LoginForm) => {
    console.log(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='sm:border-2 rounded-lg py-8 sm:px-6 w-full sm:w-96 mx-auto'
    >
      <FormFieldAuth
        type='text'
        placeholder='ivan@ivanov.ru'
        label='Email'
        name='email'
        register={register}
        error={errors.email}
      />

      <FormFieldAuth
        type='password'
        label='Пароль'
        name='password'
        register={register}
        error={errors.password}
      />
      <button className='button font-title uppercase text-sm py-4 w-full mt-8' type='submit'>
        Вход
      </button>
    </form>
  )
}
