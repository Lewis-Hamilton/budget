import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPaycheck } from "../redux/reducers/paycheckReducer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  grid: {
    position: "absolute",
    top: "50%",
  },
  button: {
    background: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
    color: "white",
  },
}));

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: "HOME" });
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.grid}
    >
      <Grid item>
        <TextField
          variant="outlined"
          label="Please Enter Paycheck Amount"
          onChange={(e) => setInitialAmount(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item>
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          onClick={() => dispatch(addPaycheck(initialAmount))}
        >
          Calculate
        </Button>
      </Grid>
    </Grid>
  );
}
