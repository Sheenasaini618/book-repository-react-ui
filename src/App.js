import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddBook from "./pages/AddBook";
import Audit from "./components/Audit"

function App() {

  return (
    <Router>
    <div>
      {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addbook" element={<AddBook/>} />
        <Route exact path="/audit" element={<Audit/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
