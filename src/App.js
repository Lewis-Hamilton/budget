import Home from "./components/home.js";
import Nav from "./components/nav.js";
import Saving from "./components/saving.js";
import Spending from "./components/spending.js";
import Goals from "./components/goals.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(315deg, #000000 0%, #414141 74%)",
    height: "100vh",
    color: "white",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <Box className={classes.root}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/saving" component={Saving}></Route>
          <Route exact path="/spending" component={Spending}></Route>
          <Route exact path="/goals" component={Goals}></Route>
        </Switch>
      </Box>
    </Router>
  );
}
