import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-primary">404</h1>
      <p className="text-lg text-gray-600">Oops! The page you are looking for does not exist.</p>
      <Button asChild className="mt-4">
        <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go Home
        </Link>
      </Button>
    </div>
  )
}

export default NotFoundPage