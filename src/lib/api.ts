import axios from 'axios';
import { Project } from '../types/interfaces';

const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;
const apiUrl = getAbsoluteUrl('/api/globalgivingprox');

const getAbsoluteUrl = (relativeUrl: string) =>
  process.env.NODE_ENV === 'production'
    ? 'https://charitynav-nine.vercel.app' + relativeUrl
    : 'http://localhost:3000' + relativeUrl;

// Fetch random gallery photos
export const getRandomGalleryPhotos = async (themes: string[], count: number): Promise<any[]> => {
  try {
    // Use the first theme ID for the initial request
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        themeId: themes[0],  // Use the first theme ID
        page: 1,
        per_page: count,
      },
    });

    // Process the response and send data
    const projects = response.data.projects;
    const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, count);

    const photosPromises = randomProjects.map(async (project: Project) => {
      // Use each theme ID for subsequent requests
      const projectResponse = await axios.get(apiUrl, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          themeId: themes,  // Use all theme IDs
          count: 10, // CHANGE FOR TESTING--10 IS MAX ACCORDING TO API DOCS
        },
      });

      return projectResponse.data.photos[0];
    });

    const photos = await Promise.all(photosPromises);
    return photos;
  } catch (error) {
    console.error('Error fetching random gallery photos:', error);
    throw error;
  }
};
