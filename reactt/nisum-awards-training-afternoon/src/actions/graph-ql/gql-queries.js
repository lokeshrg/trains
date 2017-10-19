import {gql} from 'react-apollo';

export const allCategories = gql`
  query{
    allCategories{
      id title description
    }
  }
`;
