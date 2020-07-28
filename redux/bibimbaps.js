import * as ActionTypes from './ActionTypes';

export const bibimbaps = (state = { isLoading: true, errMess: null, bibimbaps: []}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_BIBIMBAPS:
            return {...state, isLoading: false, errMess: null, bibimbaps: action.payload};

        case ActionTypes.BIBIMBAPS_LOADING:
            return {...state, isLoading: true, errMess: null, bibimbaps: []};

        case ActionTypes.BIBIMBAPS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}