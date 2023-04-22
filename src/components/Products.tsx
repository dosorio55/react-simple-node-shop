import React, { useState, useEffect, useCallback } from "react";
import "../css/product.css";
import useHttp from "./hooks/use-http";
import { SERVER_URL } from "../utils/url";

interface IProduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const handleHttpProducs = useCallback((products: any) => {
    setProducts(products as IProduct[]);
  }, []);

  const { getProducts, loading } = useHttp(handleHttpProducs);

  useEffect(() => {
    getProducts({ url: `${SERVER_URL}/products` });
  }, [getProducts]);

  const renderredProducts =
    products && products.length > 0 ? (
      <main>
        {products.length > 0 ? (
          <div className="grid">
            {products.map((product) => (
              <article className="card product-item" key={product.id}>
                <header className="card__header">
                  <h1 className="product__title">{product.title}</h1>
                </header>
                <div className="card__image">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className="card__content">
                  <h2 className="product__price">${product.price}</h2>
                  <p className="product__description">{product.description}</p>
                </div>
                <div className="card__actions">
                  <a
                    href={`/admin/edit-product/${product.id}?edit=true`}
                    className="btn"
                  >
                    Edit
                  </a>
                  <form action="/admin/delete-product" method="POST">
                    <input type="hidden" value={product.id} name="productId" />
                    <button className="btn" type="submit">
                      Delete
                    </button>
                  </form>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <h1>No Products Found!</h1>
        )}
      </main>
    ) : null;

  return <>{loading ? <p>is loading</p> : renderredProducts}</>;
};

export default Products;
