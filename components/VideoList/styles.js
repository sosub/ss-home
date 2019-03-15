import styled from 'styled-components';

const TEXT_COLOR = '#14151b';
const TH_TEXT_COLOR = '#6f6e72';
const BORDER_COLOR = '#f2f2f2';
const VISITED_COLOR = '#6f6e72';
const RED_COLOR = '#e22420';
const RED_VISITED_COLOR = '#df5855';

const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-bottom: 20px;
`;

export const TH = styled.th`
  font-weight: normal;
  text-align: left;
  border-bottom: 1px solid ${BORDER_COLOR};
  &:last-child {
    button {
      text-align: right;
    }
  }
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
  &:last-child {
    text-align: right;
  }
`;

export const ColContent = styled.div`
  padding: 20px;
`;

export const A = styled.a`
  font-size: 16px;
  padding: 20px;
  display: block;
  color: ${({ publishedAt }) =>
    publishedAt > twoDaysAgo ? RED_COLOR : TEXT_COLOR};
  text-decoration: none;
  > b {
    color: ${({ publishedAt }) =>
      publishedAt > twoDaysAgo ? RED_COLOR : TEXT_COLOR};
  }
  &:visited {
    color: ${({ publishedAt }) =>
      publishedAt > twoDaysAgo ? RED_VISITED_COLOR : VISITED_COLOR};
    > b {
      color: ${({ publishedAt }) =>
        publishedAt > twoDaysAgo ? RED_VISITED_COLOR : VISITED_COLOR};
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
