import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

export default function Spending() {
  const initialAmount = parseInt(
    useSelector((state) => state.paycheckReducer.paycheck)
  );
  const [totalSpending, setTotalSpending] = useState(0);
  const [dailySpending, setDailySpending] = useState(0);
  const [bigSpending, setBigSpending] = useState(0);

  useEffect(() => {
    calculateSpending();
  });

  const calculateSpending = () => {
    setTotalSpending(initialAmount * 0.5);
    setDailySpending(totalSpending * 0.4);
    setBigSpending(totalSpending * 0.6);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography>Paycheck ${initialAmount}</Typography>
      </Grid>
      <Grid item>
        <Typography>Total Spending ${totalSpending}</Typography>
      </Grid>
      <Grid item>
        <Typography>Daily Spending ${dailySpending}</Typography>
      </Grid>
      <Grid item>
        <Typography>Big Spending ${bigSpending}</Typography>
      </Grid>
    </Grid>
  );
}
