export interface IMainViewportProps {
    val: number;
    fakeData: any;
    onIncrement: () => void;
    onDecrement: () => void;
    onFetchFakeData: () => any;
}