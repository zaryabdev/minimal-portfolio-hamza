import React from "react";

function Intro({ theme }) {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                {theme === "dark" && "Zaryab"}
                {theme === "light" && "Xaryab"}
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Engineer & Frontend Web Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm now an employe at 'Step 2 Agility'. Building software for
                myself and clients to showcase on my Portfolio. All coding
                projects are built from the ground up, from planning and
                designing all the way to solving real-life problems with code.
                <br />I am planning to record my journey of becoming the world's
                gratest Software Engineer. I will upload that content on my
                YouTube channel{" "}
                <a
                    href="https://www.youtube.com/channel/UCz5Ki4bZ2-sDDNux-X4ODjA"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                >
                    Xaryab
                </a>{" "}
                to more than 0k subscribers.
            </p>
        </div>
    );
}

export default Intro;
