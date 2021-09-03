import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Saving() {
  const initialAmount = parseInt(
    useSelector((state) => state.paycheckReducer.paycheck)
  );
  const [totalSaving, setTotalSaving] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categoryPercent, setCategoryPercent] = useState(0);
  const [savingCategories, setSavingCategories] = useState([]);
  const percentages = [
    {
      name: "10%",
      value: 0.1,
    },
    {
      name: "20%",
      value: 0.2,
    },
    {
      name: "30%",
      value: 0.3,
    },
    {
      name: "40%",
      value: 0.4,
    },
    {
      name: "50%",
      value: 0.5,
    },
    {
      name: "60%",
      value: 0.6,
    },
    {
      name: "70%",
      value: 0.7,
    },
    {
      name: "80%",
      value: 0.8,
    },
    {
      name: "90%",
      value: 0.9,
    },
    {
      name: "100%",
      value: 1,
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    calculateSaving();
    dispatch({ type: "SAVING" });
  });

  const calculateSaving = () => {
    setTotalSaving(initialAmount * 0.5);
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
            <MenuItem value={percentages.value}>{percentages.name}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        <Button
          onClick={() =>
            setSavingCategories(
              savingCategories.concat({
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
        <Typography>Total Saving ${totalSaving}</Typography>
      </Grid>
      {savingCategories.map((savingCategories) => (
        <Grid item>
          <Typography>
            {savingCategories.name +
              " $" +
              savingCategories.percentage * totalSaving}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
