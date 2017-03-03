import React from 'react';

let yeomanImage = require('../images/yeoman.png');
import List from './List/index';

class AppComponent extends React.Component {
  render() {
    return (
      <List init={this.props.onInit} list={this.props.list}/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
