import CreateAccountPage from "@/pages/CreateAccount";
import { Dashboard } from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path:'/signUp',
    element:<CreateAccountPage/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
]);
