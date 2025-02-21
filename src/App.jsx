import { BrowserRouter as Router } from "react-router-dom";
import Main from "./routes/main";
import Header from "./components/nav/header";
import Navbar from "./components/nav/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
