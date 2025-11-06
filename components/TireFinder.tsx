// Fix: Changed React import to namespace import to ensure JSX types are resolved correctly.
import * as React from 'react';

const TireFinder: React.FC = () => {
    // Fix: Use React.useEffect to align with the namespace import.
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tireflow.ezytire.com/6057/1/Script/Client.js";
        script.async = true;

        const container = document.getElementById('tire-flow-responsive-container');
        if (container) {
            container.appendChild(script);
        }
        
        return () => {
            if (container && container.contains(script)) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="finder" className="bg-gray-100 py-20">
             <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                    Search by Brand<br />or Tire Size
                </h2>
                <div className="bg-white rounded-lg shadow-inner border border-gray-200 p-4">
                    <div id="tire-flow-responsive-container">
                        {/* The external script will inject the tire finder tool here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TireFinder;