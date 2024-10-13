import FormFieldAuth from './FormFieldAuth'

import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/user/userSlice'

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
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onFormSubmit = (data: RegisterForm) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      favourite: [],
    }
    dispatch(createUser(newUser))
    reset()

    if (location.state?.from === 'cart') {
      navigate('/cart', { replace: true })
    } else {
      navigate('/profile', { replace: true })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='sm:border-2 rounded-lg py-8 sm:px-6 w-full sm:w-96 mx-auto md:mt-10'
    >
      <FormFieldAuth
        type='text'
        placeholder='Иван Иванов'
        label='Имя'
        name='name'
        register={register}
        error={errors.name}
      />

      <FormFieldAuth
        type='email'
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

      <FormFieldAuth
        type='password'
        label='Повторите пароль'
        name='confirmPassword'
        register={register}
        error={errors.confirmPassword}
      />

      <button className='button font-title uppercase text-sm py-4 w-full mt-8' type='submit'>
        Регистрация
      </button>
    </form>
  )
}
