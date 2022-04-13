import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
          <Link to='/' >
            <h1 className="title">
              marvel heroes
            </h1>
          </Link>
        </header>

    );
}

export default Header;