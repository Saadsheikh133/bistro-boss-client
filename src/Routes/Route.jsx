import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import MenuPage from "../Pages/MenuPage/MenuPage";
import Order from "../Pages/Order/Order";

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
            }
        ]
    },
]);