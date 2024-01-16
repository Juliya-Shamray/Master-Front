import { PageNotFound } from 'pages/PageNotFound';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SinginPage';
import WelcomePage from 'pages/WelcomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshThunk } from './redux/auth/operations';
import { selectIsRefresh } from './redux/auth/selectors';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import DrinksPage from 'pages/DrinksPage';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return !isRefresh ? (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoutes>
            <SharedLayout />
          </PrivateRoutes>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="drinks" element={<DrinksPage />} />
      </Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  ) : (
    <h2>Loading...</h2>
  );
};

export default App;
