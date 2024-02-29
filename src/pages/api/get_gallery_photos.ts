import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Update the URL to use your server-side proxy route
    const apiUrl = '/api/globalgiving' + req.url;

    // Use your server-side proxy to fetch data from GlobalGiving
    const response = await axios.get(apiUrl);

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error fetching gallery photos:', error);
    res.status(error.response?.status || 500).json({ error: 'Internal Server Error' });
  }
}
