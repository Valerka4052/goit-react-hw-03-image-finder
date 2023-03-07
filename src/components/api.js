import axios from "axios";

export async function getApi(value, pageNumber) {
    try {
        const response = await axios(`https://pixabay.com/api/?q=${value}&page=${pageNumber}&key=33181746-c383b02523a4c167923538d20&image_type=photo&orientation=horizontal&per_page=12`)
        return response.data.hits
    } catch (error) {
        console.log(error)
    };
};

