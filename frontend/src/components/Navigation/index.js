import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from "../../context/apple-touch-icon.png"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const loggedInUser = useSelector(state => state.session.user);

  let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton className="profile-button" user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink className="sign-up-button" to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  return (
    <section className='root'>
    <div className='root-div'>
    <ul className='buttons-container'>
      <li>
        <NavLink className="NavLink" exact to="/"><img className='logo-img' id="logo" src={logo} /></NavLink>
        {isLoaded && sessionLinks}
        </li>
        <li>
        {loggedInUser ? <NavLink  className="NavLink-add-perfume" to="/new">Add Perfume</NavLink> : null}
      </li>
      {sessionUser ? <ProfileButton className="profile-button" user={sessionUser} /> : <>
        <LoginFormModal />
        <NavLink className="sign-up-button" to="/signup">Sign Up</NavLink>
      </> }
    </ul>
    </div>
    </section>
  );
}

export default Navigation;
