import { MainPageConstants } from './MainPage.constants';

export interface IMainPageIncrement {
    type: MainPageConstants.INCREMENT;
}

export interface IMainPageDecrement {
    type: MainPageConstants.DECREMENT;
}

export interface IMainPageFetchFakeData {
    type: MainPageConstants.FETCH_FAKE_DATA;
}

export interface IMainPageFetchFakeDataSucess {
    type: MainPageConstants.FETCH_FAKE_DATA_SUCESS;
    payload: any;
}

export const increment = (): IMainPageIncrement => ({
    type: MainPageConstants.INCREMENT
});

export const decrement = (): IMainPageDecrement => ({
    type: MainPageConstants.DECREMENT
});

export const fetchFakeData = (): IMainPageFetchFakeData => ({
    type: MainPageConstants.FETCH_FAKE_DATA
});

export const fetchFakeDataSucess = (payload: { userId: number, id: number, title: string, body: string }):
    IMainPageFetchFakeDataSucess => ({
        payload,
        type: MainPageConstants.FETCH_FAKE_DATA_SUCESS,
    });

export type MainPageActions = IMainPageIncrement
    | IMainPageDecrement
    | IMainPageFetchFakeData
    | IMainPageFetchFakeDataSucess;