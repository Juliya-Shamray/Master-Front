import { StyledTitle, StyledWrap } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <StyledWrap>
      <div className="container">
        <StyledTitle>Welcome to the app!</StyledTitle>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div>
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </div>
    </StyledWrap>
  );
};
export default WelcomePage;
