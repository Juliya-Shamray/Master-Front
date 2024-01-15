import styled from 'styled-components';

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
  }
  .react-datepicker {
    background-color: #161f37;
    width: 219px;
  }
  .react-datepicker__header {
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
