'use client'
import React, { useState, useEffect } from 'react';

interface ChangingComponentProps {
    components: React.ReactNode[];
    intervalTime: number;
}

const ChangingComponent: React.FC<ChangingComponentProps> = ({ components, intervalTime }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
        }, intervalTime);

        return () => {
            clearInterval(interval);
        };
    }, [components, intervalTime]);

    return components[currentIndex];
};

export default ChangingComponent;
