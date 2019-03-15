import { Component } from 'react';
import PropTypes from 'prop-types';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import DetailPage from '../components/DetailPage';
import connect from '../components/DetailPage/store';

const DETAILS = {
  category: {
    query: 'category'
  },
  tag: {
    query: 'tag'
  },
  playlist: {
    query: 'playlist',
    orderBy: 'playlistvideo__priority'
  },
  speaker: {
    query: 'speaker'
  },
  source: {
    query: 'source'
  },
  sponsor: {
    query: 'sponsor'
  },
  sosuber: {
    query: 'creator'
  }
};

class Detail extends Component {
  constructor(props) {
    super(props);
    const { query } = DETAILS[props.url ? props.url.query.list : ''];
    this.DetailPageComponent = connect(DetailPage, query);
    this.state = {
      orderBy: DETAILS[props.url.query.list].orderBy || '-published_at'
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.url.query.list !== nextProps.url.query.list) {
      const { query } = DETAILS[nextProps.url ? nextProps.url.query.list : ''];
      this.DetailPageComponent = connect(DetailPage, query);
    }
  }

  changeOrderBy(orderBy) {
    this.setState({ orderBy });
  }

  render() {
    // console.log(this.props);
    const { list, slug } = this.props.url.query;
    const { query } = DETAILS[list];
    return (
      <DefaultCon {...this.props}>
        <this.DetailPageComponent
          query={query}
          path={list}
          slug={slug}
          orderBy={this.state.orderBy}
          changeOrderBy={orderBy => this.changeOrderBy(orderBy)}
        />
      </DefaultCon>
    );
  }
}

Detail.propTypes = {
  url: PropTypes.object.isRequired
};

export default withData(Detail);
