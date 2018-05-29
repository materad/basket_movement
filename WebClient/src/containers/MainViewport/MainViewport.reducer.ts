import { IMainViewportState } from './IMainViewport.state';
import { IMainViewportFetchFakeDataSucess, MainViewportActions, } from './MainViewport.actions';
import { MainViewportConstants } from './MainViewport.constants';

export const mainViewportReducer = (
    state: IMainViewportState = {
        fakeData: {
            'body': ' ',
            'id': 0,
            'title': 'FAKE',
            'userId': 0
        },
        val: 0
    },
    action: MainViewportActions): IMainViewportState => {
    switch (action.type) {
        case MainViewportConstants.INCREMENT:
            return {
                ...state,
                val: state.val + 1
            };
        case MainViewportConstants.DECREMENT:
            return {
                ...state,
                val: state.val - 1
            };
        case MainViewportConstants.FETCH_FAKE_DATA:
            return {
                ...state
            };
        case MainViewportConstants.FETCH_FAKE_DATA_SUCESS:
            return {
                ...state,
                fakeData: {
                    body: (action as IMainViewportFetchFakeDataSucess).payload.body,
                    id: (action as IMainViewportFetchFakeDataSucess).payload.id,
                    title: (action as IMainViewportFetchFakeDataSucess).payload.title,
                    userId: (action as IMainViewportFetchFakeDataSucess).payload.userId
                }
            };
        default:
            return state;
    }
};
