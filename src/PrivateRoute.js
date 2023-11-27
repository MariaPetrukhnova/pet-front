import { Navigate } from "react-router-dom";
import useAuth from "./services/authHook";

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  return  !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
}