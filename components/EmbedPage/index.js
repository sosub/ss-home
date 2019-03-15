import { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import ReactPlayerSubtitles from 'react-player-subtitles';
import DefaultCon from '../../containers/Default';
import connect from './store';

class EmbedPage extends Component {
  onViewCount() {
    fetch(`/api/v3/video/increase-view-amount/?slug=${this.props.slug}`);
  }

  render() {
    const {
      slug,
      cookie,
      data: { video, networkStatus }
    } = this.props;
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
    if (video) {
      return (
        <div>
          <Helmet>
            <title>{video.title}</title>
            <meta
              property="og:title"
              content={`${video.title} - Trình nhúng - SOSUB.ORG`}
            />
            <meta property="og:image" content={video.image} />
            <meta property="og:description" content={video.description} />
          </Helmet>
          <ReactPlayerSubtitles
            cookies={cookie}
            backgroundImage={video.image}
            url={`https://www.youtube.com/watch?v=${video.videoId}`}
            playerWidth={
              typeof window !== 'undefined' ? window.innerWidth : 560
            }
            primarySubtitleURL={video.viSub}
            secondarySubtitleURL={video.enSub}
            onViewCount={() => this.onViewCount()}
            waterMarkText="SOSUB.org"
            waterMarkLink="https://sosub.org/"
            embed
          />
        </div>
      );
    }
    return (
      <DefaultCon {...this.props}>
        <Flex align="center" justify="center" style={{ minHeight: 500 }}>
          <Helmet>
            <title>404 Page not found</title>
          </Helmet>
          <p>Trang không tồn tại</p>
        </Flex>
      </DefaultCon>
    );
  }
}

EmbedPage.defaultProps = {
  cookie: ''
};

EmbedPage.propTypes = {
  cookie: PropTypes.string,
  slug: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default connect(EmbedPage);
