import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { AIDBOX_API } from '@/api'

export default function Login() {
  const url = `${AIDBOX_API}/ui/console`

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-semibold">You are logged out</h1>
      <p className="text-gray-600 mt-2">Please login to continue.</p>
      <Button asChild className="mt-4">
        <Link to={url}>Go to Login</Link>
      </Button>
    </div>
  )
}