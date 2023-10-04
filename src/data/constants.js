import cpp from '../Assets/cpp.png';
import css from '../Assets/css.png';
import html from '../Assets/html.png';
import Heroku from '../Assets/heroku.png';
import java from '../Assets/java.png';
import javascript from '../Assets/javascript.png';
import express from '../Assets/express.png'; 
import material from '../Assets/material.png'; 
import vscode from '../Assets/vs code.png'; 
import react from '../Assets/react.jpg';
import node from '../Assets/node.png';
import git from '../Assets/git.png';
import github from '../Assets/github.jpeg';
import mysql from '../Assets/mysql.png';
import mongo from '../Assets/mongodb.png';
import mrnd from '../Assets/mrnd.jpeg';
import oasis from '../Assets/oasis.jpeg';
import dyp from '../Assets/dyp.jpg';
import enzochem from '../Assets/enzochem.jpg';
import school from '../Assets/school.jpg';
import proma from '../Assets/Ecommerce.png';
import iot from '../Assets/IOT.png';
import weather from '../Assets/weather.png';
import todo from '../Assets/todo.png';
import groco from '../Assets/groco.png';
import portfolio from '../Assets/portfolio.png';



export const Bio = {
  name: "Rahul Bhosale",
  roles: [
    "MERN Stack Developer",
    "Java Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/RahulB2207",
  resume:
    "https://drive.google.com/file/d/1ETNGWeKoH0pBCeBbRpqKl5w9ESMfdwFK/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/rahul-bhosale-817339219",
  twitter: "https://twitter.com/RSbhosale9370",
  insta: "https://www.instagram.com/__rahul__963/?next=%2F",
  facebook: "https://www.facebook.com/profile.php?id=100027335017874",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C++",
        image: cpp,
      },
      {
        name: "Java",
        image:java,
      },
      {
        name: "JavaScript",
        image:javascript,
      },
    ],

  },
  {
    title: "Web Technologies and Frameworks",
    skills: [
      {
        name: "HTML",
        image:html,
      },
      {
        name: "CSS",
        image:css,
      },
      {
        name: "JavaScript",
        image:javascript,
      },
      {
        name: "React JS",
        image: react,
      },
      {
        name: "Material UI",
        image:material,
      },
      {
        name: "Node Js",
        image: node,
      },
      {
        name: "Express Js",
        image:express,
      },
    ],
  },
  {
    title: "Deployment and Version Control",
    skills: [
      {
        name: "Git",
        image: git,
      },
      {
        name: "GitHub",
        image:github,
      },
      {
        name: "VS Code",
        image:vscode,
      },
      {
        name: "Heroku",
        image:Heroku,
      },
    ]
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:mysql,
      },
      {
        name: "MongoDB",
        image:mongo,
      },
    ],
  },
  
]

export const experiences = [
  {
    id: 0,
    img: mrnd,
    role: "Java Full Stack Developer Intern",
    company: "MRND Lab pvt. Ltd.",
    date: "Jan 2023 - Apr 2023",
    desc: " Gained proficiency in advanced Java programming and adeptly managed MySQL databases,Integrated front-end applications with database and performed CURD operations for seamless data manipulation",
    skills: [
      " • Advance Java Programming",
      " • Mysql",
      " • Java Swing",
      " • JDBC",
    ],
  },
  {
    id: 1,
    img: oasis,
    role: "Java Developer",
    company: "Oasis Infobyte",
    date: "Dec 2023 - Jan 2023",
    desc: "Working on the Core java programming and logic building",
    skills: [
      " • Java",
    ]
  }
];


export const projects = [
  {
    id: 0,
    title: "Proma[E-Website]",
    date: "july 2023 - august 2023",
    description:
      "Designed and developed an e-commerce platform using MERN stack, featuring seamless integration of Stripe for secure payment processing. Gained expertise in crafting responsive web interfaces, API handling, and database integration, showcasingproficiency in creating a user-friendly and efficient online shopping experience",

    image:proma,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux","Stripe","Material UI"],
    category: "web app",
    github: "https://github.com/RahulB2207/Proma-Ecommerce-Website-",
  },
  {
    id: 1,
    title: "Grocery Web-App",
    date: "jan 2023-jan 2023",
    description:
      "Developed a responsive online grocery web app using HTML, CSS, and JavaScript, optimizing user experience across devices.",
    image: groco,
    tags: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "https://github.com/RahulB2207/grocery-app",
  },
  {
    id: 2,
    title: "PortFolio",
    date: "Aug 2023 - Sep 2023",
    description:
      "Crafted a modern portfolio using React.js, featuring enhanced user experience with Material-UI components and custom CSS styling. Integrated seamless communication through EmailJS for efficient outreach and engagement.",
    image:portfolio,
    tags: [
      "React.Js",
      "CSS",
      "Material-UI",
      "Email.Js"
    ], 
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
  },
  {
    id: 3,
    title: "Weather Web-App",
    date: "Apr 2023 - March 2023",
    description:
      "Designed and implemented a dynamic weather website using HTML, CSS, and JavaScript. Leveraged Node.js and Express.js to provide real-time global temperature information based on user-inputted city searches.",
    image:weather,
    tags: ["HTML","CSS","Javascript","Node.js","Express.js"],
    github: "https://github.com/RahulB2207/weather-website",
  },
  {
    id: 5,
    title: "Website for Health Monitoring using IOT",
    date: "Apr-2023-May 2023",
    description:
      "It is an real-time health monitoring system that tracks vital parameters such as heart rate, body temperature,blood pressure, and oxygen levels.Empowered by seamless web integration, users receive instant insights via a user-friendly interface.Additionally, integrated email functionality facilitates direct communication with nearby doctors for prompt medical assistance.",
    image:iot,
    tags: ["React Js", "CSS", "EmailJs"],
    category: "web app",
    github: "https://github.com/RahulB2207/Website-for-Health-monitoring-system-using-IoT",
    
  },
  {
    id: 4,
    title: "To-do list web-App",
    date: "Dec 2022 - Jan 2023",
    description:
      "Developed a user-friendly To-Do List app using HTML, CSS, and JavaScript to help users organize and track daily tasks. The intuitive interface allows seamless addition, deletion, and completion of tasks, enhancing productivity and task management.",
    image:todo,
    tags: ["HTML","CSS", "JavaScript"],
    github: "https://github.com/RahulB2207/To-do-Web-App",
  },
  
];

export const education = [
  {
    id: 0,
    img: dyp,
    school: "Dy Patil College of Engineering,Akurdi",
    date: "2020-2024",
    grade: "8.84 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Electronics and Telecommunication at Dy Patil College of Engineering,Akurdi. I have completed 6 semesters and have a CGPA of 8.84. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Institue Innovation and Incubution cell where I am working on the challenging projects.",
    degree: "Bachelor of Engineering - BE, Electronics and Telecommunication",
  },
  {
    id: 1,
    img: enzochem,
    school: "Enzochem-Highschool and Junior College,Yeola",
    date: "2019-2020",
    grade: "76.15%",
    desc: "I completed my class 12 high school education at Enzochem-Highschool and Junior College,yeola, where I studied Science and get expertise in basics of maths and physics.",
    degree: "HSC(XII), Science",
  },
  {
    id: 2,
    img: school,
    school: "Janta Vidyalay, Jalgaon",
    date: "2017-2018",
    grade: "87.60%",
    desc: "I completed my class 10 education at Janta Vidyalay, Jalgaon.",
    degree: "SSC(X)",
  },
];
