import * as ActionTypes from './ActionTypes';

export const sides = (state = { isLoading: true, errMess: null, sides: []}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_SIDES:
            return {...state, isLoading: false, errMess: null, sides: action.payload};

        case ActionTypes.SIDES_LOADING:
            return {...state, isLoading: true, errMess: null, sides: []};

        case ActionTypes.SIDES_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}