import React, { useEffect, useState } from "react";
import {
  DeleteMenuCard,
  FetchMenuCards,
  UpdateMenuCard,
} from "../../services/services";

export const MenuCards = () => {
  const [cards, setcards] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendDataToBackend = () => {
    // Implement sending data to backend
  };
  const fetchMenuCards = async () => {
    const response = await FetchMenuCards();

    if (response.message === "successfully") {
      setcards(response?.data);
    }
  };
  useEffect(() => {
    fetchMenuCards();
  }, []);
  const deletemenucard = async (id) => {
    const reponse = await DeleteMenuCard(id);
    if (reponse?.message === "Menu card deleted successfully") {
      fetchMenuCards();
    }
  };
  const handleInputImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleEdit = async () => {
    const form = new FormData();
    form.append('userId',localStorage.getItem('userdetails'))
    form.append("_id", formData._id);
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("image", formData.image);
    form.append("category", formData.category);
    const response = await UpdateMenuCard(form);
    if (response?.message === "Updated successfully") {
      fetchMenuCards();
    }
  };
  return (
    <>
      <div className="content ">
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Update Modal Title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Input fields */}
                  {/* Name */}
                  <label htmlFor="update-name">Name:</label>
                  <input
                    type="text"
                    id="update-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />

                  {/* Description */}
                  <label htmlFor="update-description">Description:</label>
                  <input
                    type="text"
                    id="update-description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />

                  {/* Price */}
                  <label htmlFor="update-price">Price:</label>
                  <input
                    type="text"
                    id="update-price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />

                  {/* Image */}
                  <label htmlFor="update-image">Image:</label>
                  <input
                    type="file"
                    id="update-image"
                    name="image"
                    onChange={handleInputImageChange}
                  />

                  {/* Category */}
                  <label htmlFor="update-category">Category:</label>
                  <input
                    type="text"
                    id="update-category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={()=>{handleEdit(formData?.id)}}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cards?.map((data, index) => {
            return (
              <>
                <div
                  className="card mx-4 my-4"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={`http://localhost:4040/${data?.image}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data?.name}</h5>
                    <p className="card-text">{data?.description}</p>
                    <div className="d-flex">
                      <button
                        className="mx-1 btn btn-info"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setFormData({
                            _id: data?._id,
                            name: data?.name,
                            description: data?.description,
                            category: data?.category,
                            price: data?.price,
                            image:data?.image
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="mx-1 btn btn-danger"
                        onClick={() => {
                          deletemenucard(data?._id);
                        }}
                      >
                        {" "}
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* <div className="content d-flex">
        {cards?.map((data, index) => {
          console.log(data.image);
          return (
            <>
            <div className="" style={{ marginLeft: "18%" }}></div>
              <div className="card mx-2">
                <img
                  src={`http://localhost:4040/${data.image}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{data?.name}</h5>
                  <p className="card-text">{data?.description}</p>
                  <div className="d-flex">
                    <button className="btn btn-primary mx-1">Edit</button>
                    <button className="btn btn-danger mx-1">Delete</button>
                  </div>
                  
                </div>
                
              </div>
              
            </>
          );
        })}
        </div> */}
    </>
  );
};
