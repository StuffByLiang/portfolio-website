import React from "react"

import Typed from "react-typed"

import { Container, Row, Col } from "react-bootstrap"
import { GoMarkGithub, GoLinkExternal, GoBook } from "react-icons/go"

import Avatar from "../../images/avatar.svg"

import { isStuffByLiang } from "../../utils/isStuffByLiang"

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      h1: null,
      p: null,
    }
  }
  render() {
    return (
      <section className="hero bg-light">
        <Container>
          <Row>
            <Col md={12}>
              <h1>
                <Typed
                  strings={[
                    `Hi, I'm ${
                      isStuffByLiang() ? "Liang" : "David"
                    } Liu, a full stack developer and mentor based in Vancouver, Canada.`,
                  ]}
                  typedRef={typed => {
                    this.setState({
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
                    `Open to all opportunities to work together and other inquiries. Feel free to check out my <a href="resume.pdf" class="effect" target="_blank">resume</a>!`,
                  ]}
                  showCursor={false}
                  stopped={true}
                  typedRef={typed => {
                    this.setState({
                      p: typed,
                    })
                  }}
                  typeSpeed={10}
                />
              </p>
              <h1 className="d-none">
                Hi, I'm {isStuffByLiang() ? "Liang" : "David"} Liu, a full stack
                developer and mentor based in Vancouver, Canada.
              </h1>
              <p className="d-none">
                Open to all opportunities to work together and other inquiries.
                Feel free to check out my{" "}
                <a href="resume.pdf" className="effect" target="_blank">
                  resume
                </a>
                !
              </p>
              <div className="button-container">
                {/* <a
                  href="/lets-work-together"
                  rel="noopener noreferrer"
                  className="hero-button"
                >
                  Work with me! <GoLinkExternal />
                </a> */}
              </div>
              {/*<Typed
            strings={[
              'a software developer',
              'a mentor',
            ]}
            typeSpeed={75}
            backSpeed={25}
            loop={true}
            backDelay={1500}
          /><span className="d-none">a software developer</span>*/}
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Hero
