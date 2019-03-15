import { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Router from 'next/router';
import Hide from 'hidden-styled';
import IoIosSearchStrong from 'react-icons/lib/io/ios-search-strong';
import connect from './store';
import { Link } from '../../routes';
import {
  Header as StyledHeader,
  Logo,
  A,
  Input,
  SearchButton,
  Menu
} from './styles';
import { Container } from '../Theme';

class Header extends Component {
  state = {
    searchText: ''
  };
  search() {
    // Router.push('/search/', `/search/?query=${this.state.searchText}`);
    Router.pushRoute(`/search/?query=${this.state.searchText}`);
  }
  render() {
    const { theme, data } = this.props;
    const { menus } = data;
    return (
      <header>
        <StyledHeader theme={theme}>
          <Container>
            <Flex px={20} py={5} justify="space-between" align="center">
              <Link route="/" passHref>
                <a>
                  <Logo src="/static/home/img/logo.png" />
                </a>
              </Link>
              <Hide xs>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.search();
                  }}
                >
                  <Flex align="center">
                    <Input
                      // value={this.state.searchText}
                      onChange={e => {
                        this.setState({ searchText: e.target.value });
                      }}
                      placeholder="Tìm kiếm"
                    />
                    <SearchButton type="button" onClick={() => this.search()}>
                      <IoIosSearchStrong size={25} />
                    </SearchButton>
                  </Flex>
                </form>
              </Hide>
            </Flex>
          </Container>
        </StyledHeader>
        {menus && menus.length > 0 ? (
          <Menu theme={theme}>
            <Container>
              <Box px={10} py={5}>
                {menus.map(menu => {
                  if (menu.link.slice(0, 4) === 'http') {
                    return (
                      <A
                        key={menu.link}
                        href={menu.link}
                        target="_blank"
                        theme={theme}
                      >
                        {menu.name}
                      </A>
                    );
                  }
                  return (
                    <Link key={menu.link} route={menu.link} passHref>
                      <A theme={theme}>{menu.name}</A>
                    </Link>
                  );
                })}
              </Box>
            </Container>
          </Menu>
        ) : null}
      </header>
    );
  }
}

Header.defaultProps = {
  theme: ''
};

Header.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.string
};

export default connect(Header);
