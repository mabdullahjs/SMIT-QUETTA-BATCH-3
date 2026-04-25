import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../config/redux-toolkit/reducers/todoSlice';

const Home = () => {
  const [input , setInput] = useState('');

  // get data from redux
  const selector = useSelector(selector => selector.todo)
  // console.log(selector);

  // send data to redux
  const dispatch = useDispatch();
  

  const addtodoToRedux = (event)=>{
    event.preventDefault();
    console.log("Todo added to redux" , input);
    dispatch(addTodo({
      title: input
    }))
  }

  const deleteTodoFromRedux = (id)=>{
    console.log(id);
    dispatch(deleteTodo({id}))
    
  }
  const editTodoFromRedux = (oldTitle , id)=>{
    console.log(id);
    const title = prompt("enter updated value" , oldTitle)
    dispatch(editTodo({
      id , title
    }))
    
  }
  return (
    <>
    <h1>hello redux toolkit</h1>
    <form onSubmit={addtodoToRedux}>
      <input type="text" placeholder='enter todo' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button type='submit'>add Todo</button>
    </form>

    <ul>
      {selector.todo.length > 0 && selector.todo.map(item =>{
        return <li key={item.id}>{item.title}
        <button onClick={()=>deleteTodoFromRedux(item.id)}>delete</button>
        <button onClick={()=>editTodoFromRedux(item.title , item.id)}>edit</button>
        </li>
      })}
    </ul>
    </>
  )
}

export default Home


// crud (Todo app)
// global state ko use krta hua todo banayenga