import React from 'react';
import './navbar.css';

const Navbar = (props) => {
    return (
        <div className={props.className}>
                <div>
                    <a href='#Home' >Home</a>
                </div>
                <div>
                   <a href='#About'>About</a> 
                </div>
                <div>
                    <a href='#Contact'>Contacts</a>
                </div>
        </div>
    )
}

export default Navbar;