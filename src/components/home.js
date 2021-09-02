import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../reducers/rootReducer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <Typography>Please Enter Dollar amount to add to savings</Typography>
      <TextField
        variant="outlined"
        onChange={(e) => setInitialAmount(e.target.value)}
      ></TextField>
      <Button onClick={() => dispatch(addTest(initialAmount))}>
        Calculate
      </Button>
    </>
  );
}
