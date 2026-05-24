import React from "react";

interface SingleUserProps {
  params: {
    id: string;
  };
}

const SingleUser = async ({ params }: SingleUserProps) => {
  const { id } = await params;

   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await data.json();
  console.log(users);
  return <div>SingleUser {id}</div>;
};

export default SingleUser;
