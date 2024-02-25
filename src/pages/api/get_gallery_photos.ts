import { getRandomGalleryPhotos } from '../../lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const photos = await getRandomGalleryPhotos(5);

        res.status(200).json(photos);
    } catch (error) {
        console.error('Error fetching gallery photos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
