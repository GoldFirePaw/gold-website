import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem } from "react-foundation";
import "./menuBar.css";
import ContactButton from "./contactButton";


export default function MenuBar() {

  function handleClick(ContactButton) {
    return (
      <ContactButton />);
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
          <button type="button" className="menuItem">💻 Projects</button>
        </MenuItem>
        <MenuItem>
          <button type="button" className="menuItem">🎮 Stream</button>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={handleClick} className="menuItem">📮 Contact</button>
        </MenuItem>
      </Menu>
    </div>);
}
