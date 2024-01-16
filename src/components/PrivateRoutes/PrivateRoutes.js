import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import React from 'react';

const PrivateRoutes = ({ children }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLogin ? (
    children
  ) : (
    <Navigate to="/welcome" state={{ from: location }} />
  );
};

export default PrivateRoutes;
