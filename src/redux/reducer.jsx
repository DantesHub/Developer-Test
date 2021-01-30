import { ADD_ITEM, DELETE_ITEM } from "./actions";

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //to ensure pure functionality we will not mutate state directly but rather create
    // a new state object with every update
    case ADD_ITEM:
      return Object.assign({}, state, {
        wishList: [
          ...state.wishList,
          {
            content: action.payload.content,
            id: action.payload.id,
          },
        ],
      });
    case DELETE_ITEM:
      console.log(action.payload.id, state.wishList);
      return Object.assign({}, state, {
        wishList: state.wishList.filter((wish) => {
          return wish.id !== action.payload.id;
        }),
      });
    default:
      return state;
  }
};

export default reducer;
