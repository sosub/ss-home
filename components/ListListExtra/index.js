import { Component } from 'react';
import PropTypes from 'prop-types';
import Hide from 'hidden-styled';
import { Flex } from 'grid-styled';
import { Link } from '../../routes';
import {
  Table,
  Col,
  TH,
  TR,
  A,
  IconButton,
  LoadMoreButton,
  Image
} from './styles';

class ListListExtra extends Component {
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
      path,
      data,
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
              <TH />
              <TH>
                <IconButton
                  onClick={() => this.changeOrderBy('name')}
                  disabled={!changeOrderBy}
                >
                  <span>TÊN</span>
                  {orderBy.indexOf('name') > -1 ? (
                    <span>{orderBy[0] === '-' ? '↓' : '↑'}</span>
                  ) : (
                    <span />
                  )}
                </IconButton>
              </TH>
              <TH>
                <Hide xs>
                  <IconButton
                    onClick={() => this.changeOrderBy('video_amount')}
                    disabled={!changeOrderBy}
                  >
                    <span>SỐ LƯỢNG VIDEO</span>
                    {orderBy.indexOf('video_amount') > -1 ? (
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
              : data.map(({ node }) => (
                  <TR key={node.slug}>
                    <Col>
                      <Link route={`/${path}/${node.slug}/`} passHref>
                        <A>
                          <Image
                            src={node.image || '/static/home/img/no_avatar.jpg'}
                            alt={node.name}
                          />
                        </A>
                      </Link>
                    </Col>
                    <Col>
                      <Link route={`/${path}/${node.slug}/`} passHref>
                        <A>
                          <b>{node.name}</b>
                        </A>
                      </Link>
                    </Col>
                    <Col>
                      <Hide xs>
                        <Link route={`/${path}/${node.slug}/`} passHref>
                          <A>{node.videoAmount}</A>
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

ListListExtra.defaultProps = {
  orderBy: '',
  changeOrderBy: false,
  ordering: false,
  hasNextPage: false,
  isLoadMore: false,
  loadMore: false
};

ListListExtra.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  orderBy: PropTypes.string,
  changeOrderBy: PropTypes.any,
  ordering: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  isLoadMore: PropTypes.bool,
  loadMore: PropTypes.any
};

export default ListListExtra;
