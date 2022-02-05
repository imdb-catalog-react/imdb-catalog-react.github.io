import './Navbar.css';

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav, Form, FormControl, InputGroup } from "react-bootstrap";

import constants from './config/constants';

export default function AppNavbar() {
  const [searchQuery, setSearchQuery] = useState("");

  function search(event) {
    event.preventDefault();
    console.log(searchQuery);
    if (searchQuery.length > 0) {
        window.location.href = `/search/${searchQuery}`;
    }
  };

  return (
    <Navbar className="navbar-dark" variant='dark' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon className="navbar-brand-icon" icon={faPlayCircle} />{constants.SITE_TITLE}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="/" className='text-white'>Home</Nav.Link>
          <Nav.Link href="/movies" className='text-white'>Movies</Nav.Link>
          <Nav.Link href="/series" className='text-white'>Series</Nav.Link>
          <Form className="navbar-search" onSubmit={search}>
            <InputGroup>
              <FormControl
                className='text-white bg-dark'
                type="text"
                placeholder="Search movies and series"
                aria-label="Search movies and series"
                aria-describedby="btnGroupAddon"
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <InputGroup.Text 
                id="btnGroupAddon" 
                className='text-white bg-dark'
                onClick={search}>
                  <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
