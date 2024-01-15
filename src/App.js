import { PageNotFound } from 'pages/PageNotFound';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SinginPage';
import WelcomePage from 'pages/WelcomePage';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />

      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default App;
