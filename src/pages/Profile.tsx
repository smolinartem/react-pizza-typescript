import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Profile() {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)

  return <div className='section-container'>Profile</div>
}
