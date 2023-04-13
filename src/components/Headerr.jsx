import React from "react";

function Headerr(props) {
    const { img, name, price } = props;
  return (
    <div>
      <div className="navbar-content">
        <div className="money"> To Spend: $100000000 </div>
        <div>You have money!</div>
      </div>
    </div>
  );
}

export default Headerr;
