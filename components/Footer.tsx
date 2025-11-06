import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-10 border-t-2 border-slate-700">
            <div className="container mx-auto px-6 text-center text-sm text-gray-400">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
                    <span>© 2025 Queens Auto Service. All Rights Reserved.</span>
                    <span className="hidden md:inline">|</span>
                    <a href="https://queensautoserviceselgin.com/privacy-policy/" className="hover:text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <span className="hidden md:inline">|</span>
                    <a href="https://queensautoserviceselgin.com/terms-of-use/" className="hover:text-white" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                </div>
                <div className="mb-2">
                    <p>1303 Dundee Ave, Elgin, IL 60120</p>
                </div>
                <div>
                    <p>Call Us: <a href="tel:224-635-3000" className="hover:text-white font-semibold">(224) 635-3000</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;