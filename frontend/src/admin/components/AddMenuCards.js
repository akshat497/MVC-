import React, { useState } from 'react';
import { AddMenuCard } from '../../services/services';

const AddMenuCards = () => {
  // State to store input field values
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: ''
  });

  // Function to handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };

  // Function to send data to backend
  const sendDataToBackend = async () => {
    const form=new FormData();
    // form.append('userId',localStorage.getItem('userdetails'))
    form.append('name',formData.name)
    form.append('description',formData.description)
    form.append('price',formData.price)
    form.append('image',formData.image)
    form.append('category',formData.category);
    const response= await AddMenuCard(form);


  };
  const handleInputImageChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };
  

  return (
    <div className='content' style={{marginLeft:"20%"}}>
      <h1>Add menucards</h1>
      <form onSubmit={(e) => { e.preventDefault(); sendDataToBackend(); }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} />

        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" onChange={handleInputImageChange} />

        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMenuCards;
