import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Footer = styled.footer`
  background-color: #14151b;
`;

export const Logo = styled.img`
  height: 36px;
`;

export const SmallGray = styled.small`
  color: #6f6e72;
  font-size: 12px;
`;

export const Small = styled.small`
  color: white;
  font-size: 12px;
`;

export const SmallA = styled.a`
  font-size: 12px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
