const initialState = {
  userAmount: 0,
};

export default function roootReducer(state = initialState, action) {
  switch (action.type) {
    case "TESTING":
      return { userAmount: action.text };
    case "CALCULATE":
      return { userAmount: state.userAmount + 1 };
    default:
      return state;
  }
}

export const addTest = (initialAmount) => {
  return {
    type: "TESTING",
    text: initialAmount,
  };
};
