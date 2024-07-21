import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {AboutPage, ProjectsPage} from "./pages";
import { Navbar, Footer } from "./components";
import License from "./License";

import './App.module.scss';

function App() {
  return (
    <>
      <License />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
