import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Benefits from '../components/Benefits';
import HowTo from '../components/HowTo';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Problem />
            <Benefits />
            <HowTo />
            <CTA />
        </>
    );
};

export default HomePage;
