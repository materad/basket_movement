import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './MainPage.actions';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  value: state.mainPage.value
})

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)