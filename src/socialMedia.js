import "./socialMedia.css";
import { Grid, Cell } from "react-foundation";

export default function SocialMedia() {
    return (
        <div>
            <div className="socialMedia">
                <h3 className="socialMedia">Social medias</h3>
            </div>

            <div className="socialMedia grid-basics-example">
                <Grid className="socialMediaGrid display">
                    <Cell className="socialMediaCol" small={4}><a target="blank" className="socialMediaLink" href="https://twitter.com/GoldFirePaw"><i class="fa-brands fa-twitter-square"></i></a></Cell>
                    <Cell className="socialMediaCol" small={4}><a target="blank" className="socialMediaLink" href="https://www.instagram.com/camillelitdeslivres/"><i class="fa-brands fa-instagram-square"></i></a></Cell>
                    <Cell className="socialMediaCol" small={4}><a target="blank" className="socialMediaLink" href="https://www.twitch.tv/goldfirepaw"><i class="fa-brands fa-twitch"></i></a></Cell>
                </Grid>
            </div>
        </div >

    )
}