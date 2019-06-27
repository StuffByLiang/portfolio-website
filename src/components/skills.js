import React from "react"

import {Container, Row, Col} from 'react-bootstrap'
import { FiCode, FiTerminal } from "react-icons/fi";
import { MdComputer } from "react-icons/md";

const Skill = ({icon, title, description, title2, list}) => (
  <Col className="skill-container" md={4}>
    {icon}
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>{title2}</h3>
    <ul>
      {list.map(item => (<li>{item}</li>))}
    </ul>
  </Col>
)

const Skills = () => (
  <section class="skills">
    <Container>
      <Row>
        <Skill
          icon={<MdComputer size={60} />}
          title="Frontend Developer"
          description="I value creating and polishing the part of the web that people can visually see and interact with with responsive, modern, and minimalistic design!"
          title2="Tecnologies I've Worked With"
          list={[
            "HTML5",
            "CSS",
            "Javascript",
            "Sass",
            "JQuery",
            "React",
            "Bootstrap",
            "Wordpress",
            "Responsive Design"
          ]}
        />
        <Skill
          icon={<FiCode size={60} />}
          title="Backend Developer"
          description="I love creating and coding the part of the web that people cannot see: servers, databases, and the language that communicates between them."
          title2="My Arsenal"
          list={[
            "PHP",
            "MySQL",
            "Node.js",
            "Python",
            "Java",
            "C++",
            "Git",
            "Nginx",
            "Linux Server Administration"
          ]}
        />
        <Skill
          icon={<FiTerminal size={60} />}
          title="Mentor & Entrepreneur"
          description="I like creating innovative products & solutions, believe in spreading the knowledge I have gained, and love helping people become their ideal self!"
          title2="My Beliefs"
          list={[
            "Curiousity",
            "Innovation",
            "Empathy",
            "Optimism",
            "Perserverence",
            "Determination",
            "Self-reflection",
            "Giving Back",
            "Providing Oppurtunities"
          ]}
        />
      </Row>
    </Container>
  </section>
)

export default Skills
