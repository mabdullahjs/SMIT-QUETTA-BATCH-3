import React from 'react'

const Btn = (props) => {
    return (
        <button style={{
            backgroundColor: !props.color ? "blue" : props.color 
        }} class= "text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            {props.title}
        </button>
    )
}

export default Btn