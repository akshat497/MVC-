import React, { useEffect, useState } from "react";
import {
  DeleteMenuCard,
  FetchMenuCards,
  UpdateMenuCard,
} from "../../services/services";

export const MenuCards = () => {
  const [cards, setCards] = useState([]);
  const [fakeCards, setFakeCards] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
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
    setSearch(value.toLowerCase());
  };

  const fetchMenuCards = async () => {
    const response = await FetchMenuCards();

    if (response.message === "successfully") {
      setCards(response?.data);
      setFakeCards(response?.data);
    }
  };

  useEffect(() => {
    fetchMenuCards();
  }, []);

  const deleteMenuCard = async (id) => {
    const response = await DeleteMenuCard(id);
    if (response?.message === "Menu card deleted successfully") {
      fetchMenuCards();
    }
  };

  const handleInputImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleEdit = async () => {
    const form = new FormData();
    form.append("userId", localStorage.getItem("userdetails"));
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

  useEffect(() => {
    const filteredOrders = fakeCards?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(search) ||
        item?.category?.toLowerCase().includes(search)
    );
    setCards(filteredOrders);

    // Update suggestions based on search input
    setSuggestions(
      filteredOrders
    );
  }, [search]);

  return (
    <>
      <div className="content">
        <input
          type="search"
          onChange={handleInputChange}
          placeholder="Search"
          value={search}
        />
        {search && suggestions.length > 0 && (
          <div className="" style={{height:'100px',width:"",overflowY: "scroll",backgroundColor:"whitesmoke",scrollbarWidth:"thin"}}>
            {suggestions.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                
              </div>
            ))}
          </div>
        )}
        <div>
          {/* Modal */}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cards?.map((data, index) => (
            <div
              className="card mx-4 my-4"
              key={index}
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
                        image: data?.image,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="mx-1 btn btn-danger"
                    onClick={() => {
                      deleteMenuCard(data?._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
