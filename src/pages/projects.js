import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

import { Container} from "react-bootstrap"

const ProjectsPage = ({ data, location}) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <div className="projects">
        <Container className="projects-wrapper">
          <h1 className="text-center">All Projects</h1>
          <Projects projects={projects} />
        </Container>
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    ...allProjects
  }
`
