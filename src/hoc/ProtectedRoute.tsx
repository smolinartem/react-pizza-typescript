import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo === null) {
      navigate('/')
    }
  }, [userInfo, navigate])

  return children
}
