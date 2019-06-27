import React from "react"

import Typed from 'react-typed';

import {Container, Row, Col} from 'react-bootstrap'

const Hero = () => (
  <section class="hero bg-light">
  <Container>
    <Row>
      <Col md={10}>
        <h1><Typed
          strings={[
            `Hi, I'm Liang Liu, a web developer and mentor based in Vancouver, Canada.`,
          ]}
          typeSpeed={45}
        /><span class="d-none">Hi, I'm Liang Liu, a web developer and mentor based in Vancouver, Canada.</span></h1>
        {/*<Typed
          strings={[
            'a software developer',
            'a mentor',
          ]}
          typeSpeed={75}
          backSpeed={25}
          loop={true}
          backDelay={1500}
        /><span class="d-none">a software developer</span>*/}
      </Col>
    </Row>
  </Container>
  </section>
)

export default Hero
