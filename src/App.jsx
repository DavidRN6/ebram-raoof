import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Works from "./pages/Works";
import About from "./pages/About";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col px-4 mx-auto max-w-[95%] md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[60%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
