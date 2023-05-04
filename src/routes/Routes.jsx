import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ChefDetails from "../components/Home/ChefDetails/ChefDetails";
import Blog from "../components/Blog/Blog";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Home from "../components/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Chef from "../components/Home/Chef/Chef";





const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: 'chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://assignment10-server-jakaria987.vercel.app/chef/${params.id}`)
            },
            {
                path: 'singleChef/:id',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>
            }
            

        ]
    }
])
export default router;