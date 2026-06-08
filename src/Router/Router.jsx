import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Agriculture from '../Pages/Agriculture/Agriculture';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:"agriculture",
                element:<Agriculture/>
            }
        ]
    }
]);

export default Router;