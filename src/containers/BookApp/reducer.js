import { GET_API_DATA, BOOK_DETAILS } from "./constants";

const initialState = {
  imageSrc:
    "http://books.google.com/books/content?id=rJ61AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  searchItem: "Out of the Box",
  bookTitle: "Think Out of the Box",
  bookWriter: "Mike Vance",
  description:
    'In today\'s fast-changing global marketplace, organizations must adapt to new, sometimes contradictory, demands from customers, competitors, employees, and shareholders. "Think Out of the Box" offers a treasure chest of operational creativity--the same creative solutions which major corporations have used for three decades.'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_DETAILS:
      return Object.assign({}, state, { searchItem: action.searchValue });
    case GET_API_DATA:
      // console.log("reducer", action.data);
      return Object.assign(
        {},
        state,
        {
          bookTitle: action.data.title,
          imageSrc: action.data.imageLinks.thumbnail,
          bookWriter: action.data.authors[0],
          description: action.data.description,
          searchItem: ""
        },
      );
    default:
      return state;
  }
};

