import { StyledInput } from 'pages/SignupPage/SignupPage.styled';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { StyledIcon } from './PasswordInput.styled';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <StyledIcon type="button" onClick={toggleShowPassword}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </StyledIcon>
    </>
  );
};

export default PasswordInput;
