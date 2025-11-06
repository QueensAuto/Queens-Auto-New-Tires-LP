// Fix: Changed React import to namespace import to ensure JSX types are resolved correctly.
import * as React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="https://queensautoserviceselgin.com/">
                    <img src="https://queensautoserviceselgin.com/wp-content/uploads/2024/11/New-Logo.webp" alt="Queen's Auto Services Logo" className="h-12 w-auto" />
                </a>
                <a href="#finder" className="hidden md:inline-block bg-[#0a79c8] hover:bg-[#0863a1] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-px">
                    Shop For Tires Now
                </a>
            </div>
        </header>
    );
};

export default Header;