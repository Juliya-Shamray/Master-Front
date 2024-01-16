import PageNotFound from 'pages/PageNotFound';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SinginPage';
import WelcomePage from 'pages/WelcomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from './redux/auth/operations';
import { selectIsRefresh } from './redux/auth/selectors';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import DrinksPage from 'pages/DrinksPage';
import PrivateRoutes from './components/PrivateRoutes';
import AddDrinkPage from 'pages/AddDrinkPage';
import FavoriteDrinksPage from 'pages/FavoriteDrinksPage';
import DrinkPage from 'pages/DrinksPage';
import MyDrinkPage from 'pages/MyDrinksPage';

const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return !isRefresh ? (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <SharedLayout />
          </PrivateRoutes>
        }
      >
        <Route path="/home" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/add" element={<AddDrinkPage />} />
        <Route path="/favorites" element={<FavoriteDrinksPage />} />
        <Route path=" /drink/:drinkId" element={<DrinkPage />} />
        <Route path=" /my" element={<MyDrinkPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  ) : (
    <h2>Loading...</h2>
  );
};

export default App;
