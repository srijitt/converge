import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import PageNotFound from './components/PageNotFound';
import Home from './components/Home'
import Admin from './components/Admin'
import PointsTable from './components/PointsTable';


/** root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/points',
        element: <PointsTable></PointsTable>
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
