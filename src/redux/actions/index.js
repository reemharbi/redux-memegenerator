import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

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
function fetchMemesJson() {
    return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes`
    ).then((response) => response.json());
}

// A function that returns an inner function
export function fetchMemes() {
    // dispatch allows us to dispatch to recieve JSON
    // at any moment and handle the aynchrenous behaviour
    // of the api
    return function(dispatch) {
        // return a call to the fetchMemes json
        return fetchMemesJson().then((json) => dispatch(receiveMemes(json)));
    };
}

function newMeme(meme) {
    return {
        type: NEW_MEME,
        meme
    };
}

function postMemeJson(params) {
    params['username'] = username;
    params['password'] = password;

    const bodyParams = Object.keys(params).map((key) => {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
            );
        })
        .join('&');

    console.log(bodyParams);

    return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyParams
        }
    ).then((response) => response.json());
}

export function createMeme(new_meme_object) {
    return function(dispatch) {
        return postMemeJson(new_meme_object).then((new_meme) =>
            dispatch(newMeme(new_meme))
        );
    };
}

// NOTE: dispatch is a function of the Redux store.
//      You call store.dispatch to dispatch an action.
//      This is the only way to trigger a state change.
