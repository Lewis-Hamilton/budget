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
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
  },
  paper: {
    background: "linear-gradient(315deg, #000000 0%, #414141 74%)",
    color: "white",
  },
  icon: {
    color: "white",
  },
}));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const title = useSelector((state) => state.navReducer.title);
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton className={classes.root} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Route>
          <List>
            <ListItem
              button
              onClick={() => setOpen(false)}
              component={Link}
              to="/"
            >
              <ListItemIcon>
                <HomeIcon className={classes.icon} />
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
                <AttachMoneyIcon className={classes.icon} />
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
                <AccountBalanceIcon className={classes.icon} />
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
                <CheckCircleIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText>Goals</ListItemText>
            </ListItem>
          </List>
        </Route>
      </Drawer>
    </>
  );
}
