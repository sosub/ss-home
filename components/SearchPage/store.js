import { graphql } from 'react-apollo';
import searchGql from './search.gql';

const ITEMS_PER_PAGE = 10;

const withData = graphql(searchGql, {
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
          after: data.searchList.videos.pageInfo.endCursor
        },
        notifyOnNetworkStatusChange: true,
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.searchList.videos.edges.length) {
            return previousResult;
          }
          return {
            ...previousResult,
            searchList: {
              ...fetchMoreResult.searchList,
              videos: {
                ...previousResult.searchList.videos,
                pageInfo: fetchMoreResult.searchList.videos.pageInfo,
                edges: previousResult.searchList.videos.edges.concat(
                  fetchMoreResult.searchList.videos.edges
                )
              }
            }
          };
        }
      })
  })
});

export default comp => withData(comp);
