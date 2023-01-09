import {Link} from "react-router-dom";
import "./body.css";
import Button from "../commom/button";
function Body(){
    return(
        <div>
            <div className="body">
               <Link to="/add"><Button text="Add"></Button></Link>
                
            <div className="namebody">
                <span className="Name">Name</span>
                <span className="Phone">Phone</span>
            </div>
            </div>
        </div>
      
           
    )
}
export default Body;