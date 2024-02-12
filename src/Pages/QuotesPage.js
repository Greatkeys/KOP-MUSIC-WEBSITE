import Quotes from "../components/Quotes/Quotes"
import { Link } from "react-router-dom"
function QuotesPage(){
    return(
        <>
            <Quotes />
        This is Quote page
        <Link to="/">Home</Link>
        </>
    )
}
export default QuotesPage