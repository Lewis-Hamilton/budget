import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTest } from "../reducers/rootReducer";

export default function Home() {
  const userAmount = useSelector((state) => state.userAmount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Please Enter Dollar amount to add to savings</h1>
      <input onChange={(e) => dispatch(addTest(e.target.value))}></input>
      <button onClick={() => dispatch({ type: "CALCULATE" })}>Calculate</button>
      <h1>Testing: {userAmount}</h1>
    </div>
  );
}
