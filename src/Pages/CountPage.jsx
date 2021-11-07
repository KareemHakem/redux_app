import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/counter/action";

export default function CountPage() {
  const [value, setValue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const handleBack = () => history.push("/");

  const handleIncrement = () => dispatch(incrementCounter(value));
  const handelDecrement = () => dispatch(decrementCounter(value));

  return (
    <div>
      <h1> count </h1>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{ margin: 30 }}
          type="number"
          placeholder="counter"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={handleIncrement}> increment </button>
        <div style={{ fontSize: 20, margin: 20 }}> {count} </div>
        <button onClick={handelDecrement}>decrement</button>
      </div>
      <button onClick={handleBack}> get Back </button>
    </div>
  );
}
