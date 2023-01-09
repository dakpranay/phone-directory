import "./addSubBody.css";
import Button from "../commom/button";
import { useState } from "react";
function AddSubBody() {

    const[name,setName]=useState("");
    const[number,setNumber]=useState("");

   function handlerSubmit(e){
        e.preventDefault()
        alert("form Submitted");
    }

    function handleChangeName(e){
       setName(e.target.value);
    }

    function handleChangeNumber(e){
        setNumber(e.target.value);
     }


    return(
        <div>
            <form onSubmit={handlerSubmit}>
            <label className="label" htmlFor="name" >Name:</label><br/>
            <input type="text" className="input" value={name} onChange={handleChangeName}></input><br/>
            <label className="label" htmlFor="phone" >Phone:</label><br/>
            <input type="text" className="input" value={number} onChange={handleChangeNumber}></input><br/>
            <div>
                <p className="SubHeading">Subuscriber to be added:</p>
                <p className="label">Name: {name}</p>
                <p className="label">Phone:{number}</p>
            </div>
            <Button text="Add"></Button>
            </form>
        </div>
    )
}
export default AddSubBody;