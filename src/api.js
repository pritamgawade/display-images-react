import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PjhRNRKuVQ-VNZhbWdrvOepJ-qgRS2zPB_zJyjP8GuQ'
        },
        params: {
            query: term
        }
    });
    
    return response.data.results;
}

export default searchImages;