import React from 'react';
import { Navbar, Nav, Container, Image, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen } from "react-icons/fa";

export default function MyNav() {
  return (
    <>
        <Col xs={2} className='p-0 position-fixed bgColor h-100'>
                <Navbar bg="black" data-bs-theme="dark" className='flex-column'>
                    <Container className='flex-column'>
                    <Navbar.Brand href="#home">
                    <Image src='Spotify_Logo.png' height={40} className='my-3'/>
                    </Navbar.Brand>
                    <Nav className="flex-column w-100">
                        <Link className='nav-link text-start mt-2 ms-4' to="/" ><FaHome className='fs-3 mx-1'/> Home</Link>
                        <Link className='nav-link text-start ms-4' to="/yourlibrary" ><FaBookOpen className='fs-3 mx-1'/> Your Library</Link>
                    </Nav>
                    <div className='d-flex mx-4 mt-3'>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2 searchBar"/>
                    <Button variant="outline-secondary searchBtn" type="submit">Go</Button>
                    </div>
                    </Container>
                </Navbar>

                <Container>
                    <Button variant="light" className='w-75'>Light</Button>
                    <Button variant="dark" className='w-75'>Dark</Button>
                </Container>
        </Col>

    </>
  )
}
