import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IStoreState } from '../../store/IStore.state';
import { IMainPageProps } from './IMainPage.props';
import { decrement, fetchFakeData, increment, MainPageActions, } from './MainPage.actions';

class MainPage extends React.Component<IMainPageProps, {}> {
    public render() {
        return (
            <div>
                <h1>{this.props.val}</h1>
                <h1>{this.props.fakeData.title}</h1>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onFetchFakeData}>Fetch fake data</button>
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        fakeData: state.mainPage.fakeData,
        val: state.mainPage.val,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<MainPageActions>) => {
    return {
        onDecrement: () => dispatch(decrement()),
        onFetchFakeData: () => dispatch(fetchFakeData()),
        onIncrement: () => dispatch(increment()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage as any);