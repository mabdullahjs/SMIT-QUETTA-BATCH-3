import React from 'react'

const Card = ({image , title , description}) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt="Placeholder Image"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {title}
                </h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card


//"https://placehold.co/600x400/orange/white"