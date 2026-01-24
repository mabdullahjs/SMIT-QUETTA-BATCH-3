import React, { useEffect, useState } from 'react'

const Btn = () => {
    const [counter, setCounter] = useState(0)
    const [secondcounter, setSecondCounter] = useState(0)
    useEffect(() => {
        console.log("btn component mounted");


        // return ()=>{
        //     console.log("Component unmounted");
            
        // }
    } , [secondcounter])
    return (
        <div style={{
            border: '1px solid black',
            padding: '20px',
            margin: '20px',
            borderRadius: '10px'
        }}>
            <h1>{counter} {secondcounter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={()=> setCounter(counter - 1)}>-</button>

            <button onClick={()=> setSecondCounter(secondcounter + 1)}>Add second Counter</button>
        </div>
    )
}

export default Btn



// dependency array agar nahi di to har state change pa use effect chalaiga.
// dependency array empty hogi to sirf aik dafa component mount hona pa use effect chalaiga.
// agar kisi state update pa use effect chalana ha to uski dependency array ma wo state likhdo

// component lifecycle ma initialize , mount , update , unmount
// component mount pa koi specific task krwana ha to wo useeffect ka through hojayega.

// component unmount pa koi task krwana ha to useeffect ka return ma function doga wo unmount pa kaam kraiga.