import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { images_url } from '../../assests/DataBase';
import './NavBar.css'
import { useContext } from 'react';
import ContextProvider from '../../assests/Contextprovider';
import ThemeChanger from '../Others/ThemeChanger';
import { Dropdown } from 'react-bootstrap';
const NavbarComp = () => {

    const [navbarExpand, setNavbarExpand] = useState(false)
    const [navVariant, setNavVariant] = useState('light')

    useEffect(() => {
        localStorage.getItem('theme') == 'dark' && setNavVariant('dark')
    })

    const closeNavbar = () => setNavbarExpand(false)
    const toggleNavbar = () => setNavbarExpand(!navbarExpand)
    const { indconlogo, setIndconlogo } = useContext(ContextProvider)
    function themechange() {
        document.querySelector('html').classList.toggle('dark-theme')
        localStorage.getItem('theme') == 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark')
        localStorage.getItem('theme') == 'dark' ? setIndconlogo(images_url + 'navbar images/indcon logo dark.png') : setIndconlogo(images_url + 'navbar images/indcon logo.png')
        setNavVariant(localStorage.getItem('theme'))
        closeNavbar()
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <NavLink onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }} className='nav-link themechanger' to={'/activities'}>{children}</NavLink>
    ));


    return (
        <div>
            <Navbar onToggle={toggleNavbar} expanded={navbarExpand} variant={navVariant} style={{ backgroundColor: 'var(--brand-light-col)' }} sticky={'top'} expand="lg">
                <Container style={{ maxWidth: '100%', paddingLeft: '0' }}>
                    <Navbar.Brand className='ps-4'>
                        <NavLink className='nav-link nav-logo' to={'/'}>
                            {[images_url + 'navbar images/Anna_University_Logo.png', indconlogo, images_url + 'navbar images/sielogo.png'].map(item => (
                                <img key={item}
                                    width="70"
                                    height="70"
                                    src={item}
                                    className="d-inline-block align-top me-2"
                                    alt="React Bootstrap logo"
                                />
                            ))}
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div style={{ position: 'relative', flexBasis: '100%', paddingRight: '20px' }}>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto ps-4">
                                <NavLink onClick={closeNavbar} className='nav-link text-center' to={'/'}>Home</NavLink>
                                <NavLink onClick={closeNavbar} className='nav-link' to={'/sympo'}>Symposium</NavLink>
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                        Activities <i class="fa-solid fa-caret-down"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <NavLink onClick={closeNavbar} className='nav-link' to={'/team'}>Team</NavLink>
                                        <NavLink onClick={closeNavbar} className='nav-link' to={'/gallery'}>Gallery</NavLink>
                                        <NavLink onClick={closeNavbar} className='nav-link' to={'/resources'}>Resources</NavLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <NavLink onClick={closeNavbar} className='nav-link' to={'/activities'}>Activities</NavLink> */}
                                <NavLink onClick={closeNavbar} className='nav-link' to={'/team'}>Team</NavLink>
                                <NavLink onClick={closeNavbar} className='nav-link' to={'/gallery'}>Gallery</NavLink>
                                <NavLink onClick={closeNavbar} className='nav-link' to={'/resources'}>Resources</NavLink>
                                <NavLink onClick={closeNavbar} className='nav-link' to={'/resources'}>Resources</NavLink>
                                <NavLink onClick={closeNavbar} className='nav-link' to={'/notification'}>{NotificationSvg}</NavLink>
                                <Link onClick={closeNavbar} className='nav-link' to='ContactScroll' smooth={true} duration={500} >{ContactSvg}</Link>
                                <Link className='nav-link themechanger' to="#" smooth={true} duration={500} ><ThemeChanger listener={themechange} /></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

const NotificationSvg = <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--brand-dark-col)' }} height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
const ContactSvg = <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--brand-dark-col)' }} height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>



export default NavbarComp