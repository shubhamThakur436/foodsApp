import { ADD_ITEM, FETCH_PRICES, REMOVE_ITEM } from "../actions/actionTypes";

const initial_state = {

}
const reducer = (state = initial_state, action) => {
      let { name } = action;
      switch (action.type) {
            case ADD_ITEM:
                  return {
                        ...state,
                        [name]: {
                              ...state[name],
                              count: state[name]["count"] + 1 || 1
                        }
                  };
            case REMOVE_ITEM:
                  return {
                        ...state,
                        [name]: {
                              ...state[name],
                              count: state[name]["count"] - 1 || 0
                        }
                  }
            case FETCH_PRICES:
                  return {
                        ...state,
                        ...action.data
                  }
            default:
                  return state;
      }
}

export default reducer;