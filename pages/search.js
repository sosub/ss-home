import { Component } from 'react';
import PropTypes from 'prop-types';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import SearchPage from '../components/SearchPage';

// eslint-disable-next-line react/prefer-stateless-function
class Search extends Component {
  render() {
    // console.log(props);
    return (
      <DefaultCon {...this.props}>
        <SearchPage queryString={this.props.url.query.query || ''} />
      </DefaultCon>
    );
  }
}

Search.propTypes = {
  url: PropTypes.object.isRequired
};

export default withData(Search);
