import { getRandomGalleryPhotos } from '../api';
import { useState, useEffect } from 'react';
import { GalleryPhotosResult } from '../lib/interfaces';

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
    }, [count]);

    return { galleryPhotos };
};

// having useGalleryPhotos in its own file makes it easier to reuse this logic; lower chances of code acting unexpectedly because it's being duplicated
