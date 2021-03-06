import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Aunik Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#offerings">Offerings</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#review">Review</Nav.Link>
                            {
                                user.displayName &&
                                <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>

                            }
                            {
                                user.displayName &&
                                <Nav.Link as={Link} to="/manageOrders">Manage All Orders</Nav.Link>

                            }

                            {
                                user.displayName &&
                                <Nav.Link as={Link} to="/addnew">Add a New Plan</Nav.Link>

                            }


                            {
                                user?.email ?
                                    <Button className="ms-2" variant="light" onClick={logOut}>Logout</Button> :
                                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                            }
                        </Nav>
                        {
                            user.displayName &&
                            < Navbar.Text >
                                <a href="#login" className="text-decoration-none"><img height="15%" width="15%" className="rounded-circle me-2" src={user?.photoURL} alt="" />{user.displayName}</a>
                            </Navbar.Text>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;