import React from "react"

import Typed from 'react-typed';

import {Container, Row, Col} from 'react-bootstrap'

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: null,
      p: null
    }
  }
  render() {

    return (
    <section class="hero bg-light">
    <Container>
      <Row>
        <Col md={10}>
          <h1><Typed
            strings={[
              `Hi, I'm Liang Liu, a full stack developer and mentor based in Vancouver, Canada.`
            ]}
            typedRef={(typed) => { this.setState({
              h1: typed
            })}}
            onComplete={(typed)=>{
              this.state.p.start();
            }}
            typeSpeed={45}
          /></h1>
          <p><Typed
            strings={[
              `Currently looking for a 2020 summer internship in a professional setting. Check out my <a href="resume.pdf" class="effect" target="_blank">resume</a>!`
            ]}
            showCursor={false}
            stopped={true}
            typedRef={(typed) => { this.setState({
              p: typed
            })}}
            typeSpeed={10}
          /></p>
          <h1 class="d-none">Hi, I'm Liang Liu, a full stack developer and mentor based in Vancouver, Canada.</h1>
          <p class="d-none">Currently looking to practice my skills in a professional setting / internship for the summer of 2020! check out my <a href="resume.pdf" class="effect" target="_blank">resume</a>!</p>
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
  )}
}

export default Hero
