import "./aboutPage.css"


export default function AboutPage() {
    return (
        <main className="about">
            <h3 className="about">About me</h3>
            <article className="about"><p className="about">I'm a school teacher. I'm a self taught front-end developper.</p>

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
                <h4 className="about">Techs I want to learn </h4>
                <div className="about">
                    <i className="about fa-brands fa-vuejs"></i>
                </div>
            </article>
        </main>
    )
}