import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div className="loader-overlay">
            <div className="loader-content">
                <img
                    src="/asset/logo/logo.png"
                    alt="Les Secrets d'Ambre"
                    className="loader-logo"
                />
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;



