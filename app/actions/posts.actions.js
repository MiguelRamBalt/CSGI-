import ThunkHelper from '../utilities/thunkHelper';
const API_URL = 'http://localhost:3004';

export const RETRIEVE_POSTS = {
    BEGIN: 'RETRIEVE_POSTS_BEGIN',
    SUCCESS: 'RETRIEVE_POSTS_SUCCESS',
    FAILURE: 'RETRIEVE_POSTS_FAILURE'
};

export const RETRIEVE_POST_SAVE = 'RETRIEVE_POSTS_SAVE';

const RETRIEVE_POSTS_EVENTS = [
    RETRIEVE_POSTS.BEGIN,
    RETRIEVE_POSTS.SUCCESS,
    RETRIEVE_POSTS.FAILURE
];

export const retrievePosts = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_POSTS_EVENTS, {
            method: 'get',
            url: `${API_URL}/posts`
        });
    }
};

export const savePost = (name, author) => {
    return {
        type: RETRIEVE_POST_SAVE,
        payload: {
            title: name,
            author: author
        }
    }
};
