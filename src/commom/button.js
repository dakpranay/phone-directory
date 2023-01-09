import "./button.css"
function Button(props){
    return(
        <div>
            <button className="addButton">{props.text}</button>
        </div>
    )
}
export default Button;