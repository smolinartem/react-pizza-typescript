import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { updatePassword } from '../../store/user/userSlice'

import FormFieldAuth from '../FormFieldAuth'

const PasswordFormSchema = z.object({
  oldPassword: z.string().min(6, { message: 'Пароль должен быть не короче 6 символов' }),
  newPassword: z.string().min(6, { message: 'Пароль должен быть не короче 6 символов' }),
  confirmPassword: z.string().min(6, { message: 'Пароль должен быть не короче 6 символов' }),
})

export type PasswordForm = z.infer<typeof PasswordFormSchema>

interface Props {
  onClose: () => void
}
export default function PasswordFormEdit({ onClose }: Props) {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<PasswordForm>({
    resolver: zodResolver(PasswordFormSchema),
  })

  const onFormSubmit = (data: PasswordForm) => {
    console.log(data)

    if (userInfo === null) return
    if (userInfo.password !== data.oldPassword) {
      setError('oldPassword', { message: 'Неверный старый пароль' })
      return
    }
    if (data.newPassword !== data.confirmPassword) {
      setError('confirmPassword', { message: 'Пароли не совпадают' })
      return
    }

    dispatch(updatePassword(data.newPassword))
    reset()
    onClose()
  }
  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='sm:border-2 rounded-lg py-8 sm:px-6 w-full sm:w-96 mx-auto md:mt-10'
    >
      <FormFieldAuth
        type='password'
        label='Старый пароль'
        name='oldPassword'
        register={register}
        error={errors.oldPassword}
      />

      <FormFieldAuth
        type='password'
        label='Новый пароль'
        name='newPassword'
        register={register}
        error={errors.newPassword}
      />

      <FormFieldAuth
        type='password'
        label='Повторите пароль'
        name='confirmPassword'
        register={register}
        error={errors.confirmPassword}
      />

      <div className='flex items-center gap-2 mt-8'>
        <button onClick={() => onClose()} className='button w-full' type='reset'>
          Отмена
        </button>
        <button className='button w-full' type='submit'>
          Обновить
        </button>
      </div>
    </form>
  )
}
