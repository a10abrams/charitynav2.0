import {useEffect , useState } from 'react';
import { useGlobalGivingData } from '../../pages/api/api';

interface GalleryPhotosResult {
    galleryPhotos: any[];
}

export const useGalleryPhotos = (count: number): GalleryPhotosResult => {
    const { getRandomGalleryPhotos } = useGlobalGivingData();
    const [galleryPhotos, setGalleryPhotos] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchGalleryPhotos = async () => {
            try{
                const photos = await getRandomGalleryPhotos(5);
                setGalleryPhotos(photos);
            } catch (error) {
                console.error('Error fetching gallery photos:', error);
            }
        };

        fetchGalleryPhotos();
    }, [getRandomGalleryPhotos]);

    return {galleryPhotos};
};


// having useGalleryPhotos in its own file makes it easier to reuse this logic; lower chances of code acting unexpectedly because it's being duplicated
