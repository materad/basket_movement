export interface IMainPageProps {
    val: number;
    fakeData: any;
    onIncrement: () => void;
    onDecrement: () => void;
    onFetchFakeData: () => any;
}