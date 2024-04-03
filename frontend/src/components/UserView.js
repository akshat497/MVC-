import React, { useEffect, useState } from 'react';
import { FetchAllMenuCards } from '../services/services';
import { useParams } from 'react-router-dom';
import { UserHeader } from '../common/UserHeader';

export const UserView = () => {
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMenuCards = async () => {
      const response = await FetchAllMenuCards(params?.userId);
      if (response.message === "successfully") {
        setCards(response?.data);
      }
    };
    fetchMenuCards();

    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage?.getItem("menuItems")) || [];
    setCartItems(storedCartItems);
  }, [params.userId]);

  const addToCart = (data) => {
    const existingItem = cartItems.find(item => item._id === data._id);
  
    if (existingItem) {
        debugger;
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
      localStorage.setItem("menuItems", JSON.stringify(cartItems));
    } else {
        
      data.quantity = 1;
      const updatedCartItems = [...cartItems, data];
      setCartItems(updatedCartItems);
      localStorage.setItem("menuItems", JSON.stringify(updatedCartItems));
    }
  };
  

  const renderAddButton = (data) => {
    const existingItem = cartItems.find(item => item._id === data._id);

    if (existingItem && existingItem.quantity > 0) {
      return (
        <div>
          <button className="btn btn-outline-info mx-1 my-2" onClick={() => decrementQuantity(data)}>
            -
          </button>
          <span className="mx-2">{existingItem.quantity}</span>
          <button className="btn btn-outline-info mx-1 my-2" onClick={() => addToCart(data)}>
            +
          </button>
        </div>
      );
    } else {
      return (
        <button className="btn btn-outline-info mx-1 my-2" onClick={() => addToCart(data)}>
          Add
        </button>
      );
    }
  };

  const decrementQuantity = (data) => {
    const existingItem = cartItems.find(item => item._id === data._id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("menuItems", JSON.stringify(cartItems));
    }if(existingItem.quantity===0){
        const updatedCartItems = cartItems.filter((item) => item._id !== data._id);
        localStorage.setItem("menuItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="">
      <UserHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cards?.map((data) => (
          <div
            className="card mx-4 my-4"
            style={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            key={data._id}
          >
            <img
              src={`http://localhost:4040/${data?.image}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{data?.name}</h5>
              <p className="card-text">{data?.description}</p>
            </div>
            {renderAddButton(data)}
          </div>
        ))}
      </div>
    </div>
  );
};
