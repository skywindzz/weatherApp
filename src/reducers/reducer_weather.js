import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            //reg way return state.concat([ action.payload.data ]); don
            return [action.payload.data, ...state]; //ES6 way
    }
    return state;
}