import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Please Enter Dollar amount to add to savings</h1>
      <input></input>
      <button>Calculate</button>
      <h1>Dollar Amount: {counter} </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
    </div>
  );
}
