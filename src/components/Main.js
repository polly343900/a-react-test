import React from 'react';

let yeomanImage = require('../images/yeoman.png');
import List from './List/index';

class AppComponent extends React.Component {
  render() {
    return (
      <List />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
