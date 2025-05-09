
import OriginalApp from "./ARCHIVE/Original/App.tsx";
import RefreshApp from "./ARCHIVE/Refresh/App.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router";
import { NewApp } from "./NewApp.tsx";


function App() {
    
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<NewApp />}>
                    <Route path={"refresh"} element={<RefreshApp />}/>
                    <Route path={"original"} element={<OriginalApp />} />
                </Route>
            </Routes>

        </Router>
    );
}

export default App;
