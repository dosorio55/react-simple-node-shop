import React, { useState, useCallback, useEffect } from "react";
import "../css/forms.css";
import useHttp from "./hooks/use-http";
import { IProduct } from "./Products";
import { SERVER_URL } from "../utils/url";
import { useParams } from "react-router-dom";

interface IFormProduct
  extends Omit<IProduct, "id" | "createdAt" | "updatedAt"> {
    editMode?: boolean;
}

const ProductForm = () => {
  const [formData, setFormData] = useState<IFormProduct>({
    title: "",
    imageUrl: "",
    price: 0,
    description: "",
  });

  const { id } = useParams<{ id: string }>();

  const handleHttpProduct = useCallback((product: any) => {
    console.log(product);

    setFormData(product as IFormProduct);
  }, []);

  const { getProducts } = useHttp(handleHttpProduct);

  useEffect(() => {
    getProducts({ url: `${SERVER_URL}/admin/edit-product/${id}?edit=true` });
  }, [getProducts, id]);

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
        {formData.editMode ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
