import PasswordInput from 'components/PasswordInput/PasswordInput';
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLi,
  StyledText,
  StyledTitle,
} from 'pages/SignupPage/SignupPage.styled';
import { StyledWrap } from 'pages/WelcomePage/WelcomePage.styled';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  return (
    <StyledWrap>
      <StyledDiv className="container">
        <StyledTitle>Sign In</StyledTitle>
        <StyledForm>
          <ul>
            <StyledLi>
              <StyledInput type="email" placeholder="Email" />
            </StyledLi>
            <StyledLi>
              <PasswordInput />
            </StyledLi>
            <StyledButton>Sign in</StyledButton>
          </ul>
        </StyledForm>
        <StyledText>
          <Link to="/signup">Sign up</Link>
        </StyledText>
      </StyledDiv>
    </StyledWrap>
  );
};

export default SigninPage;
