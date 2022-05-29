import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./drawingsPage.css"
import { useState, useEffect } from "react";


export default function DrawingsPage() {
    const apiUrl = 'https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=IGQVJXd0c1UExGWDdWLURITVRvY2cwLWgyQWtDQzRmMDlLekFJWVg1cDYyM3VlSkZALeFYtSjU3VlBpM1BtT0l5dXpKRUJXcFFyRGt6Q3psV1BkamtGemNUSTN0ei13R290UWVQODJNdGxQOGpVVFJxTAZDZD'
    const [posts, setPosts] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(apiUrl).then((response) => {
                if (response) {
                    setPosts(response.data.data);
                    console.log("coucou")
                }
            });
        }, 39080000)
        return () => clearInterval(interval);

    }, []);

    return (<div>
        <Container>
            <Row>
                {posts?.map(function (post, index) {
                    return <Col className="drawings" key={index}><a target="blank" href="https://www.instagram.com/camillelitdeslivres/"><img className="drawings" src={post.media_url} alt="instagram" /></a></Col>
                })}
            </Row>
        </Container>
        <h4 className="drawings">While I'm working with the Instagram, I leave you with my Instagram link</h4>
        <a target="blank" href="https://www.instagram.com/camillelitdeslivres/" className="instaButton button">Instagram</a>
    </div>)
}
