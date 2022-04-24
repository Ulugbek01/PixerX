import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/pixer-logo.svg'
import '../../shared.css';
import './index.css';

export const Header = () => {
  return (
    <header id='main-header'>
        <div className="container">
            <div className="main-header__brand">
                <a href="#"><Logo/></a>
            </div>

            <nav className="main-navigation">
                <ul className="main-navigation__items">
                    <li><a href="#">Bosh sahifa</a></li>
                    <li><a href="#">Xizmatlar</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Jamoa</a></li>
                    <li><a href="#">Blog</a></li>
                    <li className='last-child'><a href="#">Kontaktlar</a></li>
                </ul>
            </nav>

            <a className='button' href="tel:+998 90 921 37 11">+998 90 921 37 11</a>
        </div>
    </header>
  )
}

export default Header;
