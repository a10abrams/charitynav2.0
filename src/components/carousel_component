import React from 'react'

interface CarouselComponentProps {
    photos: any[];
}

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
