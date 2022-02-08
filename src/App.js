import './App.css';
import Header from "./comonents/Header";
import {Routes, Route} from "react-router-dom";
import Contacts from "./page/contacts/Contacts";
import Home from "./page/home/Home";
import About from "./page/about/About";
import "./style/Style.scss"

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
}

export default App;
