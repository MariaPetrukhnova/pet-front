import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectUserLogin } from "../redux/auth/selectors";

export default function useAuth() {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUserLogin),
    }
};