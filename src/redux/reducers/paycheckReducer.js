const initialState = {
  paycheck: 0,
};

export default function paycheckReducer(state = initialState, action) {
  switch (action.type) {
    case "PAYCHECK":
      return { paycheck: action.text };
    case "CALCULATE":
      return { paycheck: state.paycheck + 1 };
    default:
      return state;
  }
}

export const addPaycheck = (paycheck) => {
  console.log(paycheck);
  return {
    type: "PAYCHECK",
    text: paycheck,
  };
};
