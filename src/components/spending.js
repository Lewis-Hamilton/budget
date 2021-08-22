import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Spending() {
  const [initialAmount, setInitialAmount] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [dailySpending, setDailySpending] = useState(0);
  const [bigSpending, setBigSpending] = useState(0);
  const [percentDailySpending, setPercentDailySpending] = useState(0);
  const [percentBigSpending, setPercentBigSpending] = useState(0);

  const calculateSpending = () => {
    setPercentBigSpending(1 - percentDailySpending);
    setTotalSpending(initialAmount);
    setDailySpending(initialAmount * percentDailySpending);
    setBigSpending(initialAmount * percentBigSpending);
  };

  return (
    <Grid>
      <Grid item>
        <TextField
          label="Initial amount"
          variant="outlined"
          onChange={(e) => setInitialAmount(e.target.value)}
        ></TextField>
        <Button onClick={() => calculateSpending()}>Calculate</Button>
      </Grid>
      <Grid item>
        <Typography>Total Spending Amount</Typography>
        <Typography>${totalSpending}</Typography>
      </Grid>
      <Grid item>
        <Typography>Daily Spending Amount</Typography>
        <Typography>${dailySpending}</Typography>
        <FormControl>
          <InputLabel>Percent</InputLabel>
          <Select
            value={percentDailySpending}
            onChange={(e) => setPercentDailySpending(e.target.value)}
          >
            <MenuItem value={0.1}>10%</MenuItem>
            <MenuItem value={0.2}>20%</MenuItem>
            <MenuItem value={0.3}>30%</MenuItem>
            <MenuItem value={0.4}>40%</MenuItem>
            <MenuItem value={0.5}>50%</MenuItem>
            <MenuItem value={0.6}>60%</MenuItem>
            <MenuItem value={0.7}>70%</MenuItem>
            <MenuItem value={0.8}>80%</MenuItem>
            <MenuItem value={0.9}>90%</MenuItem>
            <MenuItem value={1}>100%</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Typography>Big Spending Amount</Typography>
        <Typography>${bigSpending}</Typography>
        <Typography>Percent going to Big Spending:</Typography>
        <Typography>{percentBigSpending}</Typography>
      </Grid>
    </Grid>
  );
}
