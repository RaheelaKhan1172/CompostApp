import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { User } from '../../api/user.js';

import { DefaultLayout }  from '../layouts/DefaultLayout'
 
export default createContainer(() => {
 
  const signedIn = Meteor.user() !== null 
  
  return {
    signedIn
  }
 
}, DefaultLayout)
