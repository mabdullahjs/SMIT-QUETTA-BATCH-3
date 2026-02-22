import React from 'react'

const Card = (props) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
            <img
                className="w-full h-48 object-cover"
                src={props.image}
                alt="Placeholder Image"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {props.title}
                </h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card


//"https://placehold.co/600x400/orange/white"