import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.globalgiving.org' + req.url, {
      headers: {
        Authorization: API_KEY,
      },
    });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Internal Server Error' });
  }
}
