import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem } from "react-foundation";
import "./menuBar.css";

export default function MenuBar(props) {
  let projectsPage = props.projectsPage
  let contactButton = props.contactButton
  let aboutPage = props.aboutPage
  let drawingsPage = props.drawingsPage
  let streamPage = props.streamPage


  function handleClickHome() {
    props.setContactButton(false)
    props.changeProjectsPage(false)
    props.setAboutPage(false)
    props.changeDrawingsPage(false)
    props.setStreamPage(false)
  }

  function handleClickAbout() {
    if (aboutPage === false) {
      props.setAboutPage(true)
      props.setContactButton(false)
      props.changeProjectsPage(false)
      props.changeDrawingsPage(false)
      props.setStreamPage(false)
    }
    else if (aboutPage === true) {
      props.setAboutPage(false)
    }
  }

  function handleClickDrawings() {
    if (drawingsPage === false) {
      props.setDrawingsPage(true)
      props.setContactButton(false)
      props.setAboutPage(false)
      props.changeProjectsPage(false)
      props.setStreamPage(false)
    }
    else if (drawingsPage === true) {
      props.changeDrawingsPage(false)
    }
  }

  function handleClickProjects() {
    if (projectsPage === false) {
      props.changeProjectsPage(true)
      props.setContactButton(false)
      props.setAboutPage(false)
      props.changeDrawingsPage(false)
      props.setStreamPage(false)
    }
    else if (projectsPage === true) {
      props.changeProjectsPage(false)
    }
  }

  function handleClickStreams() {
    if (streamPage === false) {
      props.setStreamPage(true)
      props.changeProjectsPage(false)
      props.setContactButton(false)
      props.setAboutPage(false)
      props.changeDrawingsPage(false)
    }
    else if (streamPage === true) {
      props.setStreamPage(false)
    }
  }

  function handleClickContact() {
    if (contactButton === false) {
      props.setContactButton(true)
      props.changeProjectsPage(false)
      props.setAboutPage(false)
      props.setStreamPage(false)
      props.changeDrawingsPage(false)
    }
    else if (contactButton === true) {
      props.setContactButton(false)
    }
  }

  return (
    <div className="menuBar menu-basics-example">
      <Menu>
        <MenuItem>
          <button type="button" onClick={handleClickHome} className="menuItem">🏠 Home</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickAbout} className="menuItem">📄 About</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickDrawings} className="menuItem">🎨 Drawings</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickProjects} className="menuItem">💻 Projects</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickStreams} className="menuItem">🎮 Stream</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickContact} className="menuItem">📮 Contact</button>
        </MenuItem>
      </Menu>
    </div>);
}
