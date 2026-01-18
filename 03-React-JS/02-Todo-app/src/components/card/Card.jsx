import React from 'react'
// import './card.css'

const Card = ({title , price}) => {
    return (
        <div className='card' style={styles.card}>
            <h1 style={{
                textAlign: 'start'
            }}>{title}</h1>
            <h3>${price}</h3>
        </div>
    )
}

export default Card


const styles = {
    card: {
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px'

    },
    heading: {
        textAlign: 'center'
    }
}