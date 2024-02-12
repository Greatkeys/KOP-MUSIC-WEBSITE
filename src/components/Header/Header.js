import './header.css';
import Navbar from '../Navbar/Navbar';
import { RiMenu3Line, RiCloseLine, RiCornerRightUpFill } from "react-icons/ri"

function Header(){
  return (
    <div className='wrapper-div'>
      <Navbar />
        <div className='showcase'>
            <h1 className='showcase-text scale-up-center'>WELCOME!!! <br />MUSIC LOVERS</h1>
            <p>Have you been searching for a site where you can easily score and get all the components of a song easily? Or have you been desirous of growing musically? You're at the perfect place friends</p>
            <button className='btn' title='See more of our contents'>Explore More<RiCornerRightUpFill /> </button>
        </div>
    </div>
  )
}

export default Header