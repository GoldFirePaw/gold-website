import "./App.css";
import "./index.css";
import "foundation-sites/dist/css/foundation.min.css";
import MenuBar from "./menuBar";
import ContactButton from "./contactButton";
import SocialMedia from "./socialMedia";
import Banner from "./BannerImage";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <Banner />
        <h1 className="headerName">GoldFirePaw</h1>
        <p className="headerText">
          Hello, I am Camille. I am a front-end developper.
        </p>
      </header>
      <ContactButton />
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
