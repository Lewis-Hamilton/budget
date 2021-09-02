import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../reducers/rootReducer";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #00a900 30%, #006453 90%)",
    height: "100vh",
  },
}));

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1>Please Enter Dollar amount to add to savings</h1>
      <input onChange={(e) => setInitialAmount(e.target.value)}></input>
      <button onClick={() => dispatch(addTest(initialAmount))}>
        Calculate
      </button>
    </Box>
  );
}
