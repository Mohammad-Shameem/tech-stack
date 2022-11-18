import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";



import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import Services from "./Components/Services";


function App() {
  return (
  <BrowserRouter>

<Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/services" element={<Services/>}></Route>
  </Routes>

  </BrowserRouter>
  );
}


export default App;
