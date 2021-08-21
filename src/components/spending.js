import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Spending() {
  const [totalSpending, setTotalSpending] = useState(0);
  const [dailySpending, setDailypending] = useState(0);
  const [bigSpending, setBigSpending] = useState(0);
  return (
    <Grid>
      <Grid item>
        <Typography>Total Spending Amount</Typography>
        <Typography>{totalSpending}</Typography>
      </Grid>
      <Grid item>
        <Typography>Daily Spending Amount</Typography>
        <Typography>{dailySpending}</Typography>
      </Grid>
      <Grid item>
        <Typography>Big Spending Amount</Typography>
        <Typography>{bigSpending}</Typography>
      </Grid>
    </Grid>
  );
}
