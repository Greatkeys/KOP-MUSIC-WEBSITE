import "./WorshipCollection.css"
import {RiMenuSearchLine} from "react-icons/ri"
function WorshipCollection(){
    return(
        <div className="worshipCollection">
            <div className="worshipCollection-title">
                <h2>Worship Songs</h2>
                <div className="horizontal-underline"></div>
            </div>
            <div className="search">
                <div className="search-div">
                    <input type="Search" placeholder="Search Song Title" /><RiMenuSearchLine/>
                </div>
                <div className="search-div">
                    <input type="Search" placeholder="Search Author"/><RiMenuSearchLine/>
                </div>
            </div>
            <div className="worship-song-wrapper">
                <div className="worship-song-container">
                    <h1 className="worship-song-title"> You are God</h1>
                    <p className="worship-song-artist">Artist: <span>Nathaniel Bassay</span></p>
                    <button>View Breakdown</button>
                </div>
                <div className="worship-song-container">
                    <h1 className="worship-song-title"> You are God</h1>
                    <p className="worship-song-artist">Artist: <span>Nathaniel Bassay</span></p>
                    <button>View Breakdown</button>
                </div>
                <div className="worship-song-container">
                    <h1 className="worship-song-title"> You are God</h1>
                    <p className="worship-song-artist">Artist: <span>Nathaniel Bassay</span></p>
                    <button>View Breakdown</button>
                </div>
            </div>
        </div>
    )
}
export default WorshipCollection