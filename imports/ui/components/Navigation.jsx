import React, {Component} from 'react';
import ReactDom from 'react-dom';
//import mui from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//let ThemeManager = new mui.Styles.ThemeManager();
//let AppBar = mui.AppBar;
//let Colors = mui.Styles.Colors;
//let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();


/* // Working example
export default class Navigation extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/

export default class Navigation extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    return (
    <div>
      <nav>
        <ul>
          <li><a href="/mycompost/">My Compost</a></li>
          <li><a href="/mypickups/">Drop / Pickup</a></li>
          <li><a href="/howtocompost/">How to Compost</a></li>
        </ul>
      </nav>
      <AppBar title="The" />
    </div>
    );
  }
}

Navigation.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};