import Popup from './Popup'
import FormFieldAuth from '../FormFieldAuth'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { editProfile } from '../../store/user/userSlice'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ProfileEditFormSchema = z.object({
  name: z.string().min(2, { message: 'Введите имя' }).optional(),
  email: z.string().email('Неверно введённый email').optional(),
  phone: z.string().optional(),
  birthday: z.string().optional(),
})

export type ProfileEditForm = z.infer<typeof ProfileEditFormSchema>

type PopupProfileEditProps = {
  isOpen: boolean
  onClose: () => void
}
export default function PopupProfileEdit({ isOpen, onClose }: PopupProfileEditProps) {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileEditForm>({
    resolver: zodResolver(ProfileEditFormSchema),
    defaultValues: {
      name: userInfo?.name,
      email: userInfo?.email,
      phone: userInfo?.phone,
      birthday: userInfo?.birthday,
    },
  })

  const onFormSubmit = (data: ProfileEditForm) => {
    dispatch(editProfile(data))
    reset()
    onClose()
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className='sm:border-2 rounded-lg py-8 sm:px-6 w-full sm:w-96 mx-auto sm:mt-10'
      >
        <h2 className='text-center text-2xl mb-8'>Редактировать</h2>

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
          type='tel'
          placeholder='+79998887766'
          label='Телефон'
          name='phone'
          register={register}
          error={errors.phone}
        />

        <FormFieldAuth
          type='text'
          placeholder='10.10.2010'
          label='День рождения'
          name='birthday'
          register={register}
          error={errors.birthday}
        />

        <div className='flex items-center gap-2 mt-8'>
          <button onClick={() => onClose()} className='button w-full' type='button'>
            Отмена
          </button>
          <button className='button w-full' type='submit'>
            Редактировать
          </button>
        </div>
      </form>
    </Popup>
  )
}
