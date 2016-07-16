/**
 * Page layout, reused across multiple Page components
 */

import React from 'react'
//import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
import Navigation from '../components/Navigation';
import AccountsUIWrapper from '../accounts/accounts_ui_wrapper';

export const DefaultLayout = (props) => {
 
  return (
  <div>
   <h1>Our App</h1>
   <AccountsUIWrapper />
        <div>{props.content(props)}</div>
   <Navigation />
  </div>
  )
}
