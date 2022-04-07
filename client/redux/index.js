import { createStore } from 'redux';

const reducer = (state = {balance: 0 }, action) => {
    return state;
}

const store = createStore(reducer);