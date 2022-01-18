import React from 'react'
import './card.style.css'

export const Card = props => 
<div className={`card-container${props.album.id}`}>
    <img className="cover-photo" alt="cover" src={ process.env.PUBLIC_URL + `/covers/${props.album.id}.jpg` }></img>
    <h2> { props.album.title } </h2>
</div>