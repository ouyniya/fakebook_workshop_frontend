import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import App from '../App'
import Login from '../pages/Login'
import Friends from '../pages/Friends'
import useUserStore from '../stores/userStores'
import Profile from '../pages/Profile'
import SidebarMenu from '../components/SidebarMenu'
import PostContainer from '../components/PostContainer'
import SidebarContact from '../components/SidebarContact'

const guestRouter = createBrowserRouter([
    {path: '/', element: <Login /> },
    {path: '*', element: <Navigate to='/' /> }
])

const userRouter = createBrowserRouter([
    {path: '/', element: <App />,
        children: [
            // default page = index: true
            {index: true, element: <>
                <SidebarMenu />
                <PostContainer />
                <SidebarContact />
            </> },
            {path: 'friends', element: <Friends /> },
            {path: 'profile', element: <Profile /> },
            {path: '*', element: <Navigate to='/' /> }
        ]
    }
])

function AppRouter() {
    const user = useUserStore(state => state.user)
    // choose path 
    const finalRouter = user ? userRouter : guestRouter 

  return (
    <RouterProvider key={user?.id} router={finalRouter} /> // use key to force re-render
  )
}

export default AppRouter