import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const loggedInUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className="profile-button" user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="sign-up-button" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <section className='root'>
    <div className='root-div'>
    <ul>
      <li>
        <NavLink className="Navlink" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
        
        {loggedInUser ? <NavLink className="Navlink" to="/new">Add Perfume</NavLink> : null}
      </li>
    </ul>
    </div>
    </section>
  );
}

export default Navigation;
