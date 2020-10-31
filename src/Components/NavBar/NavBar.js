import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import pic from "../../images/profile-pic/back2.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="animate-navbar nav-theme">
            <Link style={{textDecoration: "none"}} to="/home"><Navbar.Brand className="logo d-flex justify-content-start align-items-center">
                <img className="pic mr-2" src={pic} alt="" srcset=""/>
                <h6 id="brand-name">MD.ARIFUL HAQUE</h6>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto pr-5">
                    <Link style={{textDecoration: "none", color : "silver"}} className="mr-4" to="/home">Home</Link>
                    <Link style={{textDecoration: "none", color : "silver"}} className="mr-4" to="/about">About Me</Link>
                    <Link style={{textDecoration: "none", color : "silver"}} className="mr-4" to="/projects">Projects</Link>
                    <Link style={{textDecoration: "none", color : "silver"}} className="mr-4" to="/blog">Blogs</Link>
                    <Link style={{textDecoration: "none", color : "silver"}} className="mr-2" to="/contact">Contacts</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;