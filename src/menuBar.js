import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem } from "react-foundation";
import "./menuBar.css";

export default function MenuBar() {
  return (
    <div className="menuBar menu-basics-example">
      <Menu>
        <MenuItem>
          <a href="#" className="menuItem">🏠 Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="menuItem">📄 About</a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="menuItem">🎨 Drawings</a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="menuItem">💻 Projects</a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="menuItem">🎮 Stream</a>
        </MenuItem>
        <MenuItem>
          <a href="#" className="menuItem">📮 Contact</a>
        </MenuItem>
      </Menu>
    </div>);
}
