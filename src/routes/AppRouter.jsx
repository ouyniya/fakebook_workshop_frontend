import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import App from '../App'
import Login from '../pages/Login'
import Friends from '../pages/Friends'

const guestRouter = createBrowserRouter([
    {path: '/', element: <Login /> },
    {path: '*', element: <Navigate to='/' /> }
])

const userRouter = createBrowserRouter([
    {path: '/', element: <App />,
        children: [
            // default page = index: true
            {index: true, element: <p>Sidebar + posts</p> },
            {path: 'friends', element: <Friends /> },
            {path: '*', element: <Navigate to='/' /> }
        ]
    }
])

function AppRouter() {
    const user = ''
    // choose path 
    const finalRouter = user ? userRouter : guestRouter 

  return (
    <RouterProvider router={finalRouter} />
  )
}

export default AppRouter