import React, { useEffect, useState } from "react";
import { FetchMenuCards } from "../../services/services";

export const MenuCards = () => {
  const [cards, setcards] = useState([]);
  const fetchMenuCards = async () => {
    const response = await FetchMenuCards();

    if (response.message === "successfully") {
      setcards(response?.data);
      
    }
  };
  useEffect(() => {
    fetchMenuCards();
  }, []);
  
  return (
    <>
     <div className=" content d-flex" style={{marginLeft:"18%"}}>
     {cards?.map((data, index) => {
        console.log("http://localhost:4040/"+data.image)
        return (
          <>
         
              <div className="card mx-4" style={{ width: "18rem" }} >
                <img  src={`http://localhost:4040/${data.image}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data?.name}</h5>
                  <p className="card-text">
                   {data?.description}
                  </p>
                  <div className="d-flex">
                    <button className="btn btn-primary mx-1">Edit</button>
                    <button className="btn btn-danger mx-1">Delete</button>
                  </div>
                </div>
              </div>
          
          </>
        );
      })}
     </div>
    </>
  );
};
