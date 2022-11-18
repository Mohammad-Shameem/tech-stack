import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";



import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"


function App() {
  return (
  <BrowserRouter>

<Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
  </Routes>
<Footer></Footer>
  </BrowserRouter>
  );
}


export default App;
