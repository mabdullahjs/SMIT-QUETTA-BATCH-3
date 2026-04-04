// import './App'

// const App = () => {

//   return (
//     <>
//       {/* <h1 style={{
//         textAlign: 'center',
//         backgroundColor: 'red',
//         padding: '20px',
//         color: 'white'
//       }}>Hello world</h1> */}
//       <h1 className='text-center text-5xl text-white bg-red-400'>Hello world</h1>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Btn from './components/Btn'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <>
//       <h1>Hello world</h1>
//       <Btn title="click me" color="red"/>
//       <Btn title="send" color="green"/>
//       <Btn title="receive"/>
//       <Btn title="hello" color="orange"/>
//       <Btn title="order now"/>

//       <div className="container m-5 flex justify-center gap-4 flex-wrap">
//         <Card image="https://placehold.co/600x400/orange/white" title="my card" description="this is the best card in the world"/>
//         <Card image="https://placehold.co/600x400/purple/white" title="my second card" description="this is the best card in the world"/>
//         <Card image="https://placehold.co/600x400/red/white" title="iphone 16 pro" description="this is the best card in the world"/>
//         <Card image="https://placehold.co/600x400/green/white" title="Honda cg125" description="this is the best card in the world"/>
//       </div>
//     </>
//   )
// }

// export default App


// // props


// import React, { useEffect, useState } from 'react'
// import UserCard from './components/UserCard'

// const App = () => {

//   const [loading , setLoading] = useState(true);
//   const [error , setError] = useState(false);
//   const [users , setUsers] = useState(null);


//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       setUsers(res)

//     }).catch(err => {
//       console.log(err);
//       setError(true)

//     }).finally(()=>{
//       setLoading(false)
//     })
//   } , []) 
//   return (
//     <>
//     <h1>Hello world</h1>
//     {/* <UserCard name="M Abdullah" email="abdullah@gmail.com"/>
//     <UserCard name="M Usman" email="usman@gmail.com"/>
//     <UserCard name="M Ammar" email="ammar@gmail.com"/> */}

//     {loading && <h1>Loading...</h1>}
//     {error && <h1>Error occured...</h1>}
//     {users && users.map(item => {
//       return <UserCard key={item.id} name={item.name} email={item.email}/> 
//     })}
//     </>

//   )
// }

// export default App


// Quiz



import React, { useEffect, useRef, useState } from 'react'
import Btn from './components/Btn';
import { arrayShuffle } from 'array-shuffle';

const App = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)


  const input = useRef([]);

  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  const changeQuestion = () => {
    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);

    if(selectedOption.value === data[questionIndex].correctAnswer){
      console.log("sahi select kiya ha");
      setScore(prev => prev + 10)
      
    } else {
      console.log("galat select kiya ha");
      
    }

    if (questionIndex < 9) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setResult(true)

    }
  }
  return (
    <>
      <h1 className='text-4xl font-bold text-center m-2'>Quiz App</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      {/* {data && data.map((item , index) => {
        return <h1 className='text-2xl' key={item.id}>Q{index + 1} = {item.question.text}</h1>
      })} */}

      {result && <h1>Score {score} / 100</h1>}

     {!result &&  data && <div>
        <h1 className='text-2xl'>Q{questionIndex + 1} {data[questionIndex].question.text}</h1>
        {arrayShuffle([...data[questionIndex].incorrectAnswers, data[questionIndex].correctAnswer]).map((item, index) => {
          return <div key={index} className='m-3'>
            <input
              type="radio"
              id={index}
              name='quiz'
              value={item}
              ref={el => (input.current[index] = el)}
            />
            <label htmlFor={index}>{item}</label>
          </div>
        })}
         <Btn title="next" func={changeQuestion}/>
      </div>}
    </>
  )
}

export default App