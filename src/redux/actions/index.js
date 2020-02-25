export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
    // find memes in json data
    const { memes } = json.data;
    // return an action and memes object
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

// A function that returns an inner function
export function fetchMemes(){
    // dispatch allows us to dispatch to recieve JSON
    // at any moment and handle the aynchrenous behaviour 
    // of the api
    return function(dispatch){
        // return a call to the fetchMemes json
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}


// NOTE: dispatch is a function of the Redux store. 
//      You call store.dispatch to dispatch an action. 
//      This is the only way to trigger a state change.