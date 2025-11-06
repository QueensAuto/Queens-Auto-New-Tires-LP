import React from 'react';
import VideoPlayer from './VideoPlayer';

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Find Great Deals On Tires Online, Shop Local!</h1>
                    <p className="text-lg text-gray-600 mb-8">Buy tires online and get them installed at our local tire shop. We have a great selection of new tires from the most popular brands.</p>
                    <a href="#finder" className="bg-[#0a79c8] hover:bg-[#0863a1] text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                        Shop for tires now
                    </a>
                </div>
                <VideoPlayer />
            </div>
        </section>
    );
};

export default Hero;