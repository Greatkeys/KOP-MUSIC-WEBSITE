import "./song.css"
import keyboardImg from "../../../src/keyboard.jpg"
import { RiMenu3Line, RiCloseLine, RiCornerRightUpFill } from "react-icons/ri"
import { Link } from "react-router-dom"
const viewSongs = "View Songs"
function Song(){
    return (
        <div className="song-section">
            <div className="song-section-title">
                <h1>Collection of Songs</h1>
                <div className="horizontal-underline"></div>
            </div>
            {/* start of song */}
            <div className="wrapper-div-for-songs">
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Worship Songs</h3>
                    <Link to="/worship">
                        <button className="song-btn">{viewSongs}<RiCornerRightUpFill /> </button>
                    </Link>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Hymns</h3>
                    <button className="song-btn">{viewSongs}<RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Gospel Chants</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Praise Songs</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Gospel Raggae</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Country Music</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Christian Rock</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Hiphop</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Afro Music</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
                <div className="song-container">
                    <img src={keyboardImg} />
                    <h3 className="song-title">Jazz Songs</h3>
                    <button className="song-btn">{viewSongs} <RiCornerRightUpFill /></button>
                </div>
            </div>
            {/* end of song */}
        </div>
    )
}
export default Song