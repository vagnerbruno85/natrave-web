import { useLocalStorage } from 'react-use'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { Dashboard } from "./dashboard";
import { Profile } from "./profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
]);

export const Router = () => {
  const [auth] = useLocalStorage('auth')
 
  return (
    <RouterProvider router={router} />
  )
}