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
    background-image: url(${bgTab});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTab2x});
    }
  }

  @media screen and (min-width: 1440px) {
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
`;
