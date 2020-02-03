export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
    // find memes in json data
    const { memes } = json.data;
    // return an action
    return {
        type: RECEIVE_MEMES,
        memes
    };
}

// API CALL
function fetchMemesJson(){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes`)
    .then(response => response.json())
}


export function fetchMemes(){
    // dispatch allows us to return an inner function
    return function(dispatch){
        // return a call to the fetchMemes json
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}