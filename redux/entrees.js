import * as ActionTypes from './ActionTypes';

export const entrees = (state = { isLoading: true, errMess: null, entrees: []}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_ENTREES:
            return {...state, isLoading: false, errMess: null, entrees: action.payload};

        case ActionTypes.ENTREES_LOADING:
            return {...state, isLoading: true, errMess: null, entrees: []};

        case ActionTypes.ENTREES_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}