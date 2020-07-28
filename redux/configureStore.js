import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { entrees } from './entrees';
import { bibimbaps } from './bibimbaps';
import { stews } from './stews';
import { miscItems } from './miscItems';
import { sides } from './sides';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            entrees,
            bibimbaps,
            stews,
            miscItems,
            sides
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}