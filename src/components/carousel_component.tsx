import React from 'react'
import { CarouselComponentProps } from '../types/interfaces';

const CarouselComponent: React.FC<CarouselComponentProps> = ({ photos }) => {
    return (
        <div className = "carousel-container">
           {photos.map((photo, index) => (
            <img key = {index} src = {photo.url} alt = {photo.description}/>
           ))}
        </div>
    );
}

export default CarouselComponent;
