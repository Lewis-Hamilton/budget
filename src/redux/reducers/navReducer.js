const initialState = {
  title: "Home",
};

export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case "HOME":
      return { title: "Home" };
    case "SPENDING":
      return { title: "Spending" };
    case "SAVING":
      return { title: "Saving" };
    default:
      return state;
  }
}

export const addPaycheck = (initialAmount) => {
  return {
    type: "TESTING",
    text: initialAmount,
  };
};
