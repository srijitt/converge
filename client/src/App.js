import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import NavbarNew from './components/NavbarNew';
import Home from './components/Home'
import Admin from './components/Admin'


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/register',
        element: <Username></Username>
    },
    {
        path: '/password',
        element: <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path: '/profile',
        element: <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '/Ob1qe2t10q27520wGcv9MI7d1Moju5RG',
        element: <Admin></Admin>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
])

export default function App() {
    return (
        <main>
            {/* <NavbarNew /> */}
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}
