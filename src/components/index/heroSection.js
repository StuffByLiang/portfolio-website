import React, { useState } from "react"

import Typed from "react-typed"

import { Container, Row, Col } from "react-bootstrap"
import { GoMarkGithub, GoLinkExternal, GoBook } from "react-icons/go"

import Avatar from "../../images/avatar.svg"

import { useIsStuffByLiang } from "../../utils/isStuffByLiang"

const Hero = () => {
  const [state, setState] = useState({
    h1: null,
    p: null,
  })

  const isStuffByLiang = useIsStuffByLiang()

  return (
    <section className="hero bg-light">
      <Container>
        <Row>
          <Col md={12}>
            <h1>
              <Typed
                strings={[
                  `Hi, I'm ${
                    isStuffByLiang ? "Liang" : "David"
                  } Liu, a full stack developer and mentor based in Vancouver, Canada.`,
                ]}
                typedRef={typed => {
                  setState({
                    h1: typed,
                  })
                }}
                onComplete={typed => {
                  this.state.p.start()
                }}
                typeSpeed={55}
              />
            </h1>
            <p>
              <Typed
                strings={[
                  `Open to all opportunities to work together and other inquiries. Feel free to check out my <a href="/resume${
                    isStuffByLiang ? "_liang" : ""
                  }.pdf" class="effect" target="_blank">resume</a>!`,
                ]}
                showCursor={false}
                stopped={true}
                typedRef={typed => {
                  setState({
                    p: typed,
                  })
                }}
                typeSpeed={10}
              />
            </p>
            <h1 className="d-none">
              Hi, I'm {isStuffByLiang ? "Liang" : "David"} Liu, a full stack
              developer and mentor based in Vancouver, Canada.
            </h1>
            <p className="d-none">
              Open to all opportunities to work together and other inquiries.
              Feel free to check out my{" "}
              <a
                href={`resume${isStuffByLiang ? "_liang" : ""}.pdf`}
                className="effect"
                target="_blank"
              >
                resume
              </a>
              !
            </p>
            <div className="button-container"></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
