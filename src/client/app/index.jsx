import React from 'react';
import { render } from 'react-dom';
import Albums from './pages/albums';

class App extends React.Component {
  componentWillUnmount() {
    localStorage.removeItem('token')
  }
  render() {
    return <Albums />
  }
}

render(<App />, document.getElementById('app'));

module.hot.accept();
