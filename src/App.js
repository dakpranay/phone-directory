import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from "./componets/home";
import AddSub from "./componets/addSub";
function App() {

  const pD=[
    {
        name:"Pranay",
        phone: "23546622"
    },
    {
        name:"Garima",
        phone: "23546623"
    }
]

  return (
    <div>
      <Router>
       <Routes>
        <Route path="/" element={<Home pD={pD}/>} ></Route>
        <Route path="/add" element={<AddSub></AddSub>} ></Route>
       </Routes>
      </Router>  
     
    </div>
  );
}
export default App;
