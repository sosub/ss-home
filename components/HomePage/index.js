import { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Hide from 'hidden-styled';
import connect from './store';
import VideoListExtra from '../VideoListExtra';
import ListListExtra from '../ListListExtra';
import { Container, Info, ListImage } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  render() {
    const {
      data: { videos, randomVideos, sources, speakers, networkStatus },
      loadMore
    } = this.props;
    return (
      <Container>
        <Helmet>
          <title>Trang chủ</title>
          <meta property="og:title" content="Trang chủ - SOSUB.ORG" />
          <meta
            property="og:desciption"
            content="Học mọi thứ qua phụ đề song ngữ"
          />
          <meta
            property="og:image"
            content="/static/home/img/thumbnail_sosub.png"
          />
        </Helmet>
        {networkStatus === 2 || networkStatus === 1 ? (
          <Flex align="center" justify="center" style={{ minHeight: 300 }}>
            <p>Đang tải...</p>
          </Flex>
        ) : (
          <Box px={20}>
            <Info px={[10, 80, 150, 250]}>
              <Hide xs sm>
                <ListImage
                  src="/static/home/img/thumbnail_sosub.png"
                  alt="SOSUB.ORG"
                />
              </Hide>
            </Info>
            {videos.edges.length ? (
              <div>
                <h2>VIDEOS MỚI NHẤT</h2>
                <VideoListExtra
                  videos={videos.edges}
                  hasNextPage={videos.pageInfo.hasNextPage}
                  isLoadMore={networkStatus === 3}
                  loadMore={loadMore}
                  orderBy="-published_at"
                />
              </div>
            ) : null}
            {randomVideos.edges.length ? (
              <Box mt={100}>
                <h2>VIDEOS NGẪU NHIÊN</h2>
                <VideoListExtra videos={randomVideos.edges} />
              </Box>
            ) : null}
            {sources.edges.length ? (
              <Box mt={100}>
                <h2>KÊNH GỐC PHỔ BIẾN</h2>
                <ListListExtra path="source" data={sources.edges} />
              </Box>
            ) : null}
            {speakers.edges.length ? (
              <Box mt={100}>
                <h2>DIỄN GIẢ ĐƯỢC QUAN TÂM</h2>
                <ListListExtra path="speaker" data={speakers.edges} />
              </Box>
            ) : null}
          </Box>
        )}
      </Container>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired
};

export default connect(HomePage);
