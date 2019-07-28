import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Skills from "../components/skills"
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
            <p>I'm a self-driven Entrepreneur and Full-Stack Developer from Vancouver, with 8+ years software and web development experience. I love what I do, being creative while coding, designing new projects, and helping small businessess and individuals improve their online presence by buidling website and creating custom applications. Apart from that, I play Ultimate Frisbee, and do lots of other extracurricular activities. Feel free to take a look around my website, or contact me!</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
