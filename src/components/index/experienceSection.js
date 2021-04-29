import React from "react"

// images
import bitbox from "../../images/logos/bitbox.png"
import launchpad from "../../images/logos/launchpad.png"
import ubcuas from "../../images/logos/uas.png"
import mlh from "../../images/logos/mlh.png"
import atb from "../../images/logos/atb.png"

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
          <div className="ribbon">
            {start} - {end}
          </div>
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
        <div className="experience-footer">{location}</div>
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
          logoSrc={atb}
          company="ATB Financial"
          link="https://www.atb.com/"
          blurb="ATB Financial is a financial institution and Crown corporation wholly owned by the Province of Alberta. ATB Financial provides financial services to over 770,000 Alberta residents and businesses with $51.9 billion in assets."
          position="Software Development Intern"
          start="Jan 2021"
          location="Vancouver, BC"
          end="Present"
          skills={[
            "React",
            "Java",
            "Google Cloud Platform",
            "Typescript",
            "Material UI",
            "Jest",
            "Spring Boot",
            "Gitlab",
            "Google App Engine",
          ]}
        >
          <p>
            Working full-stack on the internal admin/employee dashboard for
            banking products, using React, MobX, Typescript, and GitLab for the
            frontend, and Java Spring Boot and Google Cloud Platform on the
            backend.
          </p>
          <p>
            Migrated legacy admin/employee dashboard to a heavily improved user
            interface and released the internal app to over 300 Banking Team
            members.
          </p>
          <p>
            Implemented frontend end-to-end integration (account and product
            creation) automating banking manual processes to save employees ~25
            minutes per application.
          </p>
        </Experience>
        <Experience
          logoSrc={mlh}
          company="Major League Hacking (MLH)"
          link="https://fellowship.mlh.io/"
          blurb="The MLH Fellowship is a 12 week internship alternative for aspiring software engineers. Instead of interning at a single company, on the Open Source Track you'll contribute to the type of Open Source projects that every company depends on."
          position="Software Engineering Intern (MLH Fellow)"
          start="Sept 2020"
          location="Vancouver, BC"
          end="Dec 2020"
          skills={[
            "Javascript",
            "React Native",
            "Jest",
            "Node.js",
            "Husky CI/CD",
          ]}
        >
          <p>
            One of under 200 developers selected out of an application pool of
            ~10,000 people to contribute to React Native
          </p>
          <p>
            Planned, engineered, and documented a git workflow for tutorials
            using Husky, and built an internal cli using node.js. Set up a
            mobile app infrastructure using React Navigation, Jest, and the
            React Native Testing Library
          </p>
        </Experience>
        <Experience
          logoSrc={ubcuas}
          company="UBC UAS Engineering Design Team"
          link="https://www.ubcuas.com/"
          blurb="The University of British Columbia Unmanned Aircraft Systems engineering student team (UBC UAS) is a multidisciplinary group of students spanning multiple faculties, including Engineering, Forestry, Science and Business, and competes in competitions revolving around drones."
          position="Software Developer"
          start="Sept 2019"
          location="Vancouver, BC"
          end="Present"
          skills={["React", "Python", "Flask", "C++", "Docker", "Linux"]}
        >
          <p>
            Tasked with implementing elements of the ground control software
            suite for our team's unmanned aircrafts.
          </p>
          <p>
            Wrote a REST api for the onboard flight software responsible for
            communicating with the aircraft, such as obtaining telemetry data or
            rerouting the aircraft's path for the intent of obstacle avoidance.
            Gained value experience working with other developers on a project.
          </p>
        </Experience>
        {/* <Experience
          logoSrc={launchpad}
          company="UBC Launchpad"
          link="https://www.ubclaunchpad.com/"
          blurb="UBC Launch Pad is a software engineering design team devoted to building software projects in a collaborative and professional environment."
          position="Developer"
          start="Sept 2019"
          location="Vancouver, BC"
          end="Sept 2020"
          skills={["Javascript", "Node.js", "Docker", "React.js"]}
        >
          <p>
            Practiced agile development with a full team of strategists, UI/UX
            designers and other developer. Created a realtime leetcode player vs
            player web app with Node.js, React, Redux, and web sockets.
          </p>
          <p>
            Currently working on an app utilizing a 3d pose machine vision model
            to aid with affordable and accessible physiotherapy.
          </p>
        </Experience> */}
        <Experience
          logoSrc={bitbox}
          company="Bitbox Design"
          link="https://bitboxdesign.ca"
          blurb="Bitbox Design is a digital agency offering a wide variety of services ranging from digital marketing, website development and brand identity."
          position="Founder"
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
          <p>
            Currently managing all aspects of the agency: client acquisition,
            sales, marketing, and developing PHP Wordpress sites for businesses.
            Also in charge of marketing strategy for clients.
          </p>{" "}
          <p>
            Gained experience with time managing strict deadlines, general
            problem solving and client communication.
          </p>
        </Experience>
      </Row>
    </Container>
  </section>
)

export default Experiences
