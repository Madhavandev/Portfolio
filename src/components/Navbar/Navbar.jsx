import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    //  const [nav_menu, setNav_menu] = useState(false)
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setNav_manu(false)



    const navToggle = () => {
        setActive(active === 'nav_menu' ? 'nav_menu nav_active' : 'nav_menu');
        setToggleIcon(toggleIcon === 'nav_toggler' ? 'nav_toggler toggle' : 'nav_toggler');
    };

    return (
        <>
            <div className="container">
                <nav className='nav'>
                    <div className='navbar-brand text-uppercase fw-7 ls-2 fs-24'>Madhavan
                    </div>
                    {/* <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> */}
                    <ul className={active}>
                            <li className='nav-item'>
                            <a href='#services' className='nav-link ls-1 text-uppercase fw-6 fs-20'>Services</a>
                                {/* <Link to = "/#" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Services</Link> */}
                            </li>
                            <li className='nav-item'>
                            <a href='#work' className='nav-link ls-1 text-uppercase fw-6 fs-20'>Works</a>
                                {/* <Link to = "#work" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Works</Link> */}
                            </li>
                            <li className='nav-item'>
                            <a href='#workprocess' className='nav-link ls-1 text-uppercase fw-6 fs-20'>WorkProcess</a>
                                {/* <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>About Me</Link> */}
                            </li>
                    <li className='nav-item'>
                    <a href='#about' className='nav-link ls-1 text-uppercase fw-6 fs-20'>About</a>
                                {/* <Link to = "/#" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Home</Link> */}
                            </li>
                            <li className='nav-item'>
                            <a href='#contact' className='nav-link ls-1 text-uppercase fw-6 fs-20'>Contact</a>
                                {/* <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Contact</Link> */}
                            </li>
                    </ul>
                    <div onClick={navToggle} className={toggleIcon}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
