import { Link } from "react-router-dom"
import WorshipCollection from "../components/WorshipCollection/WorshipCollection"

function Worship(){
    return(
        <>
            <WorshipCollection />
        This is worship page
        <Link to="/">Home</Link>
        </>
    )
}
export default Worship