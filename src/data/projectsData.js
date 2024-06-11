import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import olkisirimg from '../assets/png/welcome.PNG'
import kibhoretimg from '../assets/png/Kibhoret.PNG'
import airbnbimg from '../assets/png/AirBnB.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Olkisir: A Dispatch-Returns System',
        projectDesc: 'Olkisir is a robust Dispatch-Returns System designed to streamline sales order management and enhance product returns handling. It efficiently tracks goods and services from dispatch to customer premises and facilitates seamless returns processing, optimizing operational efficiency, reducing costs, and improving customer satisfaction.',
        tags: ['Django (DRF)', 'PostgreSQL', 'HTML' ,'Tailwind', 'React', 'Axios'],
        code: 'https://github.com/Shadkoech/Webstack-Portfolio-Project',
        demo: 'https://www.youtube.com/watch?v=569z35UPcBQ&ab_channel=Cellenttech',
        image: olkisirimg
    },
    {
        id: 2,
        projectName: 'Kibhoret: An Automated Material Flow Management System',
        projectDesc: 'Kibhoret is an automated Material Flow Management System utilizing Django for the backend and React with Vite for the frontend. It tracks trucks with material payloads in real-time as they enter a company premise, capturing various stages of the material handling process. This system enhances efficiency in tracking, managing, and monitoring material flow within an organization.',
        tags: ['Django', 'PostgreSQL', 'HTML' ,'Tailwind', 'React-vite', 'Axios'],
        code: 'https://github.com/kibuchijw/portfolio-project/tree/Koech',
        demo: 'https://shadkoech.github.io/Kibhoret_LandingPage/',
        image: kibhoretimg
    },
    {
        id: 3,
        projectName: 'AirBnB Clone',
        projectDesc: 'This AirBnB Clone project is a full-stack web application developed to learn and practice full-stack coding. The project replicates core functionalities of the popular AirBnB platform, including user authentication, property listings, and booking management.',
        tags: ['Flask', 'ORM', 'MySQL', "HTML","CSS"],
        code: 'https://github.com/kibuchijw/AirBnB_clone',
        demo: 'https://github.com/Shadkoech/AirBnB_clone_v3',
        image: airbnbimg
    },
    // {
    //     id: 4,
    //     projectName: 'Reliance Digital Clone - Backend Integration',
    //     projectDesc: 'This is the clone of reliancedigital.in. Features I worked on the Product Catalogue pages and also on some minor parts on other pages as well',
    //     tags: ['EJS', 'Express', 'MongoDB', 'Node.js'],
    //     code: 'https://github.com/sreerag-rajan/Reliance-Digital-Clone-U4-',
    //     demo: 'https://reliance-digital-clone.herokuapp.com/',
    //     image: "https://miro.medium.com/max/875/1*qRNfRbuHCDC1ct0chLZoWA.png"
    // },
    // {
    //     id: 5,
    //     projectName: 'Reliance Digital Clone - Frontend',
    //     projectDesc: 'This project is the clone of Reliance Digital built as a part of a project week. It simulates the functionality of an e-commerce website from landing page to checkout. My contribution was the product catalog page arriving from the navbar, as well as leading the team.',
    //     tags: ['HTML', 'CSS', 'Javascript'],
    //     code: 'https://github.com/iamrituyadav/Reliance_digital',
    //     demo: 'https://reliance-digital-clone.herokuapp.com/',
    //     image: "https://miro.medium.com/max/875/1*qRNfRbuHCDC1ct0chLZoWA.png"
    // },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/