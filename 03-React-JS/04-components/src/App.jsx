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



import React from 'react'
import Btn from './components/Btn'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Btn title="click me" color="red"/>
      <Btn title="send" color="green"/>
      <Btn title="receive"/>
      <Btn title="hello" color="orange"/>
      <Btn title="order now"/>

      <div className="container m-5 flex justify-center gap-4 flex-wrap">
        <Card image="https://placehold.co/600x400/orange/white" title="my card" description="this is the best card in the world"/>
        <Card image="https://placehold.co/600x400/purple/white" title="my second card" description="this is the best card in the world"/>
        <Card image="https://placehold.co/600x400/red/white" title="iphone 16 pro" description="this is the best card in the world"/>
        <Card image="https://placehold.co/600x400/green/white" title="Honda cg125" description="this is the best card in the world"/>
      </div>
    </>
  )
}

export default App


// props