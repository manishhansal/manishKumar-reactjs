import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">My STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/favorite">
                    Favorite
                </Link>
            </div>
        </div>
  )
}

export default Navbar
