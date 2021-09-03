import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Spending() {
  const initialAmount = parseInt(
    useSelector((state) => state.paycheckReducer.paycheck)
  );
  const [totalSpending, setTotalSpending] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categoryPercent, setCategoryPercent] = useState(0);
  const [spendingCategories, setSpendingCategories] = useState([]);
  const [percentages, setPercentages] = useState([]);
  var tempArray = [];
  var percentName = 0;
  var percentValue = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    calculateSpending();
    dispatch({ type: "SPENDING" });
  });

  useEffect(() => {
    for (var i = 1; i <= 10; i++) {
      percentName = percentName + 10;
      percentValue = percentValue + 0.1;
      tempArray = tempArray.concat({
        name: percentName,
        value: Math.round(percentValue * 10) / 10,
      });
    }
    setPercentages(tempArray);
  }, []);

  const calculateSpending = () => {
    setTotalSpending(initialAmount * 0.5);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <TextField
          label="Enter Category Name"
          variant="outlined"
          onChange={(e) => setCategoryName(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item>
        <InputLabel>Percent</InputLabel>
        <Select
          value={categoryPercent}
          onChange={(e) => setCategoryPercent(e.target.value)}
        >
          {percentages.map((percentages) => (
            <MenuItem key={percentages.name} value={percentages.value}>
              {percentages.name + "%"}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        <Button
          onClick={() =>
            setSpendingCategories(
              spendingCategories.concat({
                name: categoryName,
                percentage: categoryPercent,
              })
            )
          }
        >
          Create Category
        </Button>
      </Grid>
      <Grid item>
        <Typography>Paycheck ${initialAmount}</Typography>
      </Grid>
      <Grid item>
        <Typography>Total Spending ${totalSpending}</Typography>
      </Grid>
      {spendingCategories.map((spendingCategories) => (
        <Grid item>
          <Typography>
            {spendingCategories.name +
              " $" +
              spendingCategories.percentage * totalSpending}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
