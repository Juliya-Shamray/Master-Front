import {
  DarkButton,
  LightButton,
  StyledText,
  StyledTitle,
  StyledWrap,
  StyledWrapButtons,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <StyledWrap>
      <div className="container">
        <StyledTitle>Welcome to the app!</StyledTitle>
        <StyledText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </StyledText>
        <StyledWrapButtons>
          <LightButton to="/signup">Sign Up</LightButton>
          <DarkButton to="/signin">Sign In</DarkButton>
        </StyledWrapButtons>
      </div>
    </StyledWrap>
  );
};
export default WelcomePage;
