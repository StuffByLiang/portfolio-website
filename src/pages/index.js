import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Projects from "../components/projects"

import {Container, Row, Col} from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Full-Stack Developer" />
    <Hero />
    <section class="bg-theme about text-center">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h2 class="mb-4">Nice to meet you!</h2>
            <p>I'm a self-driven Entrepreneur and Full-Stack Developer from Vancouver, with 8+ years of software and web development experience. I've always had a constant desire to learn new technologies, and to solve problems with innovative solutions. I enjoy pushing myself to learn more and use the current skills I have to create the best application possible, and I am currently looking for the opportunity to do that in a professional setting! Apart from that, I play Ultimate Frisbee and do lots of other extracurricular activities. Feel free to take a look around my website, or contact me!</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Skills />
    <Experience />
    <Projects />
  </Layout>
)

export default IndexPage
