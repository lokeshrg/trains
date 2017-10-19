import {gql} from 'react-apollo';

export const createCategoryFromParams = gql`
 mutation createCategory($title:String!, $description:String!){
  createCategory(title:$title description:$description) {
    id title description
  }
}
`;
