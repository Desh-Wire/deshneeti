'use client'

import { useState, useEffect } from "react";

const Clock = () => {
    const [ctime, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return <h1 className="text-lg font-bold">
        {ctime}
    </h1>;
};

export { Clock as MyClock };
