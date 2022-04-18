import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const Handlesignout = () => {
        signOut(auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#"> <span className='text-info'> Wild </span>Studio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-4">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        {
                            user ? <li className="nav-item me-4">
                                <Link className="nav-link text-danger" onClick={Handlesignout} to="/signin">Logout</Link>
                            </li>
                                :
                                <li className="nav-item me-4">
                                    <Link className="nav-link text-info" to="/signin">Login</Link>
                                </li>

                        }

                        {/* <li className="nav-item me-4">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li> */}

                        {
                            user ? <li className="nav-item me-4">
                                <Link className="nav-link" to="/"></Link>
                            </li>
                                : <li className="nav-item me-4">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                        }




                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Header;