import React, { useState } from "react";
import "../css/forms.css";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    description: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn" type="submit">
        Add Product {/* {editing ? "Update Product" : "Add Product"} */}
      </button>
    </form>
  );
};

export default ProductForm;
