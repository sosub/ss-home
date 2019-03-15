import { Component } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import withData from '../libraries/withData';
import EmbedPage from '../components/EmbedPage';

// eslint-disable-next-line react/prefer-stateless-function
class Embed extends Component {
  render() {
    // const props = this.props;
    // console.log(props);
    return (
      <EmbedPage
        slug={this.props.url.query.slug}
        cookie={this.props.headers ? this.props.headers.cookie : ''}
      />
    );
  }
}

Embed.propTypes = {
  headers: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired
};

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default withData(Embed);
