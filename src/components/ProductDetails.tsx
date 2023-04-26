import React, { useCallback, useEffect, useState } from "react";
import "../css/main.css";
import useHttp from "./hooks/use-http";
import { IProduct } from "./Products";
import { SERVER_URL } from "../utils/url";
import { useParams } from "react-router-dom";

interface Props {
  product: {
    title: string;
    imageUrl: string;
    price: number;
    description: string;
  };
}

const ProducDetail: React.FC<Props> = () => {
  const [productInfo, setProductInfo] = useState<IProduct>();
  const { id } = useParams<{ id: string }>();

  const handleHttpProduct = useCallback((products: any) => {
    setProductInfo(products as IProduct);
  }, []);

  const { fetchFunction } = useHttp(handleHttpProduct);
  const addToCart = () => {
    // Add to cart logic goes here
  };

  useEffect(() => {
    fetchFunction({ url: `${SERVER_URL}/products/${id}` });
  }, [fetchFunction, id]);

  return (
    <>
      {productInfo && (
        <main className="centered">
          <h1>{productInfo.title}</h1>
          <hr />
          <div className="image">
            <img src={productInfo.imageUrl} alt={productInfo.title} />
          </div>
          <h2>{productInfo.price}</h2>
          <p>{productInfo.description}</p>
          <button className="btn" onClick={addToCart}>Add To Cart</button>
        </main>
      )}
    </>
  );
};

export default ProducDetail;
