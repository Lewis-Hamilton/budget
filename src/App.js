import Home from "./components/home.js";
import Nav from "./components/nav.js";
import Saving from "./components/saving.js";
import Spending from "./components/spending.js";
import Goals from "./components/goals.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./configure-store";
import { Container } from "./components/container";

export default function App() {
  return (
    <Provider store={store}>
      <Container />

      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/saving" component={Saving}></Route>
          <Route exact path="/spending" component={Spending}></Route>
          <Route exact path="/goals" component={Goals}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
