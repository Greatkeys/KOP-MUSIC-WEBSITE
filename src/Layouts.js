import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
function Layouts(){
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>    
        </>
        
    )
}
export default Layouts