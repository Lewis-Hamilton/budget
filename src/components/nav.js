import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const title = useSelector((state) => state.title);
  const classes = useStyles();
  console.log(title);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton className={classes.root} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Route>
          <List>
            <ListItem
              button
              onClick={() => setOpen(false)}
              component={Link}
              to="/"
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => setOpen(false)}
              component={Link}
              to="/spending"
            >
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText>Spending</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => setOpen(false)}
              component={Link}
              to="/saving"
            >
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText>Saving</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => setOpen(false)}
              component={Link}
              to="/goals"
            >
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText>Goals</ListItemText>
            </ListItem>
          </List>
        </Route>
      </Drawer>
    </>
  );
}
