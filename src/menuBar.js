import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem } from "react-foundation";
import "./menuBar.css";

export default function MenuBar(props) {
  let projectsPage = props.projectsPage
  let contactButton = props.contactButton

  function handleClickContact(setContactButton) {
    if (contactButton === false) {
      props.setContactButton(true)
      props.changeProjectsPage(false)

    }
    else if (contactButton === true) {
      props.setContactButton(false)
    }
  }

  function handleClickProjects(changeProjectsPage) {

    if (projectsPage === false) {
      props.changeProjectsPage(true)
      props.setContactButton(false)

    }
    else if (projectsPage === true) {
      props.changeProjectsPage(false)
    }

  }

  return (
    <div className="menuBar menu-basics-example">
      <Menu>
        <MenuItem>
          <button type="button" className="menuItem">🏠 Home</button>
        </MenuItem>
        <MenuItem>
          <button type="button" className="menuItem">📄 About</button>
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
