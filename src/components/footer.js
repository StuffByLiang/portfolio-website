import React from "react"

import { Col, Row, Container } from "react-bootstrap"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"

const Footer = ({ siteTitle }) => (
  <section id="contact" className="footer text-center">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h3 className="quote">
            So we beat on, boats against the current, borne back ceaselessly
            into the past.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="social-icons">
            <a
              className="button"
              href="https://www.linkedin.com/in/liang-liu-819059135/"
            >
              <FaLinkedinIn />
            </a>
            <a className="button" href="https://github.com/StuffByLiang">
              <FaGithub />
            </a>
            <a className="button" href="mailto:stuffbyliang@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p className="copyright">Made with Love by Liang Liu &copy; 2019</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Footer
