import { createContext, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { fetchUserInfo } from '@/api'
import { Spinner } from '@/components/ui/spinner'

interface User {
  id: string
  email: string
  roles: string[]
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  return useContext(AuthContext)!
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  const logout = useCallback(() => {
    navigate('/login', { replace: true })
  }, [navigate])

  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserInfo,
    staleTime: 1_60_1000,
    retry: false
  })

  if (isError) {
    logout()
  }

  return (
    <AuthContext.Provider value={{ user: user || null, isLoading, logout }}>
      {isLoading ? <Spinner /> : children}
    </AuthContext.Provider>
  )
}