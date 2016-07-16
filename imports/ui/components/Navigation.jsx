import React, {Component} from 'react';
import ReactDom from 'react-dom';

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
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/mycompost/">My Compost</a></li>
          <li><a href="/mypickups/">Pickup Packages</a></li>
          <li><a href="/mycompostables/">Pickup Packages</a></li>
        </ul>
      </nav>
    );
  }
}