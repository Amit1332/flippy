import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Form, InputGroup } from 'react-bootstrap';
import headerLogo from '../../../assets/images/logo.svg';

const WebsiteHeader = () => {
  // const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)
  // useEffect(() => {
  //   const linkElement = document.createElement("link");
  //   linkElement.setAttribute("rel", "stylesheet");
  //   linkElement.setAttribute("type", "text/css");
  //   linkElement.setAttribute(
  //     "href",
  //     "../../../assets/css/custom.css"
  //   );
  //   document.head.appendChild(linkElement);

  //   setLinkElementLoaded(true)
  // }, []);
  return (
    <Navbar className='nav-main-header' collapseOnSelect expand="lg" bg="light">
      <Container fluid className='main-header'>
        <Row className='top-header-row'>
          <div className='top-header'>
            <div className='tleft-box'>
              <div className='header-logo'>
                <Navbar.Brand href="#home">
                  <img src={headerLogo} alt="Flippy7" />
                </Navbar.Brand>
              </div>
              <div className='search-form'>
                <InputGroup className="ml-3">
                  <Form.Control
                    placeholder="Search product"
                    aria-label="seacrh"
                  />
                </InputGroup>
              </div>
            </div>
            <div className='tright-box'>
              <div className='header-buttons'>
                <div className='download-app a-icon'>
                  <i className="bi bi-phone"></i>
                  Download App
                </div>
                <div className='supplier-app a-icon'>
                  <i className="bi bi-person-add"></i>
                  Become Supplier
                </div>
              </div>
              <div className='header-buttons '>
                <div className='wishlist-app a-icon '>
                  <i className="bi bi-heart"></i>
                  Wishlist
                </div>
                <div className='cart-app a-icon'>
                  <i className="bi bi-cart"></i>
                  Cart
                </div>
                <div className='account-app a-icon'>
                  <i className="bi bi-person"></i>
                  Account
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className='nav-menu'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#all">All</Nav.Link>
              <NavDropdown title="Women Ethnic" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">one</NavDropdown.Item>
                <NavDropdown.Item href="#">Two</NavDropdown.Item>
                <NavDropdown.Item href="#">Three</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#1">Women Western</Nav.Link>
              <Nav.Link href="#2">Men</Nav.Link>
              <Nav.Link href="#3">Kids</Nav.Link>
              <Nav.Link href="#4">Home & Kitchen</Nav.Link>
              <Nav.Link href="#5">Beauty & Health</Nav.Link>
              <Nav.Link href="#6">Jewellery & Accessories</Nav.Link>
              <Nav.Link href="#7">Bags & Footwear</Nav.Link>
              <Nav.Link href="#8">Electronics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  )
}

export default WebsiteHeader