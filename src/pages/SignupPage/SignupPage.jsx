import { StyledWrap } from 'pages/WelcomePage/WelcomePage.styled';
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLi,
  StyledText,
  StyledTitle,
} from './SignupPage.styled';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';

const SignupPage = () => {
  const [startDate, setStartDate] = useState();

  const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
    <StyledInput placeholder="dd/mm/yyyy" onClick={onClick} ref={ref} />
  ));
  return (
    <StyledWrap>
      <StyledDiv className="container">
        <StyledTitle>Sign Up</StyledTitle>
        <StyledForm>
          <ul>
            <StyledLi>
              <StyledInput type="text" placeholder="Name" />
            </StyledLi>
            <StyledLi>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                popperPlacement="bottom-end"
                customInput={<ExampleCustomInput />}
              />
            </StyledLi>
            <StyledLi>
              <StyledInput type="email" placeholder="Email" />
            </StyledLi>
            <StyledLi>
              <StyledInput type="password" placeholder="Password" />
            </StyledLi>
            <StyledButton>Sign up</StyledButton>
          </ul>
        </StyledForm>
        <StyledText>
          <Link to="/signin">Sign in</Link>
        </StyledText>
      </StyledDiv>
    </StyledWrap>
  );
};

export default SignupPage;
