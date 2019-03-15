import styled from 'styled-components';
import { Box } from 'grid-styled';
import { Container as ThemedContainer } from '../Theme';

export const Container = styled(ThemedContainer)`
  padding-bottom: 100px;
  padding-top: 50px;
`;

export const Info = styled(Box)`
  text-align: center;
  margin-bottom: 50px;
`;

export const ListImage = styled.img`
  height: 150px;
`;
