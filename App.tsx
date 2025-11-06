// Fix: Changed React import to namespace import to ensure JSX types are resolved correctly.
import * as React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromotionBanner from './components/PromotionBanner';
import TireFinder from './components/TireFinder';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <PromotionBanner />
                <TireFinder />
                <Features />
            </main>
            <Footer />
        </div>
    );
};

export default App;