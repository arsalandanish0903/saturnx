import React, { useEffect, useState, useRef } from "react";

const StatsSection = () => {
    const [counters, setCounters] = useState({ clients: 0, years: 0 });
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const clientsTarget = 15000;
        const yearsTarget = 10;

        const interval = setInterval(() => {
            setCounters((prev) => {
                const newClients = Math.min(prev.clients + 500, clientsTarget);
                const newYears = Math.min(prev.years + 1, yearsTarget);

                if (newClients === clientsTarget && newYears === yearsTarget) {
                    clearInterval(interval);
                }

                return { clients: newClients, years: newYears };
            });
        }, 50);
    };

    return (
        <div
            ref={sectionRef}
            className="sm:py-16 sm:px-16 bg-[url('/ourClients.jpg')] relative bg-cover bg-center bg-no-repeat text-center w-full h-full"
        >
            <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
            <h2 className="text-6xl font-bold my-10 text-white relative">
                <span className="text-[#fff]">Our Achievements</span>
            </h2>
            <div className="grid sm:grid-cols-4 gap-8 px-4 my-10">
                {/* Happy Clients */}
                <div className="flex flex-col items-center bg-[#010038] addShadow text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                    <span className="text-6xl font-extrabold text-[#fff]">
                        {counters.clients.toLocaleString()}+
                    </span>
                    <p className="text-xl font-medium">Happy Clients</p>
                </div>

                {/* Years of Business */}
                <div className="flex flex-col items-center bg-[#010038] addShadow text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                    <span className="text-6xl font-extrabold text-[#fff]">
                        {counters.years}+
                    </span>
                    <p className="text-xl font-medium">Years of Business</p>
                </div>

                {/* Projects Delivered */}
                <div className="flex flex-col items-center bg-[#010038] addShadow text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                    <span className="text-6xl font-extrabold text-[#fff]">500+</span>
                    <p className="text-xl font-medium">Projects Delivered</p>
                </div>

                {/* Awards Won */}
                <div className="flex flex-col items-center bg-[#010038] addShadow text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                    <span className="text-6xl font-extrabold text-[#fff]">50+</span>
                    <p className="text-xl font-medium">Awards Won</p>
                </div>
            </div>
        </div>

    );
};

export default StatsSection;
