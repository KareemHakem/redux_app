import { type } from "./type";

 const incrementCounter = () => {
  return { type: type.INCREMENT_COUNTER,  };
};

const decrementCounter = () => {

  return { type: type.DECREMENT_COUNTER,  };
};



export  { incrementCounter , decrementCounter }


