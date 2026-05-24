"use client";

import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.products)
      })
      .catch((err) => {
        console.log(err);
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);
  return (
    <>
    {loading && <h1>Loading...</h1>}
    {error && <h1>Error occured</h1>}
    {products && products.map((item:{id: number; title: string}) =>{
      return <h1 key={item.id}>{item.title}</h1>
    })}
    </>
  );
};

export default Products;
