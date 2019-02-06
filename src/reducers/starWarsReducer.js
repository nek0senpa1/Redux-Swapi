

import { GET_SW_START, GET_SW_FAIL, GET_SW_SUCCESS } from './../actions/index';



const initialState = {
  characters: [],
  error: null,
  isFetching: false
  // Array characters, Boolean fetching, null error.
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_SW_START: 
      return {
        ...state,
        isFetching: true
      };

    case GET_SW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case GET_SW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }


    default:
      return state;
  }
};

