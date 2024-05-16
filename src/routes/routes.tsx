import DashboardLayout from "@/layouts/DashboardLayout";
import HomeLayout from "@/layouts/HomeLayout";
import CreateAccountPage from "@/pages/CreateAccount";
import DashboardPage from "@/pages/dashboard/Dashboard";
import { EditProduct } from "@/pages/dashboard/EditProduct";
import {  Orders } from "@/pages/dashboard/Orders";
import { Products } from "@/pages/dashboard/Products";
import Home from "@/pages/Home";
import { Login } from "@/pages/Login";
import Profile from "@/pages/Profile";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children:[
        {
            path: "/dashboard/",
            element: <DashboardPage />,
          },
        {
            path: "/dashboard/orders",
            element: <Orders />,
          },
          {
            path: "/dashboard/products",
            element: <Products/>,
            children:[
             
            ]
          },
          { path: "/dashboard/products/edit",
          element: <EditProduct/>,}
    
    ]
  },
  {
    path: "/signUp",
    element: <CreateAccountPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
