import "./App.css";
import "./index.css";
import "foundation-sites/dist/css/foundation.min.css";
import MenuBar from "./menuBar";
import ContactButton from "./contactButton";
import SocialMedia from "./socialMedia";
import Banner from "./BannerImage";
import { useState } from "react";
import ProjectsPage from "./projectsPage";
import AboutPage from "./aboutPage";
import DrawingsPage from "./drawingsPage";
import StreamPage from "./streamPage";

function App() {
  const [contactButton, setContactButton] = useState(false);
  const [projectsPage, setProjectsPage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [drawingsPage, setDrawingsPage] = useState(false);
  const [streamPage, setStreamPage] = useState(false);

  return (
    <div className="App">
      <MenuBar
        changeProjectsPage={setProjectsPage}
        projectsPage={projectsPage}
        setContactButton={setContactButton}
        contactButton={contactButton}
        setAboutPage={setAboutPage}
        aboutPage={aboutPage}
        setDrawingsPage={setDrawingsPage}
        drawingsPage={drawingsPage}
        setStreamPage={setStreamPage}
        streamPage={streamPage}
      />
      <header className="App-header">
        <Banner />
        <h1 className="headerName">GoldFirePaw</h1>
        <p className="headerText">
          Hello, I am Camille. I am a front-end developper.
        </p>
      </header>
      {projectsPage ? <ProjectsPage /> : null}
      {contactButton ? <ContactButton /> : null}
      {aboutPage ? <AboutPage /> : null}
      {drawingsPage ? <DrawingsPage /> : null}
      {streamPage ? <StreamPage /> : null}

      <SocialMedia />
      <p>
        Banner by {""}
        <a
          className="bottomLink"
          href="https://www.etsy.com/fr/shop/PastelSaga"
        >
          PastelSaga
        </a>
        <br />
        Created by {""}
        <a className="bottomLink" href="https://github.com/GoldFirePaw">
          GoldFirePaw
        </a>
      </p>
    </div>
  );
}
<script src="js/jquery.min.js"></script>;
<script src="js/foundation.min.js"></script>;

export default App;
