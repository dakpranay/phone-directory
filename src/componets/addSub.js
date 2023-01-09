import {Link} from "react-router-dom";
import { useState } from "react";
import Header  from "../commom/header";
import Button from "../commom/button";
import AddSubBody from "./addSubBoby";
function AddSub(){
    return(
        <div >
            <Header header="Add Subuscriber"></Header>
            <div className="body">
             <Link to="/"><Button text="Back"></Button></Link>     
            <AddSubBody></AddSubBody>
            
            </div>   
        </div>
    )
}
export default AddSub;