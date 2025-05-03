import React, {useState} from "react";

function Item({ name, category }) {

  const [item, setItem] = useState(false)

  function handleCart(){

    setItem((item) => !item)
  }


  const cart = item ? "in-cart" : ""
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{item ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
