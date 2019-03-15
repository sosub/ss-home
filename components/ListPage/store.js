import { gql, graphql } from 'react-apollo';

const ITEMS_PER_PAGE = 10;

const withData = list =>
  graphql(
    gql`
    query ($orderBy: String!, $first: Int!, $after: String!) {
      ${list}(orderBy: $orderBy, first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            slug
            name
            videoAmount
          }
        }
      }
    }
  `,
    {
      options: ({ orderBy }) => ({
        variables: {
          orderBy,
          first: ITEMS_PER_PAGE,
          after: ''
        },
        notifyOnNetworkStatusChange: true
      }),
      props: ({ data, ownProps: { orderBy } }) => ({
        data,
        loadMore: () =>
          data.fetchMore({
            variables: {
              orderBy,
              first: ITEMS_PER_PAGE,
              after: data[list].pageInfo.endCursor
            },
            notifyOnNetworkStatusChange: true,
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult[list].edges.length) {
                return previousResult;
              }
              return {
                ...previousResult,
                [list]: {
                  ...previousResult[list],
                  pageInfo: fetchMoreResult[list].pageInfo,
                  edges: previousResult[list].edges.concat(
                    fetchMoreResult[list].edges
                  )
                }
              };
            }
          })
      })
    }
  );

export default (comp, list) => withData(list)(comp);
