import React from 'react';
import { connect } from 'react-redux';
import NotLogged from './NotLogged';
import { User } from '../../models/initiaState';
import LoggedProfile from './LoggedProfile';

function Profile ({ user, navigation }:{user:User, navigation:any}) {
  return (
    user.isLogged
      ? <LoggedProfile user={user} navigation={navigation} />
      : <NotLogged navigation={navigation}/>
  );
}

function mapStateToProps ({ user }) {
  return {
    user
  };
}
export default connect(mapStateToProps, null)(Profile);
