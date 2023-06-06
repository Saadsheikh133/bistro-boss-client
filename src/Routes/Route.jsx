import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import MenuPage from "../Pages/MenuPage/MenuPage";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import MyCart from "../Pages/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menuPage',
                element: <MenuPage></MenuPage>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashBoard></DashBoard>
        </PrivateRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'allUsers',
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute>
                    <AddItem></AddItem>
                </AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute>
                    <ManageItems></ManageItems>
                </AdminRoute>
            }
        ]
    }
]);