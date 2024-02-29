import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.globalgiving.org' + req.url);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Internal Server Error' });
  }
}
