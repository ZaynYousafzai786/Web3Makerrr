import Section2 from './Section2';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroSection from './HeroSection';

import Future from './Future';
import { Route, Routes } from "react-router-dom";

function MainPage() {
    return (
        <>

            <HeroSection />
            <Future />
            <Section2 />


        </>
    );
}

export default MainPage;
