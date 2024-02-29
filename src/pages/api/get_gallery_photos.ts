import { getRandomGalleryPhotos } from '../../lib/api';
import { NextApiRequest, NextApiResponse } from 'next';
import Axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const count = req.query.count || 5; // Default count if not provided
    const photos = await getRandomGalleryPhotos(count);

    res.status(200).json(photos);
  } catch (error) {
    console.error('Error fetching gallery photos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
