import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchEntrees = () => dispatch => {
    dispatch(entreesLoading());

    return fetch(baseUrl + 'entrees')
        .then(response => {
            if(response.ok) {
                return response;
            }else{
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(entrees => dispatch(addEntrees(entrees)))
        .catch(error => dispatch(entreesFailed(error.message)));
};

export const addEntrees = (entrees) => ({
    type: ActionTypes.ADD_ENTREES,
    payload: entrees
});

export const entreesLoading = () => ({
    type: ActionTypes.ENTREES_LOADING
});

export const entreesFailed = errMess => ({
    type: ActionTypes.ENTREES_FAILED,
    payload: errMess
});

export const fetchBibimbaps = () => dispatch => {

    dispatch(bibimbapsLoading());

    return fetch(baseUrl + 'bibimbaps')
        .then(response => {
            if(response.ok) {
                return response;
            }else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(bibimbaps => dispatch(addBibimbaps(bibimbaps)))
        .catch(error => dispatch(bibimbapsFailed(error.message)));
};

export const addBibimbaps = (bibimbaps) => ({
    type: ActionTypes.ADD_BIBIMBAPS,
    payload: bibimbaps
});

export const bibimbapsLoading = () => ({
    type: ActionTypes.BIBIMBAPS_LOADING
});

export const bibimbapsFailed = errMess => ({
    type: ActionTypes.BIBIMBAPS_FAILED,
    payload: errMess
});

export const fetchStews = () => dispatch => {

    dispatch(stewsLoading());

    return fetch(baseUrl + 'stews')
        .then(response => {
            if(response.ok) {
                return response;
            }else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(stews => dispatch(addStews(stews)))
        .catch(error => dispatch(stewsFailed(error.message)));
};

export const addStews = (stews) => ({
    type: ActionTypes.ADD_STEWS,
    payload: stews
});

export const stewsLoading = () => ({
    type: ActionTypes.STEWS_LOADING
});

export const stewsFailed = errMess => ({
    type: ActionTypes.STEWS_FAILED,
    payload: errMess
});

export const fetchMiscItems = () => dispatch => {

    dispatch(miscItemsLoading());

    return fetch(baseUrl + 'miscItems')
        .then(response => {
            if(response.ok) {
                return response;
            }else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(miscItems => dispatch(addMiscItems(miscItems)))
        .catch(error => dispatch(miscItemsFailed(error.message)));
};

export const addMiscItems = (miscItems) => ({
    type: ActionTypes.ADD_MISCITEMS,
    payload: miscItems
});

export const miscItemsLoading = () => ({
    type: ActionTypes.MISCITEMS_LOADING
});

export const miscItemsFailed = errMess =>({
    type: ActionTypes.MISCITEMS_FAILED,
    payload: errMess
});

export const fetchSides = () => dispatch => {

    dispatch(sidesLoading());

    return fetch(baseUrl + 'sides')
        .then(response => {
            if(response.ok) {
                return response;
            }else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(sides => dispatch(addSides(sides)))
        .catch(error => dispatch(sidesFailed(error.message)));
};

export const addSides = (sides) => ({
    type: ActionTypes.ADD_SIDES,
    payload: sides
});

export const sidesLoading = () => ({
    type: ActionTypes.SIDES_LOADING
});

export const sidesFailed = errMess => ({
    type: ActionTypes.SIDES_FAILED,
    payload: errMess
});