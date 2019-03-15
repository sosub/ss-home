import { Component } from 'react';
import PropTypes from 'prop-types';
import Hide from 'hidden-styled';
import { Flex } from 'grid-styled';
import { Link } from '../../routes';
import { Table, Col, TH, TR, A, IconButton, LoadMoreButton } from './styles';

class VideoList extends Component {
  changeOrderBy(orderBy) {
    let newOrderBy = `-${orderBy}`;
    if (
      this.props.orderBy.indexOf(orderBy) > -1 &&
      this.props.orderBy[0] === '-'
    ) {
      newOrderBy = orderBy;
    }
    this.props.changeOrderBy(newOrderBy);
  }
  render() {
    const {
      videos,
      orderBy,
      changeOrderBy,
      ordering,
      hasNextPage,
      isLoadMore,
      loadMore
    } = this.props;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <TH>
                <IconButton
                  onClick={() => this.changeOrderBy('title')}
                  disabled={!changeOrderBy}
                >
                  <span>TIÊU ĐỀ</span>
                  {orderBy.indexOf('title') > -1 ? (
                    <span>{orderBy[0] === '-' ? '↓' : '↑'}</span>
                  ) : (
                    <span />
                  )}
                </IconButton>
              </TH>
              <TH>
                <Hide xs>
                  <IconButton
                    onClick={() => this.changeOrderBy('published_at')}
                    disabled={!changeOrderBy}
                  >
                    <span>NGÀY ĐĂNG</span>
                    {orderBy.indexOf('published_at') > -1 ? (
                      <span>{orderBy[0] === '-' ? '↓' : '↑'}</span>
                    ) : (
                      <span />
                    )}
                  </IconButton>
                </Hide>
              </TH>
              <TH>
                <Hide xs sm>
                  <IconButton
                    onClick={() => this.changeOrderBy('duration')}
                    disabled={!changeOrderBy}
                  >
                    <span>THỜI LƯỢNG</span>
                    {orderBy.indexOf('duration') > -1 ? (
                      <span>{orderBy[0] === '-' ? '↓' : '↑'}</span>
                    ) : (
                      <span />
                    )}
                  </IconButton>
                </Hide>
              </TH>
            </tr>
          </thead>
          <tbody>
            {ordering
              ? null
              : videos.map(({ node: video }) => (
                  <TR key={video.slug}>
                    <Col>
                      <Link route={`/${video.slug}/`} passHref>
                        <A publishedAt={new Date(video.publishedAt)}>
                          <b>{video.title}</b>
                        </A>
                      </Link>
                    </Col>
                    <Col>
                      <Hide xs>
                        <Link route={`/${video.slug}/`} passHref>
                          <A publishedAt={new Date(video.publishedAt)}>
                            {video.publishedAt.slice(0, 10)}
                          </A>
                        </Link>
                      </Hide>
                    </Col>
                    <Col>
                      <Hide xs sm>
                        <Link route={`/${video.slug}/`} passHref>
                          <A publishedAt={new Date(video.publishedAt)}>
                            {`${Math.round(video.duration / 60)} phút`}
                          </A>
                        </Link>
                      </Hide>
                    </Col>
                  </TR>
                ))}
          </tbody>
        </Table>
        {ordering ? (
          <Flex justify="center" style={{ height: 100 }}>
            Đang tải...
          </Flex>
        ) : null}
        {hasNextPage ? (
          <Flex justify="center">
            {isLoadMore ? (
              <p>Đang tải...</p>
            ) : (
              <LoadMoreButton onClick={() => loadMore()}>
                Tải thêm
              </LoadMoreButton>
            )}
          </Flex>
        ) : null}
      </div>
    );
  }
}

VideoList.defaultProps = {
  orderBy: '',
  changeOrderBy: false,
  ordering: false,
  hasNextPage: false,
  isLoadMore: false,
  loadMore: false
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  orderBy: PropTypes.string,
  changeOrderBy: PropTypes.any,
  ordering: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  isLoadMore: PropTypes.bool,
  loadMore: PropTypes.any
};

export default VideoList;
