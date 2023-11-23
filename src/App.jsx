import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./Home";
import AboutMe from "./AboutMe";
import ReviewDetails from "./ReviewDetails"
import CreateReview from "./CreateReview";

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat bg-[url('https://wallpapers.com/images/high/valorant-background-ltf3ic8ftnigcp6t.webp')]"></div>
      
      {/* Mix-blend-mode overlay */}
      <div className="mix-blend-multiply bg-slate-900/90 absolute inset-0 h-screen"></div>
      <div className="mix-blend-overlay text-slate-400 absolute inset-0 h-screen text-[500pt] font-valorant">
        <marquee behavior="scroll" scrollamount="25" direction="left" className="cursor-default">Project 1</marquee>
      </div>

      {/* Content */}
      <div className="relative w-100 z-10 ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/create-review" element={<CreateReview />} />

              <Route path="/reviews/:id" element={<ReviewDetails />} />
              {/* Add other routes as needed */}
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
