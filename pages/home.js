import { Component } from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import HomePage from '../components/HomePage';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <DefaultCon {...this.props}>
        <HomePage />
      </DefaultCon>
    );
  }
}

export default withData(Home);
