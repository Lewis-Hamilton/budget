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

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "right",
  },
}));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <IconButton className={classes.root} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
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
