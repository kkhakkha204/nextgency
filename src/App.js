import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Hero from "./components/Hero";


function App() {
    return (
        <Router>
            <main className=" relative w-screen overflow-hidden ">
                <Routes>

                    <Route path="/" element={<Hero/>}/>

                </Routes>
            </main>
        </Router>
    );
}

export default App;
