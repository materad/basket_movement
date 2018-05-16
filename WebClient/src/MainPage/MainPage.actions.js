import * as types from './MainPage.constants';

export function increment() {
    return { type: types.INCREMENT }
}

export function decrement() {
    return { type: types.DECREMENT }
}