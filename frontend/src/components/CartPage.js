import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    
    const updatedCartItems = cartItems.filter((item) => item._id !== id);
    localStorage.setItem("menuItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage?.getItem("menuItems"));
    console.log(cart);
    setCartItems(cart);
  }, []);
  const totalPrice = cartItems?.reduce(
    (total, item) => Number(total)+(Number(item.quantity)*Number(item.price)),
    0
  );
  const decrement = (id) => {
    const cart = JSON.parse(localStorage.getItem("menuItems"));
    const decresedQuantity = cart?.map((data) => {
      if (data._id === id &&data.quantity>1) {
        data.quantity = data.quantity - 1;
      }
      
      return data;
    });
    localStorage.setItem("menuItems", JSON.stringify(decresedQuantity));
      
    setCartItems(decresedQuantity);
  };
  const increment = (id) => {
    const cart = JSON.parse(localStorage.getItem("menuItems"));
    const increasedQuantity = cart?.map((data) => {
      if (data._id === id) {
        data.quantity = data.quantity + 1;
      }
    
      return data;
    });
    localStorage.setItem("menuItems", JSON.stringify(increasedQuantity));
      
    setCartItems(increasedQuantity);
  };
  return (
    <div className="container mt-5">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cartItems?.map((item) => (
            <div className="card mb-3" key={item._id}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">totalQuantity: {Number(item.quantity)*Number(item.price)}</p>
                
                <div className="d-flex">
                  <button
                    className="btn  btn-sm"
                    onClick={() => decrement(item._id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => increment(item._id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p className="card-text">Total Items: {cartItems.length}</p>
              <p className="card-text">Total Price:{totalPrice}</p>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
