// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


import axios from 'axios';



export const GET_SW_START = 'GET_SW_START';
export const GET_SW_SUCCESS = 'GET_SW_SUCCESS';
export const GET_SW_FAIL = 'GET_SW_FAIL';

export const getStarWars = () => dispatch => {
    dispatch ({
        type: GET_SW_START
    });

    axios

    .get ('https://swapi.co/api/people/')
    
    // .then (res => {
    //     console.log(res)
    //     dispatch({
    //         type: GET_SW_SUCCESS,
    //         payload: res.data.results
    //     })
    // })

    .then(res => setTimeout(() => {dispatch({
         type: GET_SW_SUCCESS, payload: res.data.results 
        })}, 
        5000))

    
    .catch(err => {
        console.log(err)
        dispatch ({
            type: GET_SW_FAIL,
            payload: "The Force Was Not Strong With You..."
        })
    })

}
