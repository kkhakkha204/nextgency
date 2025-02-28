import React from 'react';
import ScoreTracker from "../pages/ScoreTracker";
import RunningRabbit from "./RunningRabbit";
import MusicToggle from "./MusicToggle";

const Hero = () => {
    return (
        <div className="relative h-dvh w-screen overflow-hidden bg-gradient-to-b from-[#f2c94d] via-[#f2c94d] to-[#f2c94d]">
            <MusicToggle />
            <ScoreTracker/>
            <RunningRabbit/>
        </div>
    );
};

export default Hero;