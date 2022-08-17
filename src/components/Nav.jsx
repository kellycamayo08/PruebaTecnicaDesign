import React, { useState } from 'react';
import hamburger from '../images/Vector.svg'
import close from '../images/close.svg'
import search from '../images/search.svg'
import logo from '../images/Log.png'
import '../styles/navbar.css'

const Nav = () => {

    const [navhamburger, setNavhamburger] = useState(false)

    return (
        <div>
            <nav className='navigation'>
                <button className='hamburger'
                    onClick={() => {
                        setNavhamburger(!navhamburger)
                    }}
                >{

                        navhamburger ? <img src={close} alt="" /> : <img src={hamburger} alt="" />

                    }

                </button>

                <a href='/' className='brand-name'>
                    <img src={logo} alt="" />
                </a>
                <a href='/' className='brand-search'>
                    <img src={search} alt="" />
                </a>

                <div className={
                    navhamburger ? 'menu expanded ' : 'menu'
                }>
                    <ul>
                        <h1>Embarazo</h1>
                        <hr />
                        <li>
                            <a href="/">Quiero ser mamá</a>
                        </li>
                        <li>
                            <a href="/">Voy hacer mamá</a>
                        </li>
                        <li>
                            <a href="/">Pardo</a>
                        </li>
                        <h1>Educación</h1>
                        <hr />
                        <li>
                            <a href="/">Aprende a ser mamá</a>
                        </li>
                        <li>
                            <a href="/">Educación para bebés</a>
                        </li>
                        <li>
                            <a href="/">Educación para niños</a>
                        </li>
                    </ul>


                </div>


            </nav>
        </div>
    );
};

export default Nav;