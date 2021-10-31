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
                                <Nav.Link as={HashLink} to="/home#myorders">My Orders</Nav.Link>

                            }
                            {
                                user.displayName &&
                                <Nav.Link as={HashLink} to="/home#myorders">Manage All Orders</Nav.Link>

                            }

                            {
                                user.displayName &&
                                <Nav.Link as={HashLink} to="/home#myorders">Add a New Plan</Nav.Link>

                            }


                            {
                                user?.email ?
                                    <Button className="mx-3" variant="light" onClick={logOut}>Logout</Button> :
                                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                            }
                        </Nav>
                        {
                            user.displayName &&
                            < Navbar.Text >
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;