import React from "react";
import "../css/product.css";

const Products = () => {
  return (
    <>
      <h1>No Products Found!</h1>
      {/* <main>
        {prods.length > 0 ? (
          <div className="grid">
            {prods.map((product) => (
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
      </main> */}
    </>
  );
};

export default Products;
