import { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
// import Hide from 'hidden-styled';
// import connect from './store';
import ListList from '../ListList';
import { Container, Info } from './styles';
import { ShareLink } from '../Theme';

export default class ListPage extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.orderBy !== this.props.orderBy) {
      this.props.data.refetch();
    }
    return true;
  }

  render() {
    // console.log('slug', this.props.data);
    const {
      query,
      path,
      name,
      description,
      data: { [query]: list, networkStatus },
      loadMore,
      changeOrderBy,
      orderBy
    } = this.props;
    if (networkStatus === 2 || networkStatus === 1) {
      return (
        <Flex align="center" justify="center" style={{ minHeight: 500 }}>
          <Helmet>
            <title>{name}</title>
          </Helmet>
          <p>Đang tải...</p>
        </Flex>
      );
    }
    if (list && list.edges && list.edges.length) {
      return (
        <Container>
          <Helmet>
            <title>{name}</title>
            <meta
              property="og:title"
              content={`Tổng hợp tất cả ${name} - SOSUB.ORG`}
            />
            <meta
              property="og:image"
              content="/static/home/img/thumbnail_sosub.png"
            />
            <meta property="og:description" content={description} />
          </Helmet>
          <Info px={[10, 80, 150, 250]}>
            <h1>{name}</h1>
            <ShareLink
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsosub.org%2F${path}%2F&display=popup&ref=plugin&src=like&kid_directed_site=0&app_id=1015678545158200`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Facebook
            </ShareLink>
          </Info>
          <ListList
            path={path}
            orderBy={orderBy}
            changeOrderBy={changeOrderBy}
            ordering={networkStatus === 4}
            data={list.edges}
            hasNextPage={list.pageInfo.hasNextPage}
            isLoadMore={networkStatus === 3}
            loadMore={loadMore}
          />
        </Container>
      );
    }
    return (
      <Flex align="center" justify="center" style={{ minHeight: 500 }}>
        <Helmet>
          <title>404 Page not found</title>
        </Helmet>
        <p>Trang không tồn tại</p>
      </Flex>
    );
  }
}

ListPage.propTypes = {
  query: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  changeOrderBy: PropTypes.func.isRequired
};
