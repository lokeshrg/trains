const initialState = {
  categories: []
};

const categoriesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_CATEGORIES':
      return [
        ...state.categories,
        ...action.categories
      ];
    default:
      return state;
  }
};

export default categoriesReducer;
