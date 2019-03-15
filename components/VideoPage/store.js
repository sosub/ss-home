import { graphql } from 'react-apollo';
import videoGql from './video.gql';

const withData = graphql(videoGql, {
  options: ({ slug }) => ({
    variables: {
      slug
    },
    notifyOnNetworkStatusChange: true
  }),
  props: ({ data }) => ({
    data
  })
});

export default comp => withData(comp);
