import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero";


function App() {
    return (
        <Router>
            <Header/>
            <main className=" relative min-h-screen w-screen overflow-x-hidden">

                <Routes>
                    <Hero/>
                    <Route path="/" element={<HomePage/>}/>

                </Routes>
            </main>
        </Router>
    );
}

export default App;
