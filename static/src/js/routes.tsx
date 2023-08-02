import { createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import Foo from './pages/Foo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/foo',
    element: <Foo />,
  },
])
