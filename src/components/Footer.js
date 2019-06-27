import React from "react"

import {Col, Row, Container} from 'react-bootstrap'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = ({ siteTitle }) => (
  <section id="contact" class="footer text-center">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h3 class="quote">So we beat on, boats against the current, borne back ceaselessly into the past.</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="social-icons">
            <a class="button" href="https://www.linkedin.com/in/liang-liu-819059135/"><FaLinkedinIn /></a>
            <a class="button" href="https://github.com/StuffByLiang"><FaGithub /></a>
            <a class="button" href="mailto:stuffbyliang@gmail.com"><FaEnvelope /></a>
          </div>
          <p class="copyright">Made with Love by Liang Liu &copy;	2019</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Footer
