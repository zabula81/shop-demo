import React from "react";
import "./Summary.css";

import { useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";
import {
  selectBasket,
  getBasketTotal,
} from "../../features/basket/baksetSlice";
import { selectUser } from "../../features/user/userSlice"

function Summary({ hideButton }) {
  const basket = useSelector(selectBasket);
  const user = useSelector(selectUser)
  const history = useHistory()
  const onHandleCashRegister = () => {
    if(user){
      history.push("/payment")
    } else{
      alert("You're not logged in")
    }
  }  
  return (

    <div className="summary">
      <div>Summary: {getBasketTotal(basket)} PLN</div>
      {!hideButton && <button onClick={onHandleCashRegister}>Cash register</button>}
   </div>

  );
}

export default Summary;
