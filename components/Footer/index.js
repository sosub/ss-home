import { Flex, Box } from 'grid-styled';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import { Link } from '../../routes';
import {
  Footer as StyledFooter,
  Logo,
  Small,
  SmallA,
  SmallGray
} from './styles';
import { Container } from '../Theme';

const Footer = () => (
  <StyledFooter>
    <Container>
      <Flex
        align="center"
        direction={['column', 'column', 'column', 'row']}
        py={60}
      >
        <Box width={[1, 1, 1 / 5]} px={20} pb={[30, 30, 30, 0]}>
          <Flex justify="center">
            <Logo src="/static/home/img/logo_footer.png" />
          </Flex>
        </Box>
        <Box width={[1, 1, 3 / 5]} px={20}>
          <Box pb={[30, 30, 30, 10]}>
            <SmallGray>&copy; 2017 SOSUB.ORG | </SmallGray>
            <SmallA href="/gioi-thieu/" target="_blank">
              Giới thiệu
            </SmallA>
            <Small> | </Small>
            <SmallA href="/gop-y/" target="_blank">
              Góp ý
            </SmallA>
            <Small> | </Small>
            <SmallA href="/dich-thuat/" target="_blank">
              Dịch thuật
            </SmallA>
            <Small> | </Small>
            <SmallA href="/give/" target="_blank">
              Tài trợ
            </SmallA>
            <Small> | </Small>
            <Link route="list" params={{ type: 'category' }} passHref>
              <SmallA>Danh mục</SmallA>
            </Link>
            {/* <Small> | </Small>
            <Link route="list" params={{ type: 'tag' }} passHref>
              <SmallA>Tags</SmallA>
            </Link> */}
            <Small> | </Small>
            <Link route="list" params={{ type: 'playlist' }} passHref>
              <SmallA>Playlists</SmallA>
            </Link>
            <Small> | </Small>
            <Link route="list" params={{ type: 'speaker' }} passHref>
              <SmallA>Speakers</SmallA>
            </Link>
            <Small> | </Small>
            <Link route="list" params={{ type: 'source' }} passHref>
              <SmallA>Sources</SmallA>
            </Link>
            <Small> | </Small>
            <Link route="list" params={{ type: 'sponsor' }} passHref>
              <SmallA>Sponsors</SmallA>
            </Link>
            <Small> | </Small>
            <Link route="list" params={{ type: 'sosuber' }} passHref>
              <SmallA>Sosubers</SmallA>
            </Link>
            <Small> | </Small>
            <Link route="listing" passHref>
              <SmallA>Listing</SmallA>
            </Link>
          </Box>
          <Box pb={[30, 30, 30, 10]}>
            <SmallA href="mailto:contact@sosub.org">contact@sosub.org</SmallA>
            <SmallGray>
              &nbsp;| Hortense Plé, 25 Rue Louis Barthou, 35000 Rennes, France
            </SmallGray>
          </Box>
        </Box>
        <Box width={[1, 1, 1 / 5]} px={20}>
          <Flex justify="center" align="center">
            <a
              href="https://facebook.com/sosub.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Small>Kết nối với chúng tớ &nbsp;</Small>
              <FaFacebookSquare style={{ fill: 'white' }} size={25} />
            </a>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </StyledFooter>
);

export default Footer;
