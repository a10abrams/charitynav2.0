import { getRandomGalleryPhotos } from '../api';
import { useState, useEffect } from 'react';

interface GalleryPhotosResult {
    galleryPhotos: any[];
}

export const useGalleryPhotos = (count: number): GalleryPhotosResult => {
    const [galleryPhotos, setGalleryPhotos] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchGalleryPhotos = async () => {
            try {
                const photos = await getRandomGalleryPhotos(count);
                setGalleryPhotos(photos);
            } catch (error) {
                console.error('Error fetching gallery photos:', error);
            }
        };

        fetchGalleryPhotos();
    }, [count]); // Include count in the dependency array if it's used inside the useEffect

    return { galleryPhotos };
};

// having useGalleryPhotos in its own file makes it easier to reuse this logic; lower chances of code acting unexpectedly because it's being duplicated
