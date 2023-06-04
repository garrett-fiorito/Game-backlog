import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" style={{ marginLeft: '20px', marginRight: '20px' }}>Game log</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" style={{ marginRight: '10px' }}>Home</Nav.Link>
        <Nav.Link as={Link} to="/completed" style={{ marginRight: '10px' }}>Queue</Nav.Link>
        <Nav.Link as={Link} to="/wishlist" style={{ marginRight: '10px' }}>Shopping List</Nav.Link>
      </Nav>
    </Navbar>
  );
}
