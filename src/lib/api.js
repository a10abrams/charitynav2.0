const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;

export const getGalleryPhotos = async () => {
    const res = await fetch (
        `https://api.globalgiving.org/api/public/projectservice/projects/554/imagegallery`,
        {
            headers : {
                Authorization: API_KEY,
            },
        } 
    );
    const responseJson = await res.json();
    return responseJson.photos;
}
