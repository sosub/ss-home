import { graphql } from 'react-apollo';
import menuGql from './menu.gql';

const withData = graphql(menuGql, {
  props: ({ data }) => ({ data })
});

export default comp => withData(comp);
