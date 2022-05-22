import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem } from "react-foundation";
import "./menuBar.css";

export default function MenuBar() {
  return (
    <div className="menuBar menu-basics-example">
      <Menu>
        <MenuItem>
          <a className="menuItem">🏠 Home</a>
        </MenuItem>
        <MenuItem>
          <a className="menuItem">📄 About</a>
        </MenuItem>
        <MenuItem>
          <a className="menuItem">🎨 Drawings</a>
        </MenuItem>
        <MenuItem>
          <a className="menuItem">💻 Projects</a>
        </MenuItem>
        <MenuItem>
          <a className="menuItem">🎮 Stream</a>
        </MenuItem>
        <MenuItem>
          <a className="menuItem">📮 Contact</a>
        </MenuItem>
      </Menu>
    </div>);
}
