import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import search from '../../images/icons/search.png'
import heart from '../../images/icons/heart.png'
import cart from '../../images/icons/shopping-cart.png'

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>HOME</Link></li>
        <li><a href="#shop">SHOP</a></li>
        <li><a href="#">LOOKBOOK</a></li>
        <li><a href="#features">FEATURES</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#contact">CONTACT US</a></li>

    </>
    return (
        <div className='flex justify-center'>
            <div className="navbar bg-base-100 lg:max-w-6xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg text-black">
                            <div></div>
                            {menuItems}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" srcSet="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-lg text-black">

                        {menuItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0">
                    <li><img src={search} alt="" srcSet="" /></li>
                    <li><img src={heart} alt="" srcSet="" /></li>
                    <li><img src={cart} alt="" srcSet="" /></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;