import React from 'react'

const Btn = (props) => {
    return (
        <button onClick={props.func} style={{
            backgroundColor: !props.color ? "blue" : props.color
        }} className="text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 my-5">
            {props.title}
        </button>
    )
}

export default Btn