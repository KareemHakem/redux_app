import { type } from "./type";

const initialState = {
  count: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT_COUNTER:
      return {
        count: state.count + 1,
      };
    case type.DECREMENT_COUNTER:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
