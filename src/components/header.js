import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Scrollchor from "react-scrollchor"
import { useIsStuffByLiang } from "../utils/isStuffByLiang"

import { Navbar, Nav, Container } from "react-bootstrap"

const Header = ({ siteTitle, isHomeScreen }) => {
  const isStuffByLiang = useIsStuffByLiang()
  return (
    <Navbar expand="lg" className={isHomeScreen ? "bg-light" : ""}>
      <Container>
        <Navbar.Brand>
          <Link to="/">{isStuffByLiang ? "Liang" : "David"} Liu</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100">
            {isHomeScreen
              ? [
                  <Nav.Item>
                    <Scrollchor to="#experience">Experience</Scrollchor>
                  </Nav.Item>,
                  <Nav.Item>
                    <Link to="/projects">All Projects</Link>
                  </Nav.Item>,
                  <Nav.Item>
                    <Scrollchor to="#contact">Contact</Scrollchor>
                  </Nav.Item>,
                  <Nav.Item>
                    <Link to="/posts">All Posts</Link>
                  </Nav.Item>,
                  <Nav.Item>
                    <a
                      href={`/resume${isStuffByLiang ? "_liang" : ""}.pdf`}
                      target="_blank"
                    >
                      Resume
                    </a>
                  </Nav.Item>,
                ]
              : [
                  <Nav.Item>
                    <Link to="/#experience">Experience</Link>
                  </Nav.Item>,
                  <Nav.Item>
                    <Link to="/projects">All Projects</Link>
                  </Nav.Item>,
                  <Nav.Item>
                    <Link to="/#contact">Contact</Link>
                  </Nav.Item>,
                  <Nav.Item>
                    <Link to="/posts">All Posts</Link>
                  </Nav.Item>,
                  <Nav.Item>
                    <a
                      href={`/resume${isStuffByLiang ? "_liang" : ""}.pdf`}
                      target="_blank"
                    >
                      Resume
                    </a>
                  </Nav.Item>,
                ]}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
