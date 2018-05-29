import { MainViewportConstants } from './MainViewport.constants';

export interface IMainViewportIncrement {
    type: MainViewportConstants.INCREMENT;
}

export interface IMainViewportDecrement {
    type: MainViewportConstants.DECREMENT;
}

export interface IMainViewportFetchFakeData {
    type: MainViewportConstants.FETCH_FAKE_DATA;
}

export interface IMainViewportFetchFakeDataSucess {
    type: MainViewportConstants.FETCH_FAKE_DATA_SUCESS;
    payload: any;
}

export const increment = (): IMainViewportIncrement => ({
    type: MainViewportConstants.INCREMENT
});

export const decrement = (): IMainViewportDecrement => ({
    type: MainViewportConstants.DECREMENT
});

export const fetchFakeData = (): IMainViewportFetchFakeData => ({
    type: MainViewportConstants.FETCH_FAKE_DATA
});

export const fetchFakeDataSucess = (payload: { userId: number, id: number, title: string, body: string }):
    IMainViewportFetchFakeDataSucess => ({
        payload,
        type: MainViewportConstants.FETCH_FAKE_DATA_SUCESS,
    });

export type MainViewportActions = IMainViewportIncrement
    | IMainViewportDecrement
    | IMainViewportFetchFakeData
    | IMainViewportFetchFakeDataSucess;