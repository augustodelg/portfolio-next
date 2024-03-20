'use client'
import React, { useState, useEffect } from 'react';
import { ChangingComponentProps } from './types';

const ChangingComponent = ({ components, intervalTime }: ChangingComponentProps ) => {
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
