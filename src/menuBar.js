import "./menuBar.css";
import { useState, useEffect } from "react";

export default function MenuBar(props) {

  let [displayMenu, setDisplayMenu] = useState(false);
  let [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  let projectsPage = props.projectsPage
  let contactButton = props.contactButton
  let aboutPage = props.aboutPage
  let drawingsPage = props.drawingsPage
  let streamPage = props.streamPage

  function handleClickHome() {
    props.setContactButton(false)
    props.setProjectsPage(false)
    props.setAboutPage(false)
    props.setDrawingsPage(false)
    props.setStreamPage(false)
  }

  function handleClickAbout() {
    if (aboutPage === false) {
      props.setAboutPage(true)
      props.setContactButton(false)
      props.setProjectsPage(false)
      props.setDrawingsPage(false)
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
      props.setProjectsPage(false)
      props.setStreamPage(false)
    }
    else if (drawingsPage === true) {
      props.setDrawingsPage(false)
    }
  }

  function handleClickProjects() {
    if (projectsPage === false) {
      props.setProjectsPage(true)
      props.setContactButton(false)
      props.setAboutPage(false)
      props.setDrawingsPage(false)
      props.setStreamPage(false)
    }
    else if (projectsPage === true) {
      props.setProjectsPage(false)
    }
  }

  function handleClickStreams() {
    if (streamPage === false) {
      props.setStreamPage(true)
      props.setProjectsPage(false)
      props.setContactButton(false)
      props.setAboutPage(false)
      props.setDrawingsPage(false)
    }
    else if (streamPage === true) {
      props.setStreamPage(false)
    }
  }

  function handleClickContact() {
    if (contactButton === false) {
      props.setContactButton(true)
      props.setProjectsPage(false)
      props.setAboutPage(false)
      props.setStreamPage(false)
      props.setDrawingsPage(false)
    }
    else if (contactButton === true) {
      props.setContactButton(false)
    }
  }

  function handleBurgerClick() {
    setDisplayMenu(!displayMenu)

  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  return (
    <main className="menuBar menu-basics-example">
      <button className="burgerbtn" type="button" onClick={handleBurgerClick}>
        <i class="fa-solid fa-burger"></i>
      </button>
      {((isMobile && displayMenu) || !isMobile) && <ul>
        <li><button type="button" onClick={handleClickHome} className="menuItem">🏠 Home</button></li>
        <li><button type="button" onClick={handleClickAbout} className="menuItem">📄 About</button></li>
        <li><button type="button" onClick={handleClickDrawings} className="menuItem">🎨 Instagram feed</button></li>
        <li><button type="button" onClick={handleClickProjects} className="menuItem">💻 Projects</button></li>
        <li><button type="button" onClick={handleClickStreams} className="menuItem">🎮 Stream</button></li>
        <li><button type="button" onClick={handleClickContact} className="menuItem">📮 Contact</button></li>
      </ul>}
    </main>);
}
