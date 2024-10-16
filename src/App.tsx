import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Pizzas from './pages/Pizzas'
import Drinks from './pages/Drinks'
import Promos from './pages/Promos'
import Contacts from './pages/Contacts'
import ErrorPage from './pages/ErrorPage'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import AuthPage from './pages/AuthPage'
import OrderPage from './pages/OrderPage'
import ProtectedRoute from './hoc/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Pizzas />,
      },
      {
        path: 'drinks',
        element: <Drinks />,
      },
      {
        path: 'promos',
        element: <Promos />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'cart/order',
        element: (
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
export default function App() {
  return <RouterProvider router={router} />
}
