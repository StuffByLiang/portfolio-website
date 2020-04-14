import React from "react"

// images
import bitbox from "../images/logos/bitbox.png"
import launchpad from "../images/logos/launchpad.png"
import ubcuas from "../images/logos/uas.png"

import { Container, Row, Col } from "react-bootstrap"
// import { FiCode, FiTerminal } from "react-icons/fi";
// import { MdComputer } from "react-icons/md";
// import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

class Experience extends React.Component {
  render() {
    let {
      logoSrc,
      company,
      link,
      blurb,
      position,
      children,
      start,
      location,
      end,
      skills,
    } = this.props
    return (
      <Col className="experience-container" md={12}>
        <div className="experience-header">
          <a href={link}>
            <img src={logoSrc} alt="bitbox design" />
          </a>
          <div className="experience-company-info">
            <a href={link}>
              <h3>{company}</h3>
            </a>
            <span>{position}</span>
          </div>
        </div>
        <div className="experience-content">
          <p
            className="experience-blurb"
            dangerouslySetInnerHTML={{ __html: blurb }}
          />
          <div>{children}</div>
          <div className="experience-skills">
            {skills.map(skill => (
              <span className="experience-skill">{skill}</span>
            ))}
          </div>
        </div>
        <div className="experience-footer">
          {start} - {end} | {location}
        </div>
      </Col>
    )
  }
}

const Experiences = () => (
  <section id="experience" className="experiences pt-0">
    <Container>
      <Row>
        <Col className="text-center">
          <h2>My Experience</h2>
          <p className="mb-5">
            I strive to gain more experience to improve my skills!
          </p>
        </Col>
        <Experience
          logoSrc={bitbox}
          company="Bitbox Design"
          link="https://bitboxdesign.ca"
          blurb="Bitbox Design is a digital agency offering a wide variety of services ranging from digital marketing, website development and brand identity."
          position="Founder / CEO"
          start="Sept 2018"
          location="Vancouver, BC"
          end="Present"
          skills={[
            "PHP",
            "Wordpress",
            "CSS",
            "Javascript",
            "Problem Solving",
            "Client Communication",
            "Time Management",
          ]}
        >
          Currently managing all aspects of the agency: client acquisition,
          sales, marketing, and developing PHP Wordpress sites for businesses.
          Also in charge of marketing strategy for clients. Gained experience
          with time managing strict deadlines, general problem solving and
          client communication.
        </Experience>
        <Experience
          logoSrc={launchpad}
          company="UBC Launchpad"
          link="https://www.ubclaunchpad.com/"
          blurb="UBC Launch Pad is a software engineering design team devoted to building software projects in a collaborative and professional environment."
          position="Developer"
          start="Sept 2019"
          location="Vancouver, BC"
          end="Present"
          skills={["Javascript", "Node.js", "Docker", "React.js"]}
        >
          Working with Node.js, React, sockets and external APIs to create a
          leetcode player vs player web app.
        </Experience>
        <Experience
          logoSrc={ubcuas}
          company="UBC UAS (Unmanned Aircraft Systems Design Team) "
          link="https://www.ubcuas.com/"
          blurb="The University of British Columbia Unmanned Aircraft Systems engineering student team (UBC UAS) is a multidisciplinary group of students spanning multiple faculties, including Engineering, Forestry, Science and Business, and competes in competitions revolving around drones."
          position="Software Developer"
          start="Sept 2019"
          location="Vancouver, BC"
          end="Present"
          skills={["React", "Python", "Flask", "C++", "Docker", "Linux"]}
        >
          Currently tasked with writing REST api for the onboard flight software
          responsible for rerouting the aircraft's path for the intent of
          obstacle avoidance.{" "}
        </Experience>
      </Row>
    </Container>
  </section>
)

export default Experiences
