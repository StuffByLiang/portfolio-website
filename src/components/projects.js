import React from "react"

import { graphql, Link } from "gatsby"

import { Col } from "react-bootstrap"
import { GoMarkGithub, GoLinkExternal, GoBook } from "react-icons/go"

class Project extends React.Component {
  render() {
    let { imageSrc, title, description, skills, link, github, slug, devpost, date } = this.props
    return (
      <div className="project-wrapper">
        <Col className="project-container" md={12}>
          <div
            className="project-image"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
          <div className="project-background"></div>
          <div className="project-content">
            <h3>{title}</h3>
            <div className="ribbon">{date}</div>
            <p>
              <span dangerouslySetInnerHTML={{ __html: description }} />
              <div><Link className="effect" to={'projects' + slug}>Read more &rarr;</Link></div>
            </p>
            <div className="project-skills">
              {skills.map(skill => (
                <span className="project-skill">{skill}</span>
              ))}
            </div>
            <div className="project-links">
            {devpost != null && ( //if exists
                <a
                  href={devpost}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project-link"
                >
                  View Devpost <GoBook />
                </a>
              )}
              {link != null && ( //if exists
                <a
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project-link"
                >
                  Visit Project <GoLinkExternal />
                </a>
              )}
              {github != null && ( //if exists
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project-link secondary"
                >
                  <GoMarkGithub /> Github
                </a>
              )}
            </div>
          </div>
        </Col>
      </div>
    )
  }
}

const Projects = ({projects}) => {
  return (
  <>
    {projects.map(({node}, i) => {
      console.log(node.frontmatter)
      const {date, project, description, technologies, github, link, showcasePic, devpost } = node.frontmatter;
      let image;
      if(showcasePic === null)
        image = ""
      else
        image = showcasePic.childImageSharp !== null ? showcasePic.childImageSharp.fluid.src : showcasePic.publicURL;
      const slug = node.fields.slug;
      return (
        <Project
          key={i}
          imageSrc={image}
          title={project}
          description={description}
          skills={technologies}
          link={link}
          github={github}
          date={date}
          slug={slug}
          devpost={devpost}
    />
      )
    })}
  </>
)}

export default Projects

export const query = graphql`
  fragment allProjects on Query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            project
            description
            technologies
            github
            link
            devpost
            showcasePic {
              publicURL
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                  base64
                }
              }
            }
          }
        }
      }
    }
  }

  fragment frontpageProjects on Query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: {frontpage: {eq: true}}
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            project
            description
            technologies
            github
            link
            devpost
            showcasePic {
              publicURL
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`
