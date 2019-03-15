import { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import Hide from 'hidden-styled';
import VideoList from '../VideoList';
import { Container, Info, ListImage } from './styles';
import { ShareLink } from '../Theme';

export default class DetailPage extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.orderBy !== this.props.orderBy) {
      console.log('!orderby');
      this.props.data.refetch();
    }
    return true;
  }

  render() {
    const {
      query,
      path,
      slug,
      data: { [query]: detail, networkStatus },
      loadMore,
      changeOrderBy,
      orderBy
    } = this.props;
    // console.log('networkStatus', networkStatus);
    if (networkStatus === 2 || networkStatus === 1) {
      return (
        <Flex align="center" justify="center" style={{ minHeight: 500 }}>
          <Helmet>
            <title>{slug}</title>
          </Helmet>
          <p>Đang tải...</p>
        </Flex>
      );
    }
    if (
      detail &&
      detail.videoSet &&
      detail.videoSet.edges &&
      detail.videoSet.edges.length
    ) {
      return (
        <Container>
          <Helmet>
            <title>{`${detail.name}`}</title>
            <meta
              property="og:title"
              content={`Tất cả video ${detail.name} - SOSUB.ORG`}
            />
            <meta
              property="og:image"
              content={detail.image || '/static/home/img/thumbnail_sosub.png'}
            />
            <meta
              property="og:description"
              content={
                detail.description ||
                'Với những video bên dưới, bạn sẽ có thể khám phá những ý tưởng, những bài giảng tuyệt vời nhất thế giới, thông qua những bản dịch song ngữ tuyệt vời nhất quả đất. Hãy cùng chia sẻ và cùng SOSUB lan tỏa tri thức nhé!'
              }
            />
          </Helmet>
          <Info px={[10, 80, 150, 250]}>
            {detail.image ? (
              <Hide xs sm>
                <ListImage src={detail.image} alt={detail.name} />
              </Hide>
            ) : null}
            <h1>{detail.name}</h1>
            {detail.description ? (
              <Hide xs sm>
                <p>{detail.description}</p>
              </Hide>
            ) : null}
            <ShareLink
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsosub.org%2F${path}/${slug}%2F&display=popup&ref=plugin&src=like&kid_directed_site=0&app_id=1015678545158200`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Facebook
            </ShareLink>
          </Info>
          <VideoList
            orderBy={orderBy}
            changeOrderBy={changeOrderBy}
            ordering={networkStatus === 4}
            videos={detail.videoSet.edges}
            hasNextPage={detail.videoSet.pageInfo.hasNextPage}
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

DetailPage.propTypes = {
  query: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  changeOrderBy: PropTypes.func.isRequired
};
