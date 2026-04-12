import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const SingleProduct = () => {
    const { id } = useParams()
    const [loading, error, data] = useFetch(`https://dummyjson.com/products/${id}`)
    return (
        <>
            <h1>SingleProduct {id}</h1>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error occured...</h1>}
            {data && <img src={data.thumbnail} alt={data.title}/>}
        </>
    )
}

export default SingleProduct