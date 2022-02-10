import './App.css';
import Header from "./comonents/header/Header";
import Hero from "./comonents/hero/Hero";
import Front from "./comonents/front/Front";
import About from "./comonents/about/About";
import "./style/Style.scss"

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Front/>
            <About/>
        </div>
    );
}

export default App;
