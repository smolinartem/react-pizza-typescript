import UserHeader from '../components/user/UserHeader'
import UserHistory from '../components/user/UserHistory'
import UserData from '../components/user/UserData'
import UserAddressList from '../components/user/UserAddressList'

export default function Profile() {
  return (
    <div className='section-container'>
      <UserHeader />

      <div className='gap-6 mt-6 md:grid md:grid-cols-2'>
        <div>
          <UserData />
          <UserAddressList />
        </div>

        <UserHistory />
      </div>
    </div>
  )
}
