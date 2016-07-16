import React from 'react'

//export const Homepage = () => <div>Homepage</div>

export const Homepage = (props) => {
  const signedInMsg = props.signedIn? "You are signed in" : "You are not signed in"
  return <div>{signedInMsg}</div>
}
