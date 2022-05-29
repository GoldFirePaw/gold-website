import ProjetCalc from "./images/ProjetCalc.png"
import ProjetDico from "./images/ProjetDico.png"
import ProjetMeteo from "./images/ProjetMeteo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import "./projectsPage.css"



export default function ProjectsPage() {
    return (
        <main className="projets container">
            <Container>
                <Row>
                    <Col>
                        <img className="projects" src={ProjetCalc} alt="ProjetCalc" />
                    </Col>
                    <Col>
                        <article className="projects">
                            <h4 className="projects">May 2022 :</h4>
                            <br />
                            In this project I tried many ways to use grids. Next I'll add a switch to change the theme.
                            <a target="blank" href="https://incandescent-phoenix-b705b8.netlify.app/"> <button className="projects button" type="button">Calc project</button> </a>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <article className="projects">
                            <h4 className="projects">March 2022 :</h4>
                            <br />
                            In this project I did with SheCodes I learned how to use a weather API.
                            <a target="blank" href="https://dainty-dasik-625b16.netlify.app/"><button className="projects button" type="button">Weather project</button></a>
                        </article>
                    </Col>
                    <Col>
                        <img className="projects" src={ProjetMeteo} alt="ProjetMeteo" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className="projects" src={ProjetDico} alt="ProjetDico" />
                    </Col>
                    <Col>
                        <article className="projects">
                            <h4 className="projects">March 2022 :</h4>
                            <br />
                            In this project I did with SheCodes I learned how to use a dictionary and images API.
                            <a target="blank" href="https://euphonious-flan-0c4888.netlify.app/"><button className="projects button" type="button">Dico project</button></a>
                        </article>
                    </Col>
                </Row>
            </Container>
        </main>

    )
}