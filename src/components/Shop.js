import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
// import { depositMoney, withdrawMoney } from "../state/action-creators";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="my-5">
      <h2>Deposit/Withdraw money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.depositMoney(1000);
        }}
      >
        Add +
      </button>
      Update balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.withdrawMoney(1000);
        }}
      >
        Remove -
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.bonusMoney(10);
        }}
      >
        Bonus *
      </button>
    </div>
  );
};

export default Shop;
