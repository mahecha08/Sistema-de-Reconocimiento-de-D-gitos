// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { ImageForm } from "./components/ImageForm";
import { Info } from "./components/Info";
import { History } from "./components/historial";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/image" element={<ImageForm />} />
        <Route path="/history" element={<History />} />
      </Routes>

    </>
  );
}

export default App;
