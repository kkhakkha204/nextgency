import React from 'react';

const HomePage = () => {
    return (
        <section className="bg-gradient-to-br from-[#e3574e] to-[#8c0407]">
            <div className="relative isolate px-6 pt-14 lg:px-8"
                 style={{
                     backgroundImage: "url('/assets/images/banners/city3.png')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center center",
                 }}
            >
                {/* Background Effect Top */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"

                >
                    <div
                        style={{
                            clipPath:
                                'polygon(70% 20%, 100% 50%, 85% 100%, 40% 80%, 15% 100%, 0% 50%, 10% 20%, 35% 0%, 60% 5%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-tr from-[#e3574e] to-[#8c0407] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                {/* Content */}
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                            AI-Driven Solutions for Your Business
                        </h1>
                        <p className="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
                            Discover the power of automation and AI marketing with NextGenCy. Elevate your brand with
                            cutting-edge technology.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0057b7] shadow-md hover:bg-gray-200"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">
                                Learn more →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Background Effect Bottom */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(10% 0%, 75% 30%, 100% 60%, 80% 100%, 50% 85%, 20% 100%, 0% 60%, 15% 80%, 40% 10%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#e3574e] to-[#8c0407] opacity-90 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>

            </div>
        </section>

    );
};

export default HomePage;
