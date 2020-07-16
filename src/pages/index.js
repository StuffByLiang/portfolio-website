import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

import Hero from "../components/index/heroSection"
import Skills from "../components/index/skillSection"
import Experience from "../components/index/experienceSection"
import Projects from "../components/index/projectSection"

import { Container, Row, Col } from "react-bootstrap"

const IndexPage = ({ location, data }) => {
  let projects = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <SEO title="Full-Stack Developer" />
      <Hero />
      <section className="bg-theme about text-center">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <h2 className="mb-4">Nice to meet you!</h2>
              <p>
                Hi! I'm a self-driven entrepreneur, innovative full-stack
                developer, and leader. I have an extensive portfolio of personal
                projects using a wide array of technical stacks, as well as
                experience leading teams. My current interests are
                entrepreneurship, business administration, machine learning,
                application development, as well as the world of fintech,
                specifically open banking. I've always had a constant desire to
                learn new technologies, and over the years, I have strived to gain
                as much industry knowledge that relates to my interests as I can.
                Apart from that, I play Ultimate Frisbee and do lots of other
                extracurricular activities. Feel free to take a look around my
                website, view my{" "}
                <a className="effect dark" href="resume.pdf" target="_blank">
                  resume
                </a>{" "}
                or contact me!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Skills />
      <Experience />
      <Projects projects={projects} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    ...frontpageProjects
  }
`
