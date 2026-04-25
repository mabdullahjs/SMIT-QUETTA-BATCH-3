import React from 'react'
import useFetch from '../hooks/useFetch'
import { Box, CircularProgress, Typography } from '@mui/material'
import MediaCard from '../components/Card'

const Product = () => {
  const [data, loading, error] = useFetch('https://fakestoreapi.com/products')
  console.log(data)
  return (
    <>
      {loading && <CircularProgress size="3rem" aria-label="Loading…" />}
      {error && <Typography variant='h1'>Internal server error </Typography>}

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap'
      }}> 
        {data && data.map(item => {
          return <MediaCard key={item.id} title={item.title} description={`${item.description.slice(0,50)}..`} image={item.image} id={item.id} />
        })}
      </Box>

    </>
  )
}

export default Product