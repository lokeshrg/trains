import CategoriesApi from '../api/mockCategoriesApi';
import {allCategories} from "./graph-ql/gql-queries";
import {apolloClient} from "../graphql-client/client";
import {createCategoryFromParams} from "./graph-ql/gql-mutations";

export const createCategory = (category) => {
  return {type: 'CREATE_CATEGORY', category};
};

export const loadCategoriesSuccess = (categories) => {
  return {type: 'LOAD_CATEGORIES_SUCCESS', categories};
};

// using react-apollo and graph-ql
export const loadCatGQL = () => {
  return (dispatch) => {
    return apolloClient
      .query({
        query: allCategories
      })
      .then((response) => {
        if (response.data) {
          dispatch(loadCategoriesSuccess(response.data.allCategories)); // categories=reponse.data, bcz gql response is wrapped inside data obj
        }
      })
      .catch((error) => {
        throw(error);
      });
  };
};

export const saveCatGQLMutation = (category) => {
  return (dispatch) => {
    return apolloClient.mutate({
      mutation: createCategoryFromParams,
      variables: {
        title: category.title,
        description: category.description
      }
    })
      .then((response) => {
        dispatch(createCategory(response.data.createCategory));
      })
      .catch((error) => {
        throw(error);
      });
  };
};

// Thunk
export const loadCategories = () => {
  return (dispatch) => {
    return CategoriesApi
      .getAllCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch((error) => {
        throw(error);
      });
  };
};

export const saveCategory = (categoryToAdd) => {
  return (dispatch) => {
    return CategoriesApi.saveCategory(categoryToAdd)
      .then((categories) => {
        dispatch(createCategory(categories));
      })
      .catch((error) => {
        throw(error);
      });
  };
};


export const deleteCategory = (categoryToDel) => {
  return (dispatch) => {
    return CategoriesApi.deleteCategory(categoryToDel)
      .then((categories) => {
        dispatch(loadCategories(categories));
      })
      .catch((error) => {
        throw(error);
      });
  };
};
