// import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Agriculture from '../Pages/Agriculture/Agriculture';
import Livestock from '../Pages/Livestock/Livestock';
import Fisheries from '../Pages/Fisheries/Fisheries';
import AgriculturalMarket from '../Pages/AgriculturalMarket/AgriculturalMarket';
import ErrorPage from '../components/ErrorPage';
import Loging from '../components/Loging';
import Register from '../components/Register';
import Ai from '../Pages/Ai/Ai';
import AddProduct from '../Pages/Dashboard/AddProduct';
import MyProducts from '../Pages/Dashboard/MyProducts';
import OrderedProducts from '../Pages/Dashboard/OrderedProducts';
import LearnAgriculture from '../Pages/LearnAgriculture/LearnAgriculture';

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
            },
            {
                path:'login',
                element:<Loging/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'ai-assistant',
                element:<Ai/>
            },
            {
                path: 'dashboard/add-product',
                element: <AddProduct />
            },
            {
                path: 'dashboard/my-products',
                element: <MyProducts />
            },
            {
                path: 'dashboard/ordered-products',
                element: <OrderedProducts />
            },
            {
                path:'learn',
                element:<LearnAgriculture/>
            }
        ]
    }
]);

export default Router;