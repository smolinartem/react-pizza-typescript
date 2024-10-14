import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function UserHeader() {
  const navigate = useNavigate()
  return (
    <div className='flex gap-4 items-center'>
      <button
        onClick={() => {
          navigate(-1)
        }}
        className='button-order'
      >
        <ArrowLeft color='#292524' strokeWidth={1.5} />
      </button>
      <h2 className='text-2xl text-stone-600 font-title uppercase'>Профиль</h2>
    </div>
  )
}
