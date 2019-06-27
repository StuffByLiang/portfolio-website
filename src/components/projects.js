import React from "react"

// images
import stockgame_image from "../images/stockgame.png"
import tetris_image from "../images/tetris.png"
import ubc_image from "../images/ubc.png"
import game_image from "../images/game.png"
import old_image from "../images/old.jpg"
import this_image from "../images/this.jpg"



import {Container, Row, Col} from 'react-bootstrap'
// import { FiCode, FiTerminal } from "react-icons/fi";
// import { MdComputer } from "react-icons/md";
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

class Project extends React.Component {
  render () {
    let {imageSrc, title, description, skills, link, github} = this.props;
    return (
      <Col className="project-container" md={12}>
        <div class="project-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
        <div class="project-background"></div>
        <div class="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div class="project-skills">
            {skills.map(skill => (<span class="project-skill">{skill}</span>))}
          </div>
          <div class="project-links">
          {link != null && //if exists
            <a href={link} rel="noopener noreferrer" target="_blank" class="project-link">Visit Project <GoLinkExternal /></a>
          }
          {github != null && //if exists
            <a href={github} rel="noopener noreferrer" target="_blank" class="project-link secondary"><GoMarkGithub /> Github</a>
          }
          </div>
        </div>
      </Col>
    )}
}

const Projects = () => (
  <section id="projects" class="projects pt-0">
    <Container>
      <Row>
        <Col className="text-center">
          <h2>My Projects</h2>
          <p class="mb-5">I have experience with brainstorming, developing, and deploying applications. Here are some of them!</p>
        </Col>
        <Project
          imageSrc={tetris_image}
          title="Online Tetris Multiplayer"
          description="A full-fledged real-time multiplayer tetris game written in javascript using node.js and socket.io, fully implemented with all standard competitive Tetris rules. Fully programmed from scratch from graphics to game logic!"
          skills={[
            'HTML5 Canvas',
            'Javascript',
            'Socket.io',
            'Node.js',
            'Express'
          ]}
          link="http://tetris.stuffbyliang.com"
          github="https://github.com/StuffByLiang/tetris-online"
        />
       <Project
         imageSrc={stockgame_image}
         title="Stockgame.ca"
         description="A full-blown stock and cryptocurrency market simulator. Currently has 200+ users with over 2000+ transactions. Supports many features such as loans, buying, selling, rankings, and transaction history. Made mainly with PHP and MySQL as the database.<br><br>Data provided by IEX cloud and Cryptocompare."
         skills={[
           'PHP',
           'MySQL',
           'HTML5',
           'CSS',
           'jQuery',
           'AJAX',
           'Node.js'
         ]}
         link="https://stockgame.ca"
         // github="https://github.com/StuffByLiang/tetris-online"
       />
       <Project
         imageSrc={ubc_image}
         title="UBC Course Registration Helper App"
         description="Frustrated that UBC's Course search is horrendous and inconvenient? Need to view all course data in one page rather than clicking? This app can help. Made by scraping UBC's website. Built because UBC's course search sucks.<br><br>Used over 5500 times by 400+ people and saved countless of hours. (This gave me back the 3 hours it took to code this)"
         skills={[
           'Node.js',
           'Express',
           'Web Scraping',
           'Javascript'
         ]}
         link="http://ubc.stuffbyliang.com"
         github="https://github.com/StuffByLiang/UBC-Course-Registration-Helper"
       />
       <Project
         imageSrc={game_image}
         title="Node.js MOBA Game"
         description="A real-time online multiplayer game inspired by MOBA games such as League Of Legends. Game includes support for many players, two teams, and customizable abilities. Play it with your friends, it's pretty fun - for a couple of minutes."
         skills={[
           'Node.js',
           'Express',
           'Socket.io',
           'Phaser 3',
           'Javascript',
         ]}
         link="http://game.stuffbyliang.com"
         github="https://github.com/StuffByLiang/node_game"
       />
       <Project
         imageSrc={this_image}
         title="This Site!"
         description="Responsive website built with ReactJS. Readible code and modern design. Easily mantainable (and good lookin')"
         skills={[
           'React',
           'Gatsby',
           'Node.js',
           'Javascript',
           'HTML5',
           'CSS3'
         ]}
         link="https://old.stuffbyliang.com"
       />
       <Project
         imageSrc={old_image}
         title="Old Stuffbyliang"
         description="My old portfolio site made in 2015. Rip 2019 :("
         skills={[
           'HTML5',
           'CSS3',
           'jQuery',
           'Javascript'
         ]}
         link="https://old.stuffbyliang.com"
       />
      </Row>
    </Container>
  </section>
)

export default Projects
