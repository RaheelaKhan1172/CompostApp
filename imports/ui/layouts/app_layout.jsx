import React from 'react'
import AccountsUIWrapper from '../accounts/accounts_ui_wrapper'

//export const AppLayout = ({content}) => <div>{content}</div>

export const AppLayout = (props) => {
 
  return (
  <div>
    <AccountsUIWrapper />
        <div>{props.content(props)}</div>
  </div>
  )
}