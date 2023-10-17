import {BUY_CAKE,RESTOCK_CAKES} from './../constants/CakeConstants';
export const buyCake = (numOfCake) => {
  return {
    type: BUY_CAKE,
    payload: numOfCake,
  };
};

export const restockCakes = (numOfCake) => {
  return {
    type: RESTOCK_CAKES,
    payload: numOfCake,
  };
};
