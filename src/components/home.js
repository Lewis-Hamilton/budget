import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../reducers/rootReducer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  grid: {
    position: "absolute",
    top: "50%",
  },
}));

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={2}
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
          onClick={() => dispatch(addTest(initialAmount))}
        >
          Calculate
        </Button>
      </Grid>
    </Grid>
  );
}
