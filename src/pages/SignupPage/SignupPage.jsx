import { StyledWrap } from 'pages/WelcomePage/WelcomePage.styled';
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledInputDate,
  StyledLi,
  StyledText,
  StyledTitle,
} from './SignupPage.styled';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { addDays, subDays } from 'date-fns';

const SignupPage = () => {
  const [startDate, setStartDate] = useState();

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
              <StyledInputDate
                selected={startDate}
                popperPlacement="bottom-end"
                onChange={date => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                excludeDateIntervals={[
                  {
                    start: subDays(new Date(), 1),
                    end: addDays(new Date(), 1000),
                  },
                ]}
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
