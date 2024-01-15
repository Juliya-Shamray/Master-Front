import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledTitle = styled.h2`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.8px;
  }
`;

export const StyledForm = styled.form`
  .react-datepicker-wrapper {
    width: 100%;
    border-radius: 8px;
  }
  .react-datepicker {
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    font-family: Manrope;
    width: 219px;
  }
  .react-datepicker__header {
    width: 219px;
    border-bottom: none;
    background-color: #161f37;
    padding: 14px 14px 0 14px;
    font-family: Manrope;
  }
  .react-datepicker__month {
    margin: 0;
    height: max-content;
    padding-bottom: 14px;
  }
  .react-datepicker__current-month {
    color: ${props => props.theme.colors.lightGrey};
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    padding-bottom: 14px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
  .react-datepicker__day {
    color: ${props => props.theme.colors.lightGrey};
    border-radius: 50%;
    margin: 0;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  .react-datepicker__day-names {
    padding: 0;
    margin-bottom: 5px;
  }
  .react-datepicker__day-name {
    color: ${props => props.theme.colors.placeholderColor};
    padding-top: 14px;
    margin: 0;
  }
  .react-datepicker__navigation {
    margin-top: 10px;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--today {
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.white};
  }

  width: 280px;
  margin-bottom: 14px;
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const StyledLi = styled.li`
  margin-bottom: 14px;
  width: 100%;
  position: relative;
`;
export const StyledIcon = styled.img`
  position: absolute;
  right: 18px;
  top: 17px;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 200px;
  padding: 18px 24px;
  transition: border 250ms linear;
  color: ${props => props.theme.colors.lightGrey};
  &::placeholder {
    transition: color 250ms linear;
    color: ${props => props.theme.colors.placeholderColor};
    font-size: 14px;
    line-height: 1.29;
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.placeholderColor};
    &::placeholder {
      color: ${props => props.theme.colors.lightGrey};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    &::placeholder {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;

export const StyledInputDate = styled(DatePicker)`
  font-size: 14px;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 200px;
  padding: 18px 24px;
  transition: border 250ms linear;
  color: ${props => props.theme.colors.lightGrey};
  &::placeholder {
    transition: color 250ms linear;
    color: ${props => props.theme.colors.placeholderColor};
    font-size: 14px;
    line-height: 1.29;
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.placeholderColor};
    &::placeholder {
      color: ${props => props.theme.colors.lightGrey};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    &::placeholder {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;

export const StyledButton = styled.button`
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  margin-top: 14px;
  width: 100%;
  padding: 18px 10px;
  border-radius: 42px;
  background: ${props => props.theme.colors.lightGrey};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    margin-top: 26px;
  }
`;

export const StyledText = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-decoration-line: underline;
  @media screen and (min-width: 768px) {
    width: 400px;
    font-size: 14px;
    line-height: 1.29;
  }
`;
