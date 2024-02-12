import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Worship from './Pages/worship';
import Layouts from './Layouts';
import QuotesPage from './Pages/QuotesPage';
function App(){
  return (
    <Router>
      <Routes>
        <Route element={<Layouts />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/worship' element={<Worship />} />
        <Route path='/Quotes' element={<QuotesPage />} />
      </Routes>
    </Router>
  )
}
export default App;























// const appStyles = {
//   padding: "20px",
//   backgroundColor: "red",
//   color: "white",
// }
// function Heading(){
//   let title =  "Hello World";
//   return (
//       <h2>{title}</h2>
//   )
// }
// function App(props) {
//   return (
//     <div style={{backgroundColor: "red", color: "white", padding: "20px" }}>
//       <h3 style={{fontSize: "1.5rem", wordSpacing: "1px"}}>{props.title}</h3>
//       <h4>{"Hel" + "lo"}</h4>
//     </div>
//   );
// }

