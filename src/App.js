import "./App.css";
import "./index.css";
import "foundation-sites/dist/css/foundation.min.css";
import { Menu, MenuItem, Link, Button, Colors } from "react-foundation";
import MenuBar from "./menuBar";
import image from "./images/Twitch-banner.png";
import ContactButton from "./contactButton";
import SocialMedia from "./socialMedia";

function App() {
  let helloWorld: string = "Hello World";
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <img src={image} alt="Banner" />
        <h1 className="headerName">GoldFirePaw</h1>
        <p className="headerText">
          Hello, I am Camille. I am a front-end developper.
        </p>
      </header>
      <ContactButton />
      <SocialMedia />
    </div>
  );
}
<script src="js/jquery.min.js"></script>;
<script src="js/foundation.min.js"></script>;

export default App;
