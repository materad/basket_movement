import * as React from 'react';
import './App.scss';
import MainViewport from './containers/MainViewport/MainViewport.container';
import Navigation from './containers/Navigation/Navigation.container';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Navigation />
        <MainViewport />
      </div>
    );
  }
}

export default App;
