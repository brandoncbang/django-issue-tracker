import { Link, Outlet } from 'react-router-dom'

export default function AppLayout({ children }) {
  return (
    <div className="max-w-screen-md mx-auto px-6 py-4">
      <header>
        <nav className="flex space-x-4">
          <Link to="/" className="text-lg font-medium underline text-indigo-600">
            Home
          </Link>
          <Link to="/foo" className="text-lg font-medium underline text-indigo-600">
            Foo
          </Link>
        </nav>
      </header>
      <main className="mt-8">
        {children}
      </main>
    </div>
  )
}
