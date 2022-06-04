import "./aboutPage.css"
import certif1 from "./images/certif1.png"
import certif2 from "./images/certif2.png"
import certif3 from "./images/certif3.png"
import certif4 from "./images/certif4.png"




export default function AboutPage() {
    return (
        <main className="about">
            <h3 className="about">About me</h3>
            <article className="about"><p className="about">I'm a school teacher and a self taught front-end developper. I learned with SheCodes and OpenClassroom.</p>

                <h4 className="about">My hobbies</h4>
                <p className="about">I love music, I sing and play guitar. I have three cats, Thor, Loki and Hela. I enjoy reading, watching movies and series. And I also love playing video games.<br />
                    Actually, I often stream on Twitch when I play, when I code or when I prepare for my class day.</p>
                <h4 className="about">Techs I love and use </h4>
                <div className="about">
                    <i className="about fa-brands fa-html5"></i>
                    <i className="about fa-brands fa-css3"></i>
                    <i className="about fa-brands fa-bootstrap"></i>
                    <i className="about fa-brands fa-js-square"></i>
                    <i className="about fa-brands fa-react"></i>
                </div>
                <h4 className="about">My certificates</h4>
            </article>
            <div className="container about">
                <div className="row about">
                    <div className="col about"><a target="blank" href="https://www.shecodes.io/students/572-camille-flajollet"><img className="about" src={certif1} alt="certificate" /></a></div>
                    <div className="col about"><a target="blank" href="https://www.shecodes.io/students/573-camille-fljt"><img className="about" src={certif2} alt="certificate" /></a></div>
                </div>
                <div className="row about">
                    <div className="col about"><a target="blank" href="https://www.shecodes.io/students/582-camille-fljt"><img className="about" src={certif3} alt="certificate" /></a></div>
                    <div className="col about"><a target="blank" href="https://www.shecodes.io/students/620-camille-fljt"><img className="about" src={certif4} alt="certificate" /></a></div>
                </div>
            </div>
        </main>
    )
}