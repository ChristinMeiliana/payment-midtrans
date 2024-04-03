import React, { useState } from "react";
import { product } from "../libs/product";

export const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };
  const checkout = () => {
    const data = {
      id: product.id,
      productName: product.name,
      price: product.name,
      quantity: product.price,
    };
    alert("Checkout Payment Link !");
  };

  const generatePaymentLink = async () => {
    alert("Checkout Payment Link !");
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex sm: gap-4">
        <button
          className="transition-all hover:opacity-75"
          onClick={decreaseQuantity}
        >
          --
        </button>

        <button className="transition-all hover:opacity-75" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};
