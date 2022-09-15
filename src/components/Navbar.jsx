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
            <span className="font-bold font-sans">MY STORE</span>
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
