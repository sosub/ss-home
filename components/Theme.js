import styled from 'styled-components';

export const App = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const ShareLink = styled.a`
  color: #4267b2;
  font-weight: bold;
  &:hover {
    color: #34528e;
  }
`;
