import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../reducers/rootReducer";

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Please Enter Dollar amount to add to savings</h1>
      <input onChange={(e) => setInitialAmount(e.target.value)}></input>
      <button onClick={() => dispatch(addTest(initialAmount))}>
        Calculate
      </button>
    </div>
  );
}
