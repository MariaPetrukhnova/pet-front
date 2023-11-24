import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Loader from './Loader';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';


const StartPage = lazy(() => import('./pages/startPage/StartPage'));
const RegisterPage = lazy(() => import('./pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const MainPage = lazy(() => import('./pages/mainPage/MainPage'));

function App() {

const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);

useEffect(()=> {
  dispatch(refreshUser());
}, [dispatch])

  return isRefreshing ? (
    <Loader/>
    ) : (
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<RestrictedRoute component={StartPage} redirectTo="/main" />} />
          <Route path='/register' element={<RestrictedRoute component={RegisterPage} redirectTo="/main" />}/>
          <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo="/main" />}/>
        </Route>
        <Route path='' element={<SharedLayout/>}>
          <Route path="/main" element={<PrivateRoute component={MainPage} redirectTo="/login" />} />
        </Route>
      </Routes>
    )
};

export default App;