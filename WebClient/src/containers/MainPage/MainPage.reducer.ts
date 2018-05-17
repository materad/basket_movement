import { IMainPageState } from './IMainPage.state';
import { IMainPageFetchFakeDataSucess, MainPageActions, } from './MainPage.actions';
import { MainPageConstants } from './MainPage.constants';

export const mainPageReducer = (
    state: IMainPageState = {
        fakeData: {
            'body': ' ',
            'id': 0,
            'title': 'FAKE',
            'userId': 0
        },
        val: 0
    },
    action: MainPageActions): IMainPageState => {
    switch (action.type) {
        case MainPageConstants.INCREMENT:
            return {
                ...state,
                val: state.val + 1
            };
        case MainPageConstants.DECREMENT:
            return {
                ...state,
                val: state.val - 1
            };
        case MainPageConstants.FETCH_FAKE_DATA:
            return {
                ...state
            };
        case MainPageConstants.FETCH_FAKE_DATA_SUCESS:
            return {
                ...state,
                fakeData: {
                    body: (action as IMainPageFetchFakeDataSucess).payload.body,
                    id: (action as IMainPageFetchFakeDataSucess).payload.id,
                    title: (action as IMainPageFetchFakeDataSucess).payload.title,
                    userId: (action as IMainPageFetchFakeDataSucess).payload.userId
                }
            };
        default:
            return state;
    }
};
