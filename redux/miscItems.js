import * as ActionTypes from './ActionTypes';

export const miscItems = (state = { isLoading: true, errMess: null, miscItems: []}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_MISCITEMS:
            return {...state, isLoading: false, errMess: null, miscItems: action.payload};

        case ActionTypes.MISCITEMS_LOADING:
            return {...state, isLoading: true, errMess: null, miscItems: []};

        case ActionTypes.MISCITEMS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}