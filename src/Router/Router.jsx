import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>
    }
]);

export default Router;