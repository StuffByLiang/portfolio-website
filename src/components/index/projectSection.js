import React from "react"

import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Projects from "../projects"

const ProjectSection = ({projects}) => {
  return (
  <section id="projects" className="projects pt-0">
    <Container>
      <Row>
        <Col className="text-center">
          <h2>Highlighted Projects</h2>
          <p className="mb-5">
            I have experience with brainstorming, developing, and deploying
            applications. Here are some of them!<br /><br />
            <Link className="effect" to="/projects">View All Projects →</Link>
          </p>
        </Col>
        <Projects projects={projects} />
        <Link className="effect center" to="/projects">View All Projects →</Link>
      </Row>
    </Container>
  </section>
)}

export default ProjectSection