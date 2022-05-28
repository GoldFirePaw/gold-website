import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem } from "react-foundation";
import "./menuBar.css";

export default function MenuBar(props) {
  let projectsPage = props.projectsPage
  let contactButton = props.contactButton
  let aboutPage = props.aboutPage

  function handleClickHome() {
    props.setContactButton(false)
    props.changeProjectsPage(false)
    props.setAboutPage(false)
  }

  function handleClickAbout() {
    if (aboutPage === false) {
      console.log("coucou")
      props.setAboutPage(true)
      props.setContactButton(false)
      props.changeProjectsPage(false)
    }
    else if (aboutPage === true) {
      props.setAboutPage(false)
    }
  }

  function handleClickContact() {
    if (contactButton === false) {
      props.setContactButton(true)
      props.changeProjectsPage(false)
      props.setAboutPage(false)
    }
    else if (contactButton === true) {
      props.setContactButton(false)
    }
  }

  function handleClickProjects() {
    if (projectsPage === false) {
      props.changeProjectsPage(true)
      props.setContactButton(false)
      props.setAboutPage(false)
    }
    else if (projectsPage === true) {
      props.changeProjectsPage(false)
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
          <button type="button" className="menuItem">🎨 Drawings</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickProjects} className="menuItem">💻 Projects</button>
        </MenuItem>
        <MenuItem>
          <button type="button" className="menuItem">🎮 Stream</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClickContact} className="menuItem">📮 Contact</button>
        </MenuItem>
      </Menu>
    </div>);
}
