import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Hackathons from "./Pages/Hackathons";

function App() {
  
  return (
    <>
    <div className="dark:bg-neutral-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
