import PropTypes from "prop-types"
import React from "react"

import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">Liang Liu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end w-100">
          <Nav.Item><Nav.Link href="#home">Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#link">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
