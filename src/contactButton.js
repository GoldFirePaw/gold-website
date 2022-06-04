import "foundation-sites/dist/css/foundation.min.css";
import "./contactButton.css"

export default function ContactButton() {
    return (
        <div className="contact">
            <a href="mailto:camilleflajollet@gmail.com" className="contactButton button">Contact me by mail</a>
            <a href="https://www.linkedin.com/in/camille-f-b48a79190/" className="contactButton button">Linkedin</a>
        </div>

    )

}