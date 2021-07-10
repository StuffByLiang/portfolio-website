import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { useIsStuffByLiang } from "../utils/isStuffByLiang"

const Bio = () => {
  const isStuffByLiang = useIsStuffByLiang()
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/liang.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: 20,
          minWidth: 80,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className="bio">
        <h5>{isStuffByLiang ? "Liang" : author.name}</h5>
        <p>{author.summary}</p>
        {` `}
        {/* <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a> */}
      </div>
    </div>
  )
}

export default Bio
