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
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';
import { MdNightlightRound } from "react-icons/md";

const NavBar = ({ isNavbarOpen, isNight, setIsNight, setNavbarOpen, p, navbg }) => (
    <>
        <nav className={`flex flex-row justify-between items-center py-4 px-16 sm:px-20 md:px-24 lg:px-32 ${p}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold">MT</h1>
            <div className="hidden md:flex flex-row gap-3 items-center justify-center ">
                <ul className="hidden sm:flex flex-row gap-4 text-md">
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skill'>Skills</a></li>
                    <li><a href='#works'>Works</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className="w-3 h-full bg-white"></div>
                {isNight ? <PiSunLight className="text-3xl" onClick={() => setIsNight(false)} /> : <MdNightlightRound className="text-3xl" onClick={() => setIsNight(true)} />}
                <a href='https://drive.google.com/file/d/1-LyRiZjYN6YR-_CYt4x6mJSylI2T0kW3/view?usp=drivesdk'>
                    <button className="px-2 sm:px-2 md:px-4 py-1 bg-white text-black md:text-lg rounded-xl sm:rounded-2xl">Download CV</button>
                </a>
            </div>
            <TfiAlignJustify className="text-3xl md:hidden" onClick={() => setNavbarOpen(true)} />
        </nav>
        <div
            className={`fixed top-0 right-0 h-screen w-3/5 ${navbg} ${p} py-8 px-4 flex flex-col justify-start items-start gap-4 z-50 transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex flex-row justify-between p-2 w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold">MT</h1>
                <TfiClose className="text-2xl font-bold" onClick={() => setNavbarOpen(false)} />
            </div>
            <ul className="flex flex-col gap-2">
                <li><a href='#about'>About</a></li>
                <li><a href='#skill'>Skills</a></li>
                <li><a href='#works'>Works</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className="w-full h-1 bg-white"></div>
            <div className="flex flex-row justify-between w-full">
                <span>Change the theme</span>
                {isNight ? <PiSunLight className="text-3xl" onClick={() => setIsNight(false)} /> : <MdNightlightRound className="text-3xl" onClick={() => setIsNight(true)} />}
            </div>
            <a href='https://drive.google.com/file/d/1-LyRiZjYN6YR-_CYt4x6mJSylI2T0kW3/view?usp=drivesdk'>
                <button className="px-2 sm:px-2 md:px-4 py-1 bg-white text-black md:text-lg rounded-xl sm:rounded-2xl">Download CV</button>
            </a>
        </div>
    </>
);


const Intro = ({ p }) => (
    <div className="flex flex-col-reverse md:flex-row px-8 sm:px-24 md:px-32 my-12 sm:my-14 md:my-16 py-4 sm:py-8 md:py-12 justify-center items-center">
        <div className="flex flex-col justify-center md:items-start gap-6 mt-24 md:mt-0">
            <div className="flex flex-col gap-3">
                <h1 className={`${p} text-5xl font-medium`}>Hi, I'm Mohd Tauheed 👋</h1>
                <p className={`w-full ${p} md:w-10/12`}>I'm a full stack developer (React.js & Node.js) with a focus on creating
                    (and occasionally designing) exceptional digital experiences that are fast, accessible, visually
                    appealing, and responsive. Even though I have been creating web applications for over 2 years,
                    I still love it as if it was something new.</p>
            </div>
            <div className={`flex flex-col gap-3 justify-center items-start ${p}`}>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <IoLocationSharp className="text-xl" />
                    <span>New Delhi, India</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <GoDotFill className="text-xl" />
                    <span>Available For New Opportunity</span>
                </div>
            </div>
            <div className={`flex flex-row gap-3 justify-center items-center ${p} text-xl`}>
                <a href='https://github.com/tauheed-12/'><FaGithub className="text-4xl" /></a>
                <a href='https://www.instagram.com/m.tauhidsheikh/'><FaInstagramSquare className="text-4xl" /></a>
                <a href='https://www.linkedin.com/in/mohd-tauheed-75a43325a'><FaLinkedin className="text-4xl" /></a>
            </div>
        </div>
        <div className="mt-0 flex justify-center items-center md:flex-none">
            <div className="w-72 h-72 relative">
                <img src={dp} alt={`${dp}`} className="w-72 h-72 bg-slate-600 absolute top-0 left-2 z-10 border-solid-4 border-blue-950" />
                <div className="md:w-72 md:h-72 w-[300px] h-[300px] bg-slate-600 absolute top-4 md:top-8 md:left-8 z-0"></div>
            </div>
        </div>
    </div>
);

const About = ({ p, sectionbackground2, heding }) => (
    <div className={`px-12 sm:px-24 md:px-32 my-0  py-4 sm:py-8 md:py-12 ${sectionbackground2} ${heding} flex flex-col gap-8 justify-center items-center`} id='about'>
        <div className={`px-4 py-2 bg-slate-300 text-black rounded-2xl`}>
            <span>About Me</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center items-center" data-aos="fade-in">
            <div className="flex-1 flex justify-center items-center">
                <div className="w-64 sm:w-72 md:w-96 h-[300px] sm:h-[350px] md:h-[500px] relative">
                    <img src={aboutImg} alt='about img' className="absolute w-60 h-full sm:w-72 sm:h-full md:w-96 md:h-full top-0 left-4 md:left-0 z-10" />
                    <div className="absolute bg-slate-400 w-64 h-full sm:w-72 sm:h-full md:w-96 md:h-full left-2 md:left-8 top-10 md:top-12 md:right-12"></div>
                </div>
            </div>
            <div className={`flex-1 flex flex-col gap-4 mt-28 lg:mt-0 ${p}`}>
                <h3 className="text-4xl font-medium">Curious about me? Here you have it:</h3>
                <p>I'm a passionate, self-proclaimed designer who specializes in full stack development
                    (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects
                    of digital products to life. User experience, pixel perfect design, and writing clear,
                    readable, highly performant code matters to me.</p>
                <p>I began my journey as a web developer in 2022, and since then, I've continued to grow and evolve
                    as a developer, taking on new challenges and learning the latest technologies along the way. Now, in
                    my early thirties, 2 years after starting my web development journey, I'm building cutting-edge web
                    applications using modern technologies such as React.js, JavaScript, Express.js, Tailwindcss, Firebase
                    and much more.</p>
                <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
                    development.</p>
                <p>
                    When I'm not in full-on developer mode, you can find me hovering around on LinkedIn,
                    witnessing the journey of early startups or enjoying some free time. You can follow me on Instagram where
                    I share social-related bites and build in public, or you can follow me on GitHub
                </p>
                <p>Finally, some quick bits about me.</p>
                <ul className="flex flex-row gap-6 justify-center items-center">
                    <ul className="list-disc gap-2">
                        <li>B.Tech. in Computer Engineering</li>
                        <li>Full time Learner</li>
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

const Skills = ({ p, sectionbackground1, heding }) => (
    <div className={`px-12 sm:px-24 md:px-32 my-0 py-4 sm:py-8 md:py-12 ${sectionbackground1} ${p} flex flex-col gap-8 justify-center items-center`} id='skill'>
        <div className="px-6 py-1 bg-slate-300 text-black rounded-2xl">
            <span className="text-lg">Skills</span>
        </div>
        <div className={`${heding}`}>
            <h1>The skills, tools and technologies I am really good at:</h1>
        </div>
        <div className="flex gap-12 flex-wrap justify-center items-center">
            {skills.map((skill, index) => (
                <div className="flex flex-col justify-center items-center gap-2" key={index} data-aos="fade-in">
                    <img src={skill.image} alt={`${skill.name} logo`} className="w-16 h-16 md:w-20 md:h-20" />
                    <span className={`text-lg font-medium ${p}`}>{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const Experience = ({ p, sectionbackground2, heding, card1 }) => (
    <div className={`px-4 sm:px-24 lg:px-32 py-4 sm:py-8 md:py-12 ${sectionbackground2} text-white flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center`} id='experience'>
        <div className="px-4 py-2 bg-slate-300 text-black rounded-2xl">
            <span>Experiences</span>
        </div>
        {experiences.map((exp, index) => (
            <div className={`flex flex-col p-4  lg:flex-row sm:mx-12 md:mx-16 my-4 sm:my-5 md:my-6 sm:p-4 md:p-8 rounded-lg ${card1} ${heding} gap-2 lg:w-3/4`} key={index} data-aos="fade-in">
                <div className="px-12 py-4 flex justify-center items-center md:flex-none">
                    <img src={exp.image} alt={`${exp.title} logo`} className="w-24 h-24" />
                </div>
                <div className="flex flex-col items-start justify-center gap-3 md:gap-4 px-4 sm:px-8 md:px-12 py-4">
                    <h3 className="text-2xl font-medium">{exp.title}</h3>
                    <ul className="flex flex-col justify-center items-start gap-3 sm:max-w-96">
                        {exp.description.map((desc, index) => (
                            <li className={`text-lg ${p} list-disc`} key={index}>{desc}</li>
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

const Works = ({ p, sectionbackground1, heding, card1, card2 }) => (
    <div className={`px-4 sm:px-24 md:px-32 py-4 sm:py-8 md:py-12 ${sectionbackground1} ${heding} flex flex-col gap-8 justify-center items-center`} id='works'>
        <div className="px-6 py-1 bg-slate-300 text-black rounded-2xl">
            <span className="text-lg">Works</span>
        </div>
        <div className="text-center">
            <h1>The works I had done with complete dedication and enjoyment:</h1>
        </div>
        <div className="flex flex-col gap-12">
            {works.map((work, id) => (
                <div className={`rounded-xl flex flex-col lg:flex-row ${id % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`} key={id} data-aos="fade-in">
                    <div className={`flex-1 p-6 ${card2}`}>
                        <img src={work.image} alt={`${work.title} work`} />
                    </div>
                    <div className={`flex-1 p-6 ${card1} flex flex-col gap-3`}>
                        <h3 className="text-2xl font-medium">{work.title}</h3>
                        <p className={`${p}`}>{work.description}</p>
                        <div className="flex flex-row flex-wrap gap-3 mt-8">
                            {work.skills.map((skill, index) => (
                                <span className={`text-lg ${p} px-3 rounded-xl ${card2}`} key={index}>{skill}</span>
                            ))}
                        </div>
                        <div className={`flex flex-row flex-wrap gap-4 mt-12 ${p}`}>
                            <a href={work.github} className="p-2 bg-slate-400 rounded-xl">GitHub</a>
                            {work.title === 'DevX JMI Hackathon' && <a href={work.Live} className="p-2 bg-slate-400 rounded-xl">Live Demo</a>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Contact = ({ sectionbackground2, heding }) => (
    <div className={`px-4 sm:px-24 md:px-32 py-4 sm:py-8 md:py-12 ${sectionbackground2} ${heding} flex flex-col gap-8 justify-center items-center`} id='contact'>
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
        <div className="flex flex-row gap-3 justify-center items-center text-3xl">
            <a href='https://github.com/tauheed-12/'><FaGithub /></a>
            <a href='https://www.instagram.com/m.tauhidsheikh/'><FaInstagramSquare /></a>
            <a href='https://www.linkedin.com/in/mohd-tauheed-75a43325a'><FaLinkedin /></a>
        </div>
    </div>
)

const Footer = ({ sectionbackground1, heding }) => (
    <div className={`px-12 sm:px-24 md:px-28 lg:px-32 py-16 ${sectionbackground1} ${heding} flex flex-col gap-8 justify-center items-center`}>
        <p>2024 |
            Designed
            and
            coded
            with ❤️️ by Mohd Tauheed</p>
    </div>
)

const Home = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const [isNight, setIsNight] = useState(true);
    let p = isNight ? 'text-gray-200' : 'text-gray-900';
    let heding = isNight ? 'text-white' : 'text-black';
    let sectionbackground1 = isNight ? 'bg-darkBlue' : 'white';
    let sectionbackground2 = isNight ? 'bg-slate-900' : 'bg-gray-100';
    let card1 = isNight ? 'bg-slate-800' : 'bg-gray-200';
    let card2 = isNight ? 'bg-slate-700' : 'bg-gray-100';
    let navbg = isNight ? 'bg-darkBlue' : 'bg-gray-300'
    return (
        <div>
            <div className={`${sectionbackground1} py-2 pb-6`}>
                <NavBar setNavbarOpen={setNavbarOpen} isNight={isNight} setIsNight={setIsNight} isNavbarOpen={isNavbarOpen} p={p} navbg={navbg} />
                <Intro p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} />
            </div>
            <About p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} />
            <Skills p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} />
            <Experience p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} card1={card1} />
            <Works p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} card1={card1} card2={card2} />
            <Contact p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} />
            <Footer p={p} heding={heding} sectionbackground1={sectionbackground1} sectionbackground2={sectionbackground2} />
        </div>
    );
}

export default Home;
