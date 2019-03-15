import { Component } from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import ListingPage from '../components/ListingPage';

// eslint-disable-next-line react/prefer-stateless-function
class Listing extends Component {
  render() {
    return (
      <DefaultCon {...this.props}>
        <ListingPage />
      </DefaultCon>
    );
  }
}

export default withData(Listing);
