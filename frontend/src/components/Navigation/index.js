import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SearchBar from '../Search/Search';
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
    <>
    <nav className='nav-bar'>

    <div className='logo-container'>
        <NavLink className="home-button-logo" exact to="/">
          <img className='logo-img' id="logo" src={logo} />
          </NavLink>
        {isLoaded && sessionLinks}
    </div>

    <section className='search-bar'>
      <SearchBar />
    </section>

    <section className='add-perfume-become-a-host'>
      <div>
      {loggedInUser ? <NavLink  className="NavLink-add-perfume" to="/new">Add Perfume</NavLink> : null}
      </div>
      <ul>
        <li className='li-elements-profile-button-loggedIn'>
        {sessionUser ? <ProfileButton className="profile-button" user={sessionUser} /> :
        <div className='login-signup-buttons'>
          <LoginFormModal />
          <NavLink className="sign-up-button" to="/signup">Sign Up</NavLink>
        </div> }
        </li>
      </ul>
    </section>
    </nav>
    </>
  );
}

export default Navigation;
