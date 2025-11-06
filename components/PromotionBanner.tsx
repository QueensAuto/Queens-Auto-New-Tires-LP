// Fix: Changed React import to namespace import to ensure JSX types are resolved correctly.
import * as React from 'react';

const PromotionBanner: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-[#0a79c8] to-[#0863a1] text-white shadow-lg">
            <div className="container mx-auto px-6 py-12 md:py-16 text-center">
                <div className="flex justify-center items-center mb-4 text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md">
                    Get a <span className="text-yellow-300 underline decoration-wavy decoration-2 underline-offset-4">FREE</span> Wheel Alignment
                </h2>
                <p className="text-xl md:text-2xl mt-4 font-light drop-shadow-sm">
                    when you buy a set of 4 new tires.
                </p>
                <p className="mt-6 text-base font-normal bg-white/20 inline-block px-4 py-2 rounded-full shadow-md">
                    (Online Offer Only)
                </p>
            </div>
        </section>
    );
};

export default PromotionBanner;