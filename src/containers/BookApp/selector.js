import { createSelector } from "reselect";
// import rootReducer from '../../reducers';

const getImgs = state => {
  console.log("selector :- ",state.global)
  // console.log("State:",state)
  return state.global.imageSrc
};
const getTitle = state => state.global.bookTitle;
const getWriter = state => state.global.bookWriter;
const getDescription = state => state.global.description;

export const getBookImages = createSelector(
  getImgs,
  getImagesFunc => getImagesFunc
);

export const getBookTitle = createSelector(
  getTitle,
  getTitleFunc => getTitleFunc
);

export const getBookWriter = createSelector(
  getWriter,
  getWriterFunc => getWriterFunc
);

export const getBookDescription = createSelector(
  getDescription,
  getDescription => getDescription
);
