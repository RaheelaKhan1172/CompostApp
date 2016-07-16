import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
 
//Layouts and Pages
//import { AppLayout } from '../../ui/layouts/app_layout'

import AppContainer from '../../ui/containers/app_container'
import { Homepage } from '../../ui/pages/homepage'
 
FlowRouter.route('/', {
  name: 'homepage',
  action() {
    //mount(AppLayout, {
    mount(AppContainer, {
      //content: <Homepage />
      content: (props) => <Homepage {...props} />
    })
  }
})