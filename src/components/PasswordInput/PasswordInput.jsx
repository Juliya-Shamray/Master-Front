import { StyleError, StyledInput } from 'pages/SignupPage/SignupPage.styled';
import { forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { StyledDiv, StyledIcon } from './PasswordInput.styled';

const PasswordInput = forwardRef(({ field, errors, trigger }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledDiv>
      <StyledInput
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        value={field.value || ''}
        onChange={e => field.onChange(e.target.value)}
        required
        onBlur={() => trigger('password')}
      />
      <StyledIcon type="button" onClick={toggleShowPassword}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </StyledIcon>
      {errors && errors.field && (
        <StyleError>{errors.field.message}</StyleError>
      )}
    </StyledDiv>
  );
});

export default PasswordInput;
