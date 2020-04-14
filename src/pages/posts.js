import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const PostsPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <Container className="posts-wrapper">
        <h1 className="text-center">All Posts</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="entry" key={node.fields.slug}>
              <div>
                <h3>
                  <Link
                    className="effect"
                    style={{ boxShadow: `none` }}
                    to={"/posts" + node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </div>
              <p
                className="content"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
