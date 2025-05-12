import * as React from 'react';
import AppAppBar from '../../component/AppAppBar';
import Hero from './Hero';
import Features from './Features';
import FAQ from './FAQ';
import Footer from "../../component/Footer";

export default function HomePage() {
    return (
        <React.Fragment>
            <AppAppBar/>
            <Hero/>
            <div>
                <Features/>
                <FAQ/>
                <Footer/>
            </div>
        </React.Fragment>
    );
}
