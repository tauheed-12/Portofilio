import CourseWorld from '../assets/courseworld.png';
import devx from '../assets/DevX.png';
import DoctApointment from '../assets/Doct-Appointment.png';

export const works = [
    {
        image: CourseWorld,
        title: 'CourseWorld',
        description: 'A full-stack web app using React.js and Express.js with PostgreSQL. Features student registration and profile creation upon login, course enrollment, and profile updates. Teachers can register, add courses with thumbnails, and work on adding video uploads, akin to Udemy functionalities.',
        skills: ['React.js', 'TailwindCss', 'PostgreSQL', 'Express.js'],
        github: 'https://github.com/tauheed-12/CourseApp',
    }, {
        image: DoctApointment,
        title: 'Doctor Appintment Booking',
        description: 'A website where a person can book a slot to consult with a specific doctor is developed, utilizing React.js for the frontend, Node.js for the backend, and MongoDB for the database. Upon clicking on a particular doctor, the website displays information about that doctor on a dedicated page.',
        skills: ['React.js', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
        github: 'https://github.com/tauheed-12/Doct_appointment_booking'
    }, {
        image: devx,
        title: 'DevX JMI Hackathon',
        description: 'A Hackathon platform for showcasing the Hackathon details like timeline, round details, Judges, Sponsors,and themes',
        skills: ['React.js', 'TailwindCss'],
        github: 'https://github.com/tauheed-12/DevX-JMI',
        Live: 'https://devxjmi.netlify.app/'
    }
]