import axios from 'axios'
import { useState, useEffect } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;

export const useGlobalGivingData = () => {
    // State for storing XML content
    const [allProjectsXML, setAllProjectsXML] = useState('');

    // Fetch all projects XML data
    useEffect (() => {
        const fetchAllProjectsXML = async () => {
            try {
                const response = await axios.get(
                    `https://api.globalgiving.org/api/public/projectservice/all/projects/download.xml?api_key=${API_KEY}`,
                    {
                        headers: {
                            Accept: 'application/xml',
                            'Content-Type': 'application/xml',
                        },
                    }
                );
                setAllProjectsXML(response.data);
            } catch (error) {
                console.error ('Error downloading all projects XML:', error);
                alert('Oh no! An error has occurred!');
            }
        };
        
        fetchAllProjectsXML();
    }, []);

    // Parse XML data effect
    useEffect (() => {
        const parseXMLData = () => {
            try {
                const parser = new DOMParser();
                const xmlDoc = parseFromString(allProjectsXML, 'application/xml');

                console.log('Parsed XML data:', xmlDoc);
                // set state with parsed data?
            } catch (error) {
                console.log('Error parsing XML data:', error);
                alert('Oh no! An error has occured!');
            }
        };

        if (allProjectsXML) {
            parseXMLData();
        }
    }, [allProjectsXML]);

    // Fetch random gallery photos
    const getRandomGalleryPhotos = async (count) => {
        try {
            const response = await axios.get(
                'https://api.globalgiving.org/api/public/projectservice/projects',
                {
                    headers: {
                        Authorization: API_KEY,
                    },
                    params: {
                        page: 1,
                        per_page: count,
                    },
                }
            );
            
            const projects = response.data.projects;
            const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, count);

            const photosPromises = randomProjects.map(async (project) => {
                const projectResponse = await axios.get(
                    `https://api.globalgiving.org/api/public/projectservice/projects/${project.id}/imagegallery`,
                    {
                        headers: {
                            Authorization: API_KEY  ,
                        },
                        params: {
                            count: 1, // CHANGE PLZ THIS IS JUST FOR TESTING
                        },
                    }
                );

                return projectResponse.data.photos[0];
            });
        
        const photos = await Promise.all(photosPromises);
        return photos;
        } catch (error) {
            console.error('Error fetching random gallery photos:', error);
            throw error;
        }
    };

    return { getRandomGalleryPhotos };
};
