/**
 * Page layout, reused across multiple Page components
 */

import React from 'react'
//import ExecutionEnvironment from 'react/lib/ExecutionEnvironment'; // TODO: Load differently
import Navigation from '../components/Navigation';
import AccountsUIWrapper from '../accounts/accounts_ui_wrapper';
import LeafletMap from 'leaflet';


export const DefaultLayout = React.createClass({
  /*propTypes: {
    title: React.PropTypes.string
  },*/
  render() {
    return (
      <div>
        <div className="l-header">
          
          <Navigation />
        </div>
        <div className="l-content">
          <h1>Other H1 this.props.title </h1>
          

          this_props_children 

          <div id="map-container"></div>

        </div>
        <div className="l-footer">
          <p>Copyright (c) 2014 Company Name</p>
        </div>

      </div>
    );
  }/*,
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      //document.title = "this_props_title";
    }
  }*/
});

/* 
//works
export const DefaultLayout = (props) => {
 
  return (
  <div>
    <div className="l-header">
      <h1>Our App</h1>
      <AccountsUIWrapper />
      <div>{props.content(props)}</div>
      <Navigation />
    </div>
    <div className="l-content">
      <h1>this.props.title</h1>
      this.props.children
    </div>
    <div className="l-footer">
      <p>Copyright (c) 2016 Compostable by Team Compost</p>
    </div>
  </div>
  )
}



export const DefaultLayout = (props) => {
  return (
  <div>
    <div className="l-header">
      <h1>Our App</h1>
      <AccountsUIWrapper />
        <div>{props.content(props)}</div>
      <Navigation />
    </div>
    <div className="l-content">
      <h1>{this.props.title}</h1>
      {this.props.children}
    </div>
    <div className="l-footer">
      <p>Copyright (c) 2016 Compostable by Team Compost</p>
    </div>
  </div>
  )
}


Example
export const DefaultLayout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render() {
    return (
      <div>
        <div className="l-header">
          <h1>Our App</h1>
          <Navigation />
        </div>
        <div className="l-content">
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
        <div className="l-footer">
          <p>Copyright (c) 2014 Company Name</p>
        </div>
      </div>
    );
  },
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      document.title = this.props.title;
    }
  }
});
*/