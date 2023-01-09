import "./header.css"
function Header(props){
    return(
        <div>
             <header className="Header">{props.header}</header>
        </div>
    )
}
export default Header;