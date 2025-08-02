// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MenuBar from "./components/MenuBar";
// import LandingPage from "./pages/LandingPage/LandingPage";
// import Dashboard from "./pages/Dashboard";
// import MainPage from "./pages/MainPage";
// import PreviewPage from "./pages/PreviewPage";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <BrowserRouter>
//       <MenuBar />
//       <Toaster />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/Generate" element={<MainPage />} />
//         <Route path="/preview" element={<PreviewPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <ToastContainer /> {/* Replace Toaster with ToastContainer */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Generate" element={<MainPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;