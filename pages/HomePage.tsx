import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowTo from '../components/HowTo';
import Column from '../components/Column';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Problem />
            <HowTo />
            <Column />
            <CTA />
        </>
    );
};

export default HomePage;
