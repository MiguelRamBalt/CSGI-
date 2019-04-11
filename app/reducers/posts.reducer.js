import Immutable from 'seamless-immutable';
import {
    RETRIEVE_POSTS
} from '../actions/posts.actions';

export const INITIAL_STATE = Immutable({
    postsList: [],
    error: {},
    isFetching: false
});

export default function postReducer(state = INITIAL_STATE, {type, payload = {}}) {
    switch (type) {
        case RETRIEVE_POSTS.BEGIN:
            return state.set('isFetching', true);
        case RETRIEVE_POSTS.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case RETRIEVE_POSTS.SUCCESS:
            return state
                .set('postsList', payload)
                .set('isFetching', false)
        default:
            return state;
    }
}