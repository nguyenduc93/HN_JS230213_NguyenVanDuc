import React, { useState } from "react";

function Item(props) {
  const { id, img, name, price } = props;
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleInterest = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    const newItem = { id: id, name: name, price: price };
    setCartItems([...cartItems, newItem]);
    setCount(count + 1);
  };

  return (
    <div>
      <div class="element">
        <img src={img} alt="Photo" />
        <div className="priceAndName">
          <p id="name">{name}</p>
          <p id="price">${price}</p>
        </div>
        <div class="InterestAndAdd">
          <button class="btn-Interest" id="sell" onClick={handleInterest}>
            Interest
          </button>
          <span id="amount">{count}</span>
          <button class="btn-Add" id="buy" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </form>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Item;


