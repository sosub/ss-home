import { Component } from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import ListPage from '../components/ListPage';
import connect from '../components/ListPage/store';

const SRC_QUERY = 'creators';
const ListPageComponent = connect(ListPage, SRC_QUERY);

class Creators extends Component {
  constructor() {
    super();
    this.state = {
      orderBy: '-video_amount'
    };
  }

  changeOrderBy(orderBy) {
    this.setState({ orderBy });
  }

  render() {
    // const props = this.props;
    // console.log(props);
    return (
      <DefaultCon {...this.props}>
        <ListPageComponent
          srcQuery={SRC_QUERY}
          srcPath="sosuber"
          srcName="Sosubers"
          srcDescription=""
          orderBy={this.state.orderBy}
          changeOrderBy={orderBy => this.changeOrderBy(orderBy)}
        />
      </DefaultCon>
    );
  }
}

export default withData(Creators);
