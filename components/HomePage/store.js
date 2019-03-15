import { graphql } from 'react-apollo';
import homeGql from './home.gql';

const ITEMS_PER_PAGE = 5;

const withData = graphql(homeGql, {
  options: ({ queryString }) => ({
    variables: {
      queryString,
      first: ITEMS_PER_PAGE,
      after: ''
    },
    notifyOnNetworkStatusChange: true
  }),
  props: ({ data, ownProps: { queryString } }) => ({
    data,
    loadMore: () =>
      data.fetchMore({
        variables: {
          queryString,
          first: ITEMS_PER_PAGE,
          after: data.videos.pageInfo.endCursor
        },
        notifyOnNetworkStatusChange: true,
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.videos.edges.length) {
            return previousResult;
          }
          return {
            ...previousResult,
            videos: {
              ...previousResult.videos,
              pageInfo: fetchMoreResult.videos.pageInfo,
              edges: previousResult.videos.edges.concat(
                fetchMoreResult.videos.edges
              )
            }
          };
        }
      })
  })
});

export default comp => withData(comp);
