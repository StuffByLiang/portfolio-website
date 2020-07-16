import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projectTemplate = ({ data, pageContext, location }) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={project.frontmatter.project}
        description={project.frontmatter.description || project.excerpt}
      />
      <article>
        <header>
          <Link to="/projects">&larr; back to all projects</Link>
          <h1 className="title">{project.frontmatter.project}</h1>
          <time>{project.frontmatter.date}</time>
        </header>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <hr />
        <footer>
          <Bio />
        </footer>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/projects/${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.project}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/projects/${next.fields.slug}`} rel="next">
                  {next.frontmatter.project} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default projectTemplate

export const pageQuery = graphql`
  query projectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        project
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
