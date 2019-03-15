import { Component } from 'react';
import PropTypes from 'prop-types';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import VideoPage from '../components/VideoPage';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends Component {
  render() {
    // console.log(props);
    return (
      <DefaultCon {...this.props} headerTheme="dark">
        <VideoPage
          slug={this.props.url.query.slug}
          cookie={this.props.headers ? this.props.headers.cookie : ''}
        />
      </DefaultCon>
    );
  }
}

Video.propTypes = {
  headers: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired
};

export default withData(Video);
