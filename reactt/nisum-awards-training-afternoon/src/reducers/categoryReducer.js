export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CATEGORY':
      return [
        ...state,
        action.category
      ];
    case 'DELETE_CATEGORY':{
      const ind = state.findIndex(action.category);
      return state.slice(0, ind);
    }
    case 'LOAD_CATEGORIES_SUCCESS':
      return action.categories; // action.categories
    default:
      return state;
  }
};
