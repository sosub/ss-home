import styled from 'styled-components';

export const WaterMark = styled.a`
  position: absolute;
  top: 8px;
  right: 13px;
  transition: opacity 0.15s;
  user-select: none;
  text-decoration: none;
  font-size: 16px;
  color: white;
  font-weight: 900;
  text-shadow: 0px 0.5px 1px black;
  opacity: 0.9;
  > span {
    color: white;
    font-size: 11px;
    font-weight: 300;
  }
  &:hover {
    opacity: 1;
  }
`;

export const Footer = styled.footer`
  background-color: #14151b;
`;
