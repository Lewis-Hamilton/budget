import Home from "./components/home.js";
import Nav from "./components/nav.js";
import Saving from "./components/saving.js";
import Spending from "./components/spending.js";
import Goals from "./components/goals.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

let store = createStore(countReducer);
const Component = ({ count, handleIncrementClick, handleDecrementClick }) => (
  <div>
    <h1>Helloworld React & Redux! {count}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
  };
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

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
