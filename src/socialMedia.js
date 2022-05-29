import "./socialMedia.css";
import { Grid, Cell } from "react-foundation";

export default function SocialMedia() {
    return (
        <main className="socialMedia">
            <div className="socialMedia">
                <h3 className="socialMedia">Social medias</h3>
            </div>

            <div className="socialMedia grid-basics-example">
                <Grid className="socialMediaGrid display">
                    <Cell className="socialMediaCol" small={4}><a target="blank" className="socialMediaLink" href="https://twitter.com/GoldFirePaw"><i className="fa-brands fa-twitter-square"></i></a></Cell>
                    <Cell className="socialMediaCol" small={4}><a target="blank" className="socialMediaLink" href="https://www.instagram.com/camillelitdeslivres/"><i className="fa-brands fa-instagram-square"></i></a></Cell>
                    <Cell className="socialMediaCol" small={4}><a target="blank" className="socialMediaLink" href="https://www.twitch.tv/goldfirepaw"><i className="fa-brands fa-twitch"></i></a></Cell>
                </Grid>
            </div>
        </main >

    )
}