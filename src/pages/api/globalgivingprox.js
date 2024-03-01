import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;

export default async function handler(req, res) {
  try {
    // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Allow the necessary HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    // Allow the necessary headers
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');

    const response = await axios.get('https://api.globalgiving.org' + req.url, {
      headers: {
        Authorization: API_KEY,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Internal Server Error' });
  }
}
