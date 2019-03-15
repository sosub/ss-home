import styled from 'styled-components';
import { Box } from 'grid-styled';
import { Container as ThemedContainer } from '../Theme';

const TEXT_COLOR = '#14151b';
const BORDER_COLOR = '#f2f2f2';
const VISITED_COLOR = '#6f6e72';

export const Container = styled(ThemedContainer)`
  padding-bottom: 100px;
  padding-top: 50px;
`;

export const Info = styled(Box)`
  text-align: center;
  margin-bottom: 50px;
`;

export const ListImage = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const TH = styled.th`
  font-weight: normal;
  border-bottom: 1px solid ${BORDER_COLOR};
`;

export const THContent = styled.div`
  padding: 20px;
`;

export const TR = styled.tr`
  cursor: pointer;
  &:hover * {
    text-decoration: underline;
  }
`;

export const Col = styled.td`
  font-size: 16px;
  border-bottom: 1px solid ${BORDER_COLOR};
`;

export const A = styled.a`
  font-size: 16px;
  color: ${TEXT_COLOR};
  text-decoration: none;
  padding: 20px;
  display: block;
  > b {
    color: ${TEXT_COLOR};
  }
  &:visited {
    color: ${VISITED_COLOR};
    > b {
      color: ${VISITED_COLOR};
    }
  }
`;
