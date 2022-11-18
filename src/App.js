import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";



import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"


function App() {
  return (
  <BrowserRouter>

<Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route/>
<Route/>
<Route/>

  </Routes>

  </BrowserRouter>
  );
}


export default App;
