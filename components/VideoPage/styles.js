import styled from 'styled-components';
import { Box } from 'grid-styled';
import { Container as ThemedContainer } from '../Theme';

export const Container = styled(ThemedContainer)`
  padding-bottom: 100px;
  padding-top: 20px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const H3 = styled.h3`
  font-size: 20px;
  margin: 0;
`;

export const P = styled.p`
  margin-bottom: 0;
  margin-top: 0;
`;

export const A = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SponsorTitle = styled.p`
  margin-bottom: 8px;
  margin-top: 0;
  color: #b2b2b2;
`;

export const BoxRight = styled(Box)`
  border-left: 1px solid #e2e2e2;
  h2 {
    font-size: 18px;
    margin: 0;
  }
  a {
    text-decoration: none;
    &:hover {
      h2 {
        text-decoration: underline;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  margin-right: 10px;
`;

export const Banner = styled.img`
  height: 80px;
  max-width: 600px;
  width: 100%;
  &:hover {
    opacity: 0.95;
  }
`;

export const RandomVideos = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    margin-top: 30px;
  }
`;

export const VideoA = styled.a`
  text-decoration: none;
  p {
    font-weight: 500;
    margin: 0;
  }
  small {
    color: #a2a2a2;
    font-weight: 100;
  }
`;

export const VideoImage = styled.div`
  min-width: 90px;
  height: 60px;
  border-radius: 6px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  margin-right: 10px;
`;

export const BecomeSponsorA = styled.a`
  text-decoration: none;
  padding: 10px 25px;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 25px;
  margin-top: 10px;
  display: inline-block;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Speaker = styled.div`
  text-align: center;
  margin-right: 30px;
`;

export const Tabs = styled.div`
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 30px;
`;

export const Tab = styled.div`
  padding: 8px 13px;
  border-bottom: 3px solid ${({ active }) => (active ? '#df5855' : 'white')};
  display: inline-block;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  &:hover {
    border-bottom-color: ${({ active }) => (active ? '#df5855' : '#e2e2e2')};
  }
`;

export const Tag = styled.a`
  text-decoration: none;
  padding: 10px 25px;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 25px;
  margin-top: 10px;
  display: inline-block;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Category = styled.a`
  text-decoration: none;
  padding: 10px 25px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 10px;
  display: inline-block;
  margin-right: 10px;
  &:hover {
    background-color: #e2e2e2;
  }
`;

export const SubCategory = styled.a`
  text-decoration: none;
  padding: 10px 25px;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  margin-top: 10px;
  display: inline-block;
  margin-right: 10px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const EmbedInput = styled.input`
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  font-size: 14px;
  padding: 8px 13px;
  margin-left: 10px;
  outline: none;
  width: 200px;
  margin-top: 10px;
`;
