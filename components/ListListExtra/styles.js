import styled from 'styled-components';

const TEXT_COLOR = '#14151b';
const TH_TEXT_COLOR = '#6f6e72';
const BORDER_COLOR = '#f2f2f2';
const VISITED_COLOR = '#6f6e72';

const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-bottom: 20px;
`;

export const TH = styled.th`
  font-weight: normal;
  border-bottom: 1px solid ${BORDER_COLOR};
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
  padding: 20px;
  display: block;
  font-size: 16px;
  color: ${TEXT_COLOR};
  text-decoration: none;
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

export const IconButton = styled.button`
  border: none;
  vertical-align: top;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  text-align: left;
  > * {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: ${TH_TEXT_COLOR};
    transition: color 0.2s;
    &:last-child {
      margin-left: 5px;
      margin-top: -3px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  &:hover > * {
    color: ${TEXT_COLOR};
  }
`;

export const LoadMoreButton = styled.button`
  border: 1px solid ${BORDER_COLOR};
  padding: 15px 35px;
  border-radius: 3px;
  font-size: 16px;
  background-color: ${BORDER_COLOR};
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;
