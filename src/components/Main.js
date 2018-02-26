import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions';

let yeomanImage = require('../images/yeoman.png');
import List from './List/index';

// class AppComponent extends React.Component {
//   render() {
//     return (
//       <List init={this.props.onInit} list={this.props.list}/>
//     );
//   }
// }
const AppComponent = ({ list, actions }) => {
  return (
    <List init={actions.init} list={list} />
  )
}

const mapStateToProps = state => ({
  list: state
});



const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


AppComponent.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
