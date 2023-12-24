import Future from '../src/components/Future'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHead from './components/NavbarHead';
import HeroSection from './components/HeroSection';

import Footer from './components/Footer';
import Section2 from './components/Section2';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <NavbarHead />
      <Routes>

        <Route path={'/'} element={<HeroSection />} />
        <Route path={'/Services'} element={<Section2 />} />
        <Route path={'/Tools'} element={<Future />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
