import React from "react";

const TotalPrice = ({ totalPrice }) => {
  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default TotalPrice;