import { UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ButtonAccount() {
  return (
    <Link to='profile' className='flex-center relative size-12 circle-animation'>
      <UserRound color='#292524' strokeWidth={1.75} size={28} />
    </Link>
  )
}
