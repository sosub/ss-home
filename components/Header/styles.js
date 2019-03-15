import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'dark' ? '#111' : '#e2e2e2')};
  background-color: ${({ theme }) => (theme === 'dark' ? '#111' : 'white')};
`;

export const Logo = styled.img`
  height: 32px;
`;

export const A = styled.a`
  color: ${({ theme }) => (theme === 'dark' ? 'gray' : '#333')};
  text-decoration: none;
  padding: 0 10px;
  border-right: 1px solid
    ${({ theme }) => (theme === 'dark' ? 'gray' : '#e2e2e2')};
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    border-right: 0;
  }
`;

export const Input = styled.input`
  width: 250px;
  color: #6f6e72;
  border: 0;
  outline: none;
  background-color: #f8f8f8;
  font-weight: bold;
  font-size: 14px;
  padding: 7px 15px;
  transition: background-color 0.2s;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    background-color: #e2e2e2;
    & + * {
      background-color: #e2e2e2;
    }
  }
`;

export const SearchButton = styled.button`
  padding: 3.5px 15px;
  background-color: #f8f8f8;
  transition: background-color 0.2s;
  border: 0;
  outline: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  > svg {
    fill: #6f6e72;
    &:hover {
      fill: #333;
    }
  }
`;

export const Menu = styled.div`
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'dark' ? 'black' : '#f2f2f2')};
  background-color: ${({ theme }) => (theme === 'dark' ? '#232323' : 'white')};
`;
