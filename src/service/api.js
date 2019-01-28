import axios from "axios";

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export const fetchData = (searchItem) => {
  try {
     return axios
      .get(baseUrl+searchItem)
      .then( response=> {
        console.log('Api data ',response)
        return response.data.items[0].volumeInfo});
  } catch (e) {
    console.log(e);
  }
};
