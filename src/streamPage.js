import ReactPlayer from "react-player"
import "./streamPage.css"

export default function StreamPage() {
    return (
        <main className="stream">
            <div>
                <ReactPlayer
                    url="https://www.twitch.tv/goldfirepaw"
                    controls
                />
            </div>
        </main>)
}