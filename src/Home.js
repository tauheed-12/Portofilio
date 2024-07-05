import React from 'react';
import { PiSunLight } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import dp from './assets/org1.jpg';
import aboutImg from './assets/about_image.png';
import { skills } from './data/skills';
import { experiences } from './data/experience';
import { works } from './data/works';
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const NavBar = () => (
    <nav className="flex flex-row justify-between items-center py-4 px-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold">MT</h1>
        <div className="flex flex-row gap-3 items-center justify-center">
            <ul className="hidden sm:flex flex-row gap-4 text-md font-semibold">
                <li><a href='#about'>About</a></li>
                <li><a href='#skill'>Skills</a></li>
                <li><a href='#works'>Works</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className="w-3 h-full bg-white"></div>
            <PiSunLight />
            <button className="sm:px-2 md:px-4 py-1 bg-white text-black md:text-lg rounded-xl sm:rounded-2xl">Download CV</button>
        </div>
    </nav>
);

const Intro = () => (
    <div className="flex flex-col-reverse md:flex-row px-8 sm:px-24 md:px-32 my-12 sm:my-14 md:my-16 py-4 sm:py-8 md:py-12 justify-center items-center">
        <div className="flex flex-col justify-center items-start gap-6 mt-24 md:mt-0">
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">Hi, I'm Mohd Tauheed 👋</h1>
                <p className="w-10/12 text-gray-200">I'm a full stack developer (React.js & Node.js) with a focus on creating
                    (and occasionally designing) exceptional digital experiences that are fast, accessible, visually
                    appealing, and responsive. Even though I have been creating web applications for over 2 years,
                    I still love it as if it was something new.</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-start text-gray-200">
                <div className="flex flex-row gap-2 justify-center items-center">
                    <IoLocationSharp className="text-xl" />
                    <span>New Delhi, India</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <GoDotFill className="text-xl" />
                    <span>Available For New Opportunity</span>
                </div>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center text-xl">
                <FaGithub />
                <FaInstagramSquare />
                <FaLinkedin />
            </div>
        </div>
        <div className="mt-0 flex justify-center items-center md:flex-none">
            <div className="w-72 h-72 relative">
                <img src={dp} alt={`${dp}`} className="w-72 h-72 bg-slate-600 absolute top-0 z-10 border-solid-4 border-blue-950" />
                <div className="w-72 h-72 bg-slate-600 absolute top-8 left-8 z-0"></div>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="px-12 sm:px-24 md:px-32 my-0  py-4 sm:py-8 md:py-12 bg-slate-900 text-white flex flex-col gap-8 justify-center items-center" id='about'>
        <div className="px-4 py-2 bg-slate-300 text-black rounded-2xl">
            <span>About Me</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
            <div className="flex-1 flex justify-center items-center">
                <div className="w-60 sm:w-72 md:w-96 h-[300px] sm:h-[350px] md:h-[500px] relative">
                    <img src={aboutImg} alt='about img' className="absolute w-60 h-full sm:w-72 sm:h-full md:w-96 md:h-full top-0 left-0 z-10" />
                    <div className="absolute bg-slate-400 w-60 h-full sm:w-72 sm:h-full md:w-96 md:h-full top-12 right-12"></div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 mt-32 lg:mt-0 text-gray-200">
                <h3 className="text-4xl font-semibold text-white">Curious about me? Here you have it:</h3>
                <p>I'm a passionate, self-proclaimed designer who specializes in full stack development
                    (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects
                    of digital products to life. User experience, pixel perfect design, and writing clear,
                    readable, highly performant code matters to me.</p>
                <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve
                    as a developer, taking on new challenges and learning the latest technologies along the way. Now, in
                    my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web
                    applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase
                    and much more.</p>
                <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
                    development.</p>
                <p>
                    When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker,
                    witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where
                    I share tech-related bites and build in public, or you can follow me on GitHub
                </p>
                <p>Finally, some quick bits about me.</p>
                <ul className="flex flex-row gap-6 justify-center items-center">
                    <ul className="list-disc gap-2">
                        <li>B.E. in Computer Engineering</li>
                        <li>Full time freelancer</li>
                    </ul>
                    <ul className="list-disc ml-4">
                        <li>Avid learner</li>
                        <li>Aspiring indie hacke</li>
                    </ul>
                </ul>
                <p>One last thing, I'm available for freelance work, so feel free to reach out
                    and say hello! I promise I don't bite 😉</p>
            </div>
        </div>
    </div>
);

const Skills = () => (
    <div className="px-12 sm:px-24 md:px-32 my-0 py-4 sm:py-8 md:py-12 bg-darkBlue text-white flex flex-col gap-8 justify-center items-center" id='skill'>
        <div className="px-6 py-1 bg-slate-300 text-black rounded-2xl">
            <span className="text-lg">Skills</span>
        </div>
        <div>
            <h1>The skills, tools and technologies I am really good at:</h1>
        </div>
        <div className="flex gap-12 flex-wrap justify-center items-center">
            {skills.map((skill, index) => (
                <div className="flex flex-col justify-center items-center gap-2" key={index}>
                    <img src={skill.image} alt={`${skill.name} logo`} className="w-20 h-20" />
                    <span className="text-lg font-semibold text-gray-300">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const Experience = () => (
    <div className="px-4 sm:px-24 lg:px-32 py-4 sm:py-8 md:py-12 bg-slate-900 text-white flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center" id='experience'>
        <div className="px-4 py-2 bg-slate-300 text-black rounded-2xl">
            <span>Experiences</span>
        </div>
        {experiences.map((exp, index) => (
            <div className="flex flex-col p-4  lg:flex-row sm:mx-12 md:mx-16 my-4 sm:my-5 md:my-6 sm:p-4 md:p-8 rounded-lg bg-slate-800 text-white gap-2 lg:w-3/4" key={index}>
                <div className="px-12 py-4 flex justify-center items-center md:flex-none">
                    <img src={exp.image} alt={`${exp.title} logo`} className="w-24 h-24" />
                </div>
                <div className="flex flex-col items-start justify-center gap-3 md:gap-4 px-4 sm:px-8 md:px-12 py-4">
                    <h3 className="text-3xl font-semibold">{exp.title}</h3>
                    <ul className="flex flex-col justify-center items-start gap-3 sm:max-w-96">
                        {exp.description.map((desc, index) => (
                            <li className="text-lg text-gray-200 list-disc" key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>{exp.date}</p>
                </div>
            </div>
        ))}
    </div>
);

const Works = () => (
    <div className="px-4 sm:px-24 md:px-32 py-4 sm:py-8 md:py-12 bg-darkBlue text-white flex flex-col gap-8 justify-center items-center" id='works'>
        <div className="px-6 py-1 bg-slate-300 text-black rounded-2xl">
            <span className="text-lg">Works</span>
        </div>
        <div className="text-center">
            <h1>The works I had done with complete dedication and enjoyment:</h1>
        </div>
        <div className="flex flex-col gap-12">
            {works.map((work, id) => (
                <div className={`rounded-xl flex flex-col lg:flex-row ${id % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`} key={id}>
                    <div className="flex-1 p-6 bg-slate-700">
                        <img src={work.image} alt={`${work.title} work`} />
                    </div>
                    <div className="flex-1 p-6 bg-slate-800 flex flex-col gap-3">
                        <h3 className="text-2xl font-semibold">{work.title}</h3>
                        <p className="text-gray-300">{work.description}</p>
                        <div className="flex flex-row flex-wrap gap-3 mt-8">
                            {work.skills.map((skill, index) => (
                                <span className="text-lg text-gray-300 px-3 rounded-xl bg-slate-700" key={index}>{skill}</span>
                            ))}
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 mt-12 text-gray-300">
                            <a href={work.github} className="p-2 bg-slate-400 rounded-xl">GitHub</a>
                            {work.title === 'DevX JMI Hackathon' && <a href={work.Live} className="p-2 bg-slate-400 rounded-xl">Live Demo</a>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Contact = () => (
    <div className="px-4 sm:px-24 md:px-32 py-4 sm:py-8 md:py-12 bg-slate-900 text-white flex flex-col gap-8 justify-center items-center" id='contact'>
        <div className="px-6 py-1 bg-slate-300 text-black rounded-2xl">
            <span className="text-lg">Get In Touch</span>
        </div>
        <div>
            <h1>What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className="flex flex-row gap-3 justify-center items-center">
                <CgMail className="text-xl sm:text-2xl md:text-3xl font-bold" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">mdtauheed9682@gmail.com</p>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
                <FaPhoneAlt className="text-xl sm:text-2xl md:text-3xl font-bold" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">7307727194</p>
            </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center text-xl">
            <FaGithub />
            <FaInstagramSquare />
            <FaLinkedin />
        </div>
    </div>
)

const Footer = () => (
    <div className="px-32 py-16 bg-darkBlue text-white flex flex-col gap-8 justify-center items-center">
        <p>2024 |
            Designed
            and
            coded
            with ❤️️ by Mohd Tauheed</p>
    </div>
)

const Home = () => {
    return (
        <div>
            <div className="bg-darkBlue text-white py-2 pb-6">
                <NavBar />
                <Intro />
            </div>
            <About />
            <Skills />
            <Experience />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
