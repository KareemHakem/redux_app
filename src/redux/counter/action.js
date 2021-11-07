import { type } from "./type";

const incrementCounter = (value) => {
  return { type: type.INCREMENT_COUNTER, payload: value };
};

const decrementCounter = (value) => {
  return { type: type.DECREMENT_COUNTER, payload: value };
};

export { incrementCounter, decrementCounter };
