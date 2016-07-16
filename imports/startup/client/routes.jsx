import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
 
//Layouts and Pages
//import { AppLayout } from '../../ui/layouts/app_layout'

import AppContainer from '../../ui/containers/app_container';
import { Homepage } from '../../ui/pages/homepage';
import { MyComposts } from '../../ui/pages/mycomposts'; 
import { MyPickups } from '../../ui/pages/mypickups';
import { HowToCompost } from '../../ui/pages/howtocompost';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    //mount(AppLayout, {
    mount(AppContainer, {
      //content: <Homepage />
      content: (props) => <Homepage {...props} />
    });
  }
});

FlowRouter.route('/mycompost', {
  name:'My Compost',
  action() {
    mount(AppContainer, {
      content: (props) => <MyComposts {...props} />
    });
  }
});

FlowRouter.route('/mypickups', {
  name: 'My Pickups',
  action() {
    mount(AppContainer, {
      content: (props) => <MyPickups {...props} />
    });
  }
});

FlowRouter.route('/howtocompost', {
  name: 'How to Compost',
  action() {
    mount(AppContainer, {
      content: (props) => <HowToCompost {...props} />
    });
  }
});
