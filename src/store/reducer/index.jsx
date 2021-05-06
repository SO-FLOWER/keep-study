import { ADD_NUMBER, SUB_NUMBER } from '../constants/index';
const initalState = { counter : 0 };

export default function reducer(state = initalState, action){
    switch (action.type) {
        case ADD_NUMBER:
            return {...state, counter:state.counter + action.num};
        case SUB_NUMBER:
            return {...state, counter:state.counter - action.num};
        default:
            return state;
    }
}