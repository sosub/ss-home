import { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Hide from 'hidden-styled';
import connect from './store';
import VideoList from '../VideoList';
import ListList from '../ListList';
import { Container, Info } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class SearchPage extends Component {
  render() {
    // console.log('search', this.props.data);
    const {
      queryString,
      data: { searchList, networkStatus },
      loadMore
    } = this.props;
    return (
      <Container>
        <Helmet>
          <title>{`${queryString} - Tìm kiếm`}</title>
          <meta property="og:title" content="Trang tìm kiếm - SOSUB.ORG" />
          <meta
            property="og:desciption"
            content={`Từ khoá đang tìm kiếm: ${queryString}`}
          />
          <meta
            property="og:image"
            content="/static/home/img/thumbnail_sosub.png"
          />
        </Helmet>
        <Info px={[10, 80, 150, 250]}>
          <h2>Kết quả tìm kiếm với từ khoá</h2>
          <Hide>
            <p>{`"${queryString}"`}</p>
          </Hide>
        </Info>
        {networkStatus === 2 || networkStatus === 1 ? (
          <Flex align="center" justify="center" style={{ minHeight: 300 }}>
            <p>Đang tải...</p>
          </Flex>
        ) : (
          <div>
            {!searchList.videos.edges.length &&
            !searchList.speakers.edges.length &&
            !searchList.sources.edges.length ? (
              <Flex align="center" justify="center" style={{ minHeight: 300 }}>
                <p>Không có kết quả nào phù hợp.</p>
              </Flex>
            ) : (
              <div>
                {searchList.videos.edges.length ? (
                  <div>
                    <h2>DANH SÁCH VIDEOS</h2>
                    <VideoList
                      videos={searchList.videos.edges}
                      hasNextPage={searchList.videos.pageInfo.hasNextPage}
                      isLoadMore={networkStatus === 3}
                      loadMore={loadMore}
                    />
                  </div>
                ) : null}
                {searchList.speakers.edges.length ? (
                  <Box mt={100}>
                    <h2>DANH SÁCH TÁC GIẢ</h2>
                    <ListList path="speaker" data={searchList.speakers.edges} />
                  </Box>
                ) : null}
                {searchList.sources.edges.length ? (
                  <Box mt={100}>
                    <h2>DANH SÁCH KÊNH GỐC</h2>
                    <ListList path="source" data={searchList.sources.edges} />
                  </Box>
                ) : null}
              </div>
            )}
          </div>
        )}
      </Container>
    );
  }
}

SearchPage.propTypes = {
  queryString: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired
};

export default connect(SearchPage);
