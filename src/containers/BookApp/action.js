import { BOOK_IMAGES, BOOK_DETAILS, GET_API_DATA } from './constants';

export const inputChangeHandlerAction = searchValue => ({ type: BOOK_DETAILS,searchValue});
export const onBtnClickAction = ()=> ({ type: BOOK_IMAGES })
export const getApiData = data => ({type:GET_API_DATA, data});

