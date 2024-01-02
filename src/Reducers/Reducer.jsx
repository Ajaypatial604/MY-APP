const initialState = {
  cart: [],
};
export default function ChangeTheNumber(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // console.log("reducer", action.data);
      return [...state, { cart: action.data }];
    default:
      return state;
  }
}
