import { gql, graphql } from 'react-apollo';

const VIDEOS_PER_PAGE = 10;

const withData = detail =>
  graphql(
    gql`
    query ($slug: String!, $orderBy: String!, $first: Int!, $after: String!) {
      ${detail}(slug: $slug) {
        name
        description
        image
        videoSet(orderBy: $orderBy, isPublished: true, first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              slug
              title
              duration
              publishedAt
            }
          }
        }
      }
    }
  `,
    {
      options: ({ slug, orderBy }) => ({
        variables: {
          slug,
          orderBy,
          first: VIDEOS_PER_PAGE,
          after: ''
        },
        notifyOnNetworkStatusChange: true
      }),
      props: ({ data, ownProps: { slug, orderBy } }) => ({
        data,
        loadMore: () =>
          data.fetchMore({
            variables: {
              slug,
              orderBy,
              first: VIDEOS_PER_PAGE,
              after: data[detail].videoSet.pageInfo.endCursor
            },
            notifyOnNetworkStatusChange: true,
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult[detail].videoSet.edges.length) {
                return previousResult;
              }
              return {
                ...previousResult,
                [detail]: {
                  ...fetchMoreResult[detail],
                  videoSet: {
                    ...previousResult[detail].videoSet,
                    pageInfo: fetchMoreResult[detail].videoSet.pageInfo,
                    edges: previousResult[detail].videoSet.edges.concat(
                      fetchMoreResult[detail].videoSet.edges
                    )
                  }
                }
              };
            }
          })
      })
    }
  );

export default (comp, detail) => withData(detail)(comp);
