import { useGlobalGivingData } from '../../lib/api'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Remove useGlobalGivingData -- API routes aren't components; they don't have access to hooks
      const {getRandomGalleryPhotos} = useGlobalGivingData();
      
      const photos = await getRandomGalleryPhotos(5);
  
      res.status(200).json(photos);
    } catch (error) {
      console.error('Error fetching gallery photos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
