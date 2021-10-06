import { Link } from "react-router-dom";
import './Main.css'
import './Flipcard.css'

function Main() {
  return (
    <div id="wrapper">
      <WorkCard/>
      <PersonalCard/>
      <ProjectsCard/>
      <ContactsCard/>
    </div>
  );
}

function WorkCard() {
  return(
    <Link className="work" to="/experience">
      <div>
        <img/>
        <h3>Work & School</h3>
      </div>
    </Link>
  )
}

function PersonalCard() {
  return(
    <Link className="personal" to="/personal">
      <div>
        <img/>
        <h3>Personal Info</h3>
      </div>
    </Link>
  )
}

function ProjectsCard() {
  return(
    <Link className="projects" to="/projects">
      <div>
        <img/>
        <h3>References</h3>
      </div>
    </Link>
  )
}

function ContactsCard() {
  return(
    <div class='contacts' id='flipcard'>
      <div id='inner-card'>
        <div id='front-card'>
          <div id='contactsicon'>
            <img src='img/contacts.png' alt='Contacts icon'/>
            <h3>Contact Info</h3>
          </div>
        </div>
        <div id='back-card'>
          <div>
            <img class='logo'src='img/logo.png' alt='Logo'/>
            <h1>Contacts</h1>
            <ul>
              <li>
                <a href='mailto:viniciuslnavarra@outlook.com'>E-Mail</a>
              </li>
              <li>
                <a href='https://www.github.com/ViniciusLNavarra' target='_blank'>GitHub Account</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/vinicíus-leonárdo-navarra' target='_blank'>LinkedIn Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;