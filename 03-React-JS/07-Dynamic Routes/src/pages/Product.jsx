import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const [loading, error, data] = useFetch('https://dummyjson.com/products')


    const cartFun = () => {
        const cart = [
            { id: 1, name: "shoes", price: 2000 },
            { id: 2, name: "shirt", price: 3000 }
        ]
        navigate("/cart", { state: cart })
    }


    const navigate = useNavigate()
    return (
        <>
        <button onClick={cartFun}>Cart data</button>
            <h1>Product</h1>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error occured...</h1>}
            <div className='all-products'>
                {data && data.products.map(item => {
                    return <Card key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} showMore={() => navigate(`/product/${item.id}`)} />
                })}
            </div>
        </>
    )
}

export default Product