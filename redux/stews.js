import * as ActionTypes from './ActionTypes';

export const stews = (state = { isLoading: true, errMess: null, stews: []}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_STEWS:
            return {...state, isLoading: false, errMess: null, stews: action.payload};

        case ActionTypes.STEWS_LOADING:
            return {...state, isLoading: true, errMess: null, stews: []};

        case ActionTypes.STEWS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}