import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="profile-button" onClick={openMenu}>
        <div>
        <i class="fa-solid fa-user"></i>
        </div>
      </button>
      
      {showMenu && (
        <div className="profile-dropdown-container">
        <ul className="profile-dropdown">
          <li className="user-name">{user.username}</li>
          {/* <li className="user-email">{user.email}</li> */}
          <li>
            <button className="logout-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
