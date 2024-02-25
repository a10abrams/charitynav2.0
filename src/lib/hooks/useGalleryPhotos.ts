import {useEffect , useState } from 'react';
import { useGlobalGivingData } from '../api';

interface GalleryPhotosResult {
    galleryPhotos: any[];
}

export const useGalleryPhotos = (count: number): GalleryPhotosResult => {
    const { getRandomGalleryPhotos } = useGlobalGivingData();
    const [galleryPhotos, setGalleryPhotos] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchGalleryPhotos = async () => {
            try {
                const response = await fetch('/api/get_gallery_photos');
                if (response.ok) {
                    const photos = await response.json();
                    setGalleryPhotos(photos);
                } else {
                    console.error('Error fetching gallery photos:', response.status)
                }
            } catch (error) {
                console.error('Error fetching gallery photos:', error);
            }
        };

        fetchGalleryPhotos();
    }, []);

    return {galleryPhotos};
};


// having useGalleryPhotos in its own file makes it easier to reuse this logic; lower chances of code acting unexpectedly because it's being duplicated
