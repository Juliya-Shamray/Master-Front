import styled from 'styled-components';

export const StyledIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.white};
`;
