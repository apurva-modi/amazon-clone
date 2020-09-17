// How do I push/dispatch the data/component into the data layer.
// this is where the reducer plays an important role.
export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// reducere is always listening

// *** you added something to the basket the
// reducer will say ok I know what to do ***

// *** if you remove something from the basket
// the reducer will say ok I know what to do ***
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // return the orignal state and also
    // return the updated basket
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // case "EMPTY_BASKET":
    //   return {
    //     ...state,
    //     basket: [],
    //   };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    // case "SET_USER":
    //   return {
    //     ...state,
    //     user: action.user,
    //   };

    default:
      return state;
  }
};

export default reducer;
