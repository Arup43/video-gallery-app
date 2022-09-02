import axios from "../../utils/axios";

export const getVideos = async (tags, search, author, selectedPage) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    if(author !== "") {
        queryString += `author=${author}`;
    }

    queryString += `&_page=${selectedPage}&_limit=8`;

    const response = await axios.get(`/videos/?${queryString}`);

    return response;
};
