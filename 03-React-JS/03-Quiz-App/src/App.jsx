// // import { useState } from "react"
// // import Btn from "./components/Btn"

// // function App(){
// //   const [mount , setMount] = useState(true)
// //   return (
// //     <>
// //     <h1>Hello world</h1>
// //     <button onClick={()=>setMount(!mount)}>Button component {mount ? 'unmount' : 'mount'}</button>
// //     {/* {mount ? <Btn/> : null} */}
// //     {mount && <Btn/>}
// //     </>
// //   )
// // }

// // export default App


// // // use effect



// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [users , setUsers] = useState(null);
//   const [loading , setLoading] = useState(true);
//   const [error , setError] = useState(false);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         setUsers(res)
//       })
//       .catch((err) => {
//         console.log(err);
//         setError(true)

//       }).finally(()=>{
//         setLoading(false)
//       })
//   }, [])
//   return (
//     <>
//       <h1>Hello world</h1>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>Error occured.</h1>}
//       {users && users.map(item => {
//         return <h3 key={item.id}>{item.name}</h3>
//       })}
// {/* 
//       {loading ? <h1>Loading...</h1> : null}
//       {error ? <h1>Error occured.</h1> : null}
//       {users ? users.map(item => {
//         return <h3 key={item.id}>{item.name}</h3>
//       }) : null} */}

//     </>
//   )
// }

// export default App


// // falsy values in js

// // '' , 0 , null , undefined , false



// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then((res) => {
//         console.log(res);
//         setProduct(res)

//       })
//       .catch((err) => {
//         console.log(err);
//         setError(true)

//       }).finally(() => {
//         setLoading(false);
//       })
//   }, [])
//   return (
//     <>
//     {loading && <h1>Loading...</h1>}
//     {error && <h1>error occured...</h1>}
//     {product && product.map(item => {
//       return <div key={item.id}>

//         <h1>{item.title}</h1>
//         <hr/>
//       </div>
//     })}
//     <div>App</div>
//     </>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import shuffleArray from 'shuffle-array';

const App = () => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(false);
  const [marks, setMarks] = useState(0)


  const input = useRef([]);
  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then(res => {
        console.log(res.data);
        setQuestion(res.data)

      }).catch((err) => {
        console.log(err);
        setError(true)

      }).finally(() => {
        setLoading(false)
      })
  }, [])


  // next question

  const nextQuestion = () => {
    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);
    console.log(question[index].correctAnswer);

    question[index].correctAnswer === selectedOption.value ? setMarks(marks + 10) : null
    

    index < 9 ? setIndex(index + 1) : setResult(true)
  }
  return (
    <>
      <h1>Quiz App {marks}</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      {result && <h1>You got  {marks} / 100</h1>}
      {question && !result && <div className="question" key={question[index].id}>
        <h1>Q{index + 1}: {question[index].question.text}</h1>
        {shuffleArray([...question[index].incorrectAnswers, question[index].correctAnswer]).map((item, index) => {
          return <div key={`option${index}`}>
            <input type="radio" name='question' value={item} id={index} ref={el => input.current[index] = el} />
            <label htmlFor={index}>{item}</label>
          </div>
        })}
        <br /><br />
        <button onClick={nextQuestion}>Next</button>
      </div>}
    </>
  )
}

export default App



// vercel ka uper react + vite app kaisa deploy krskta hain