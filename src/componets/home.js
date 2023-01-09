
import "./home.css"
import Header from "../commom/header";
import Body from "../componets/body";
import Button from "../commom/button";
function Home(props){
    console.log(props)
    return(
        <div >
            <Header header="Phone directory"></Header>
            <Body></Body>
            <div className="body">
            {
                props.pD.map((x)=>{
                    return(
                        <div className="namebody">
                            <p className="name">{x.name}</p>
                            <p className="phone">{x.phone}</p>
                            <Button text="Delete"></Button>
                        </div>
                    )
                })
            } 
            </div>
        </div>
    )
}
export default Home;