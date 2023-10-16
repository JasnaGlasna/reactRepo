import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from './../actions/CakeActions';

export const Cake = () => {
  const [buyAmount, setBuyAmount] = useState(0);
  const [restockAmount, setRestockAmount] = useState(0);
  const dispatch = useDispatch();
  const { cakes, message } = useSelector((state) => state.CakeReducer);

  const handleBuy = () => {
    if (buyAmount > 0) {
      dispatch(buyCake(buyAmount));
    }
  };

  const handleRestock = () => {
    if (restockAmount > 0) {
      dispatch(restockCakes(restockAmount));
    }
  };

  return (
    <div id="cake">
      <h2>Cake: {cakes}</h2>
      {message && <p>{message}</p>}
      <div>
        <input type="number" value={buyAmount} onChange={(e) => setBuyAmount(parseInt(e.target.value))} />
        <button onClick={handleBuy}>Buy Cakes</button>
      </div>
      <div>
        <input type="number" value={restockAmount} onChange={(e) => setRestockAmount(parseInt(e.target.value))} />
        <button onClick={handleRestock}>Restock Cakes</button>
      </div>
    </div>
  );
};
