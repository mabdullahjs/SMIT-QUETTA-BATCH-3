import React from 'react'
import { useParams } from 'react-router'
import SingleProductCard from '../components/SingleCard'
import useFetch from '../hooks/useFetch'
import { CircularProgress } from '@mui/material'

const SingleProduct = () => {
  const { id } = useParams()
  const [data, loading, error] = useFetch(`https://fakestoreapi.com/products/${id}`)
  console.log(data)
  return (
    <>
      {loading && <CircularProgress size="3rem" aria-label="Loading…" />}
      {error && <Typography variant='h1'>Internal server error </Typography>}

      {data && <SingleProductCard title={data.title} description={data.description} image={data.image} id={data.id}/>}
    </>
  )
}

export default SingleProduct