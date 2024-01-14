import styled from 'styled-components';

import bgMob from '../styles/images/Start-mob@1x.webp';
import bgMob2x from '../styles/images/Start-mob@2x.webp';
import bgTab from '../styles/images/Start-tab@1x.webp';
import bgTab2x from '../styles/images/Start-tab@2x.webp';
import bgDesk from '../styles/images/Start-desk@1x.webp';
import bgDesk2x from '../styles/images/Start-desk@2x.webp';

export const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${bgMob});
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2x});
  }

  @media screen and (min-width: 768px) {
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 768px;
    }

    background-image: url(${bgTab});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTab2x});
    }
  }

  @media screen and (min-width: 1400px) {
    & > div {
      width: 1400px;
    }
    background-image: url(${bgDesk});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesk2x});
    }
  }
`;

export const StyledTitle = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0.56px;
  margin-bottom: 14px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: 0.8px;
    text-align: left;
  }
`;

export const StyledText = styled.p`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.28px;
  margin-bottom: 40px;
  width: 319px;
  @media screen and (min-width: 768px) {
    width: 470px;
    text-align: left;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const StyledWrapButtons = styled.div`
  text-align: center;
`;

export const commonButtonStyles = `
  margin-right: 14px;
  padding: 14px 40px;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  @media screen and (min-width:768px){
    font-size: 16px;
    line-height: 1.13;
      padding: 18px 44px;
  }
`;

export const LightButton = styled.button`
  ${commonButtonStyles}
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.lightGrey};
`;

export const DarkButton = styled.button`
  ${commonButtonStyles}
  color: ${props => props.theme.colors.lightGrey};
  border: 1px solid ${props => props.theme.colors.borderColor};
  margin-right: 0;
`;
