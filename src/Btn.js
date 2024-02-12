
function Btn(){
    const addFunction  = () => {
        console.log("Mouse Over")
    }
  
    return (
        <button onMouseOver={addFunction}>Click Me</button>
    )
}
export default Btn;