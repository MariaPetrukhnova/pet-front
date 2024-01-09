import { Navigate } from "react-router-dom";
import useAuth from "./services/authHook";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
  notify = Notify.info("You're not authorized")
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  return  !isLoggedIn && !isRefreshing ? 
  (<Navigate to={redirectTo} notify/>) 
  : Component;
}