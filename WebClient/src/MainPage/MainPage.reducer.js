import * as actions from './MainPage.constants';

const INITIAL_STATE = {
    value: 0
}

const mainPage = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                value: state.value + 1

            }
        case actions.DECREMENT:
            return {
                ...state,
                value: state.value - 1

            }
        default:
            return state
    }
}

export default mainPage;