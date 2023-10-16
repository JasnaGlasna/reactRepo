import { BUY_CAKE,RESTOCK_CAKES } from "../constants/CakeConstants";
const initialState = {
  cakes: 10,
  message: ''
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.cakes >= action.payload) {
        return {
          ...state,
          cakes: state.cakes - action.payload,
          message: ''
        };
      } else {
        return {
          ...state,
          message: `Not enough cakes. Only ${state.cakes} cakes left.`
        };
      }
    case RESTOCK_CAKES:
      return {
        ...state,
        cakes: state.cakes + action.payload,
        message: ''
      };
    default:
      return state;
  }
};

export default CakeReducer;
