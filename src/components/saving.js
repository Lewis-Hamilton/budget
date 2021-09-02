import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

export default function Saving() {
  const initialAmount = parseInt(useSelector((state) => state.userAmount));
  const [totalSaving, setTotalSaving] = useState(0);
  const [houseSaving, setHouseSaving] = useState(0);
  const [stocks, setStocks] = useState(0);
  const [fundrise, setFundrise] = useState(0);

  useEffect(() => {
    calculateSaving();
  });

  const calculateSaving = () => {
    setTotalSaving(initialAmount * 0.5);
    setHouseSaving(totalSaving * 0.5);
    setStocks(totalSaving * 0.25);
    setFundrise(totalSaving * 0.25);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography>Paycheck ${initialAmount}</Typography>
      </Grid>
      <Grid item>
        <Typography>Total Saving ${totalSaving}</Typography>
      </Grid>
      <Grid item>
        <Typography>House ${houseSaving}</Typography>
      </Grid>
      <Grid item>
        <Typography>Stocks ${stocks}</Typography>
      </Grid>
      <Grid item>
        <Typography>Fundrise ${fundrise}</Typography>
      </Grid>
    </Grid>
  );
}
