import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registration />,
  },
]);
