
import OriginalApp from "./ARCHIVE/Original/App.tsx";
import RefreshApp from "./ARCHIVE/Refresh/App.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router";


function App() {
    
    return (
        <Router>
            <Routes>
                <Route path={"/"}>
                    <Route path={"refresh"} element={<RefreshApp />}/>
                    <Route path={"original"} element={<OriginalApp />} />
                </Route>
            </Routes>

        </Router>
    );
}

export default App;
