import React from 'react'

interface SingleUserProps {
  params: {
    id: string;
  };
}


const NestedProduct = async ({ params }: SingleUserProps) => {
    const {id} = await params
  return (
    <div>NestedProduct {id}</div>
  )
}

export default NestedProduct