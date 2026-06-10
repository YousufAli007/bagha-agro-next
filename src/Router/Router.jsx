// import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Agriculture from '../Pages/Agriculture/Agriculture';
import Livestock from '../Pages/Livestock/Livestock';
import Fisheries from '../Pages/Fisheries/Fisheries';
import AgriculturalMarket from '../Pages/AgriculturalMarket/AgriculturalMarket';
import ErrorPage from '../components/ErrorPage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement:<ErrorPage/>, 
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "agriculture",
                element: <Agriculture />
            },
            {
                path: "livestock",
                element: <Livestock />
            },
            {
                path: "fisheries",
                element: <Fisheries />
            },
            {
                path: "agro-market",
                element: <AgriculturalMarket />
            }
        ]
    }
]);

export default Router;