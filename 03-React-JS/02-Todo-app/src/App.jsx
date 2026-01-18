// // import React, { useState } from 'react'

// // const App = () => {
// //   // let num = 0
// //   const [num , setNum] = useState(0)

// //   const addCounter = () => { 
// //     setNum(num + 1)
// //     console.log(num);

// //   }
// //   const lessCounter = () => { 
// //     setNum(num - 1)
// //     console.log(num);
// //   }
// //   return (
// //     <>
// //       <h1>Counter {num}</h1>
// //       <button onClick={lessCounter}>-</button>
// //       <button onClick={addCounter}>+</button>
// //     </>
// //   )
// // }

// // export default App



// import { use, useState } from "react"

// function App() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [todo , setTodo] = useState([]);

//   const addTodo = (event)=>{
//     event.preventDefault();
//     console.log(title);
//     console.log(description);

//     todo.push({
//       title,description
//     })
//     setTodo([...todo])


//     setTitle('')
//     setDescription('')
//   }


//   const deleteTodo = (index)=>{
//     console.log("delete todo " , index);
//     todo.splice(index , 1);
//     setTodo([...todo]);

//   }
//   const editTodo = (index)=>{
//     console.log("edit todo " , index);

//     const title = prompt('enter updated title' , todo[index].title);
//     todo[index].title = title
//     setTodo([...todo]);

//   }
//   return (
//     <>
//       <h1>Todo App</h1>
//       <form onSubmit={addTodo}>
//         <input type="text" value={title} placeholder="enter title" 
//         onChange={(e)=>setTitle(e.target.value)}/>
//         <input type="text" value={description} placeholder="enter description"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button>Add Todo</button>
//       </form>

//       <div>
//         {todo.length > 0 ? todo.map((item , index) => {
//           return <div className="children" key={index}>
//             <h1>No {index + 1}</h1>
//             <p>Title: {item.title}</p>
//             <p>Desc: {item.description}</p>
//             <button onClick={()=> editTodo(index)}>Edit</button>
//             <button onClick={()=>{
//               deleteTodo(index)
//             }}>delete</button>
//           </div>
//         }) : <h1>No todo found...</h1>}
//       </div>
//     </>
//   )
// }

// export default App




// // import { useRef } from "react"

// // function App() {
// //   const title = useRef();
// //   const description = useRef();

// //   const addTodo = (event)=>{
// //     event.preventDefault();
// //     console.log(title.current.value);
// //     console.log(description.current.value);



// //     title.current.value = ""
// //     description.current.value = ""


// //   }

// //   return (
// //     <>
// //       <h1>Todo App</h1>
// //       <form onSubmit={addTodo}>
// //         <input type="text" placeholder="enter title" ref={title} />
// //         <input type="text" placeholder="enter description" ref={description}
// //         />
// //         <button>Add Todo</button>
// //       </form>
// //     </>
// //   )
// // }

// // export default App


// // input sa val lena ka 2 tareeqa hain (use state , use ref)
// // conditional rendering
// // todo app
// // styling (tailwind css)
// // reuseable component (props)



// import React, { useState } from 'react'

// const App = () => {
//   const [show , setShow] = useState(true)

//   return (
//     <>
//       <h1>Hello world</h1>
//       <button onClick={()=> setShow(!show)}>{show ? 'hide' : 'show'}</button>
//       {show ? <h1>This is heading.</h1> : null}
//     </>
//   )
// }

// export default App




import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/card/Card'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Todo/>
      {/* <h1 className='text-center'>Hello world</h1>
      <Card title="Iphone 15 pro" price={1200}/>
      <Card title="macbook m4 air" price={2000}/>
      <Card title="Iphone 13 pro max" price={800}/>
      <Card title="Iphone 17 pro" price={1500}/>
      <Card title="Banyaan" price={5}/> */}
    </>
  )
}

export default App

// props
// // input sa val lena ka 2 tareeqa hain (use state , use ref)
// // conditional rendering
// // todo app
// // styling (tailwind css)
// // reuseable component (props)