import React from "react"

import { Col, Row, Container } from "react-bootstrap"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { useIsStuffByLiang } from "../utils/isStuffByLiang"

const Footer = ({ siteTitle }) => {
  const isStuffByLiang = useIsStuffByLiang()
  return (
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
                href="https://www.linkedin.com/in/david-liu-2001/"
              >
                <FaLinkedinIn />
              </a>
              <a className="button" href="https://github.com/StuffByLiang">
                <FaGithub />
              </a>
              <a
                className="button"
                href={
                  isStuffByLiang
                    ? "mailto:stuffbyliang@gmail.com"
                    : "mailto:stuffbydavid303@gmail.com"
                }
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="copyright">
              Made with Love by {isStuffByLiang ? "Liang" : "David"} Liu &copy;
              2019-2021
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
