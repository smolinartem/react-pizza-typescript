import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

type ValidNames = 'name' | 'email' | 'password' | 'confirmPassword'

type FormFieldProps<TFormData extends FieldValues> = {
  type: string
  placeholder?: string
  label: string
  name: ValidNames
  register: UseFormRegister<TFormData>
  error: string | undefined
  valueAsNumber?: boolean
}

export default function FormFieldAuth<TFormData extends FieldValues>({
  type,
  placeholder,
  label,
  name,
  register,
  error,
  valueAsNumber,
}: FormFieldProps<TFormData>) {
  return (
    <fieldset>
      <label className='text-sm'>
        {label}

        <input
          {...register(name as Path<TFormData>, { valueAsNumber })}
          type={type}
          autoComplete='off'
          placeholder={placeholder}
          className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-900 sm:text-sm sm:leading-6'
        />
      </label>
      <span className='block h-4 text-red-600 text-xs mb-1'>{error}</span>
    </fieldset>
  )
}
