import HomeLayout from "@/layouts/HomeLayout";
import CreateAccountPage from "@/pages/CreateAccount";
import { Dashboard } from "@/pages/Dashboard";
import Home from "@/pages/Home";
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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <CreateAccountPage />,
  },
]);
