import axios from 'axios';
import { useState, useEffect } from 'react';
import { Project } from '../types/interfaces';

const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;
const apiUrl = '/api/globalgivingprox';

// Fetch random gallery photos
export const getRandomGalleryPhotos = async (count: number): Promise<any[]> => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        page: 1,
        per_page: count,
      },
    });

    // Process the response and send the appropriate data in the response
    const projects = response.data.projects;
    const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, count);

    const photosPromises = randomProjects.map(async (project: Project) => {
      const projectResponse = await axios.get(apiUrl, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
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
