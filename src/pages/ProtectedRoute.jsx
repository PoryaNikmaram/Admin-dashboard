/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router'
import { useGetCurrentuserQuery } from '../features/authentication/userApi'
import Spinner from '../ui/Spinner'
import { useEffect } from 'react'

function ProtectedRoute({ children }) {
  const { data, isLoading } = useGetCurrentuserQuery()
  const navigate = useNavigate()

  const isAuthenticated = data?.session?.user?.aud === 'authenticated'

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) return <Spinner />
  if (isAuthenticated) {
    return children
  }
}

export default ProtectedRoute
