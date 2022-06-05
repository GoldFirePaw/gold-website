import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./drawingsPage.css"
import { useState, useEffect } from "react";


export default function DrawingsPage() {
    const apiUrl = 'https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=IGQVJXd0c1UExGWDdWLURITVRvY2cwLWgyQWtDQzRmMDlLekFJWVg1cDYyM3VlSkZALeFYtSjU3VlBpM1BtT0l5dXpKRUJXcFFyRGt6Q3psV1BkamtGemNUSTN0ei13R290UWVQODJNdGxQOGpVVFJxTAZDZD'
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            if (response) {
                setPosts(response.data.data);
                console.log(posts[0].permalink)
            }
        });
    }, []);

    return (<div className='drawings'>
        <a target="blank" href="https://www.instagram.com/camillelitdeslivres/" className="instaButton button">Instagram</a>

        <Container>
            <Row>
                {posts?.map(function (post, index) {
                    return <Col className="drawings" key={index}><a target="blank" href="https://www.instagram.com/camillelitdeslivres/"><img className="drawings" src={post.media_url} alt="instagram" /></a></Col>
                })}
            </Row>
        </Container>
        {!posts ? <h4 className="drawings">Loading</h4> : null}
    </div>)
}
