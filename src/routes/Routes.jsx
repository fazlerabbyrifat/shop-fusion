import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import Payment from "../pages/Payment/Payment";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'myProducts',
                element: <MyProducts></MyProducts>
            }
        ]
    }
])

export default router;