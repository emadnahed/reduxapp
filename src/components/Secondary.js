import React from "react";
import { useSelector } from "react-redux";

const Secondary = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div className="my-5">      
      <h4>This is Secondary component</h4>
      <h5>Updated balance: {amount}</h5>            
    </div>
  );
};

export default Secondary;
