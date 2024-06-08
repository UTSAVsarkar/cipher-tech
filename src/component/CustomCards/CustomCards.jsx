import React from "react";
import "./CustomCards.css";

function CustomCards() {
  const items = [
    "SOLUTIONS",
    "SERVICES",
    "SUCCESS",
    "SUPPORT",
    "KNOWLEDGE",
    "CUSTOMER",
  ];

  return (
    <div className="container">
      {items.map((item) => {
        return (
          <div key={item} className="box">
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default CustomCards;
