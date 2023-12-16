import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate();

    const isMobile = window.innerWidth <= 468;

    return (
        <Navbar expand="lg" bg="body-tertiary shadow sticky-top" variant="light">
            <div className="container">

                <Navbar.Brand className="d-flex align-items-center jsutify-content-between" href="#" onClick={() => navigate('/home')}>
                    <div className="col-sm-11">
                        <img
                            src="https://i.ibb.co/239PXCF/file-sharex-high-resolution-logo-transparent.png"
                            alt="File Sharer"
                            loading="lazy"
                            className={`img-fluid ${isMobile ? 'w-50' : 'w-25'}`}
                        />
                    </div>
                    <div className="col-sm-1">
                        <Navbar.Toggle aria-controls="navbarButtonsExample" />
                    </div>
                </Navbar.Brand>

                <Navbar.Collapse id="navbarButtonsExample" className='mt-3'>

                    <div className="d-flex align-items-center justify-content-between ms-auto">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'px-3 me-2 fw-bolder fs-5 text-dark text-decoration-underline' : 'px-3 me-2 fw-bolder fs-5 text-secondary text-decoration-none'}>
                            Home
                        </NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'px-3 me-2 fw-bolder fs-5 text-dark text-decoration-underline' : 'px-3 me-2 fw-bolder fs-5 text-secondary text-decoration-none'} >
                            Dashboard
                        </NavLink>
                        <NavLink to='/technologies' className={({ isActive }) => isActive ? 'px-3 me-2 fw-bolder fs-5 text-dark text-decoration-underline' : 'px-3 me-2 fw-bolder fs-5 text-secondary text-decoration-none'}>
                            Technologies
                        </NavLink>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id="custom-tooltip">
                                Ashlok Chaudhary
                            </Tooltip>
                        }>
                            <a href="https://www.github.com/ashlok2003" role="button" className='btn btn-dark'><i className="fa-brands fa-github"></i></a>
                        </OverlayTrigger>
                    </div>
                </Navbar.Collapse>

            </div>
        </Navbar>
    );
};

export default Header;
