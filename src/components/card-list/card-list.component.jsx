import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (
    <div className="card-list">
        {
          props.albums.map(album => <Card key= {album.id} album={ album }/>)
        }
    </div>
);