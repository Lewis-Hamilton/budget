import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../reducers/rootReducer";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
      <Typography>Please Enter Dollar amount to add to savings</Typography>
      <TextField
        variant="outlined"
        onChange={(e) => setInitialAmount(e.target.value)}
      ></TextField>
      <Button onClick={() => dispatch(addTest(initialAmount))}>
        Calculate
      </Button>
    </Box>
  );
}
