import { meta, shopify, starbucks, tesla, neelraj } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    bootstrap5,
    rapidapi,
    youtube,
    data,
    pingpong,
    candy,
    java
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap5,
        name: "Bootstrap",
        type: "Frontend"
    },
    {
        imageUrl: rapidapi,
        name: "Rapid Api",
        type: "API"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language"
    }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Neelraj Fincorp",
        icon: neelraj,
        iconBg: "#affbe1",
        date: "01 May 2023 - 31 July 2023",
        points: [
            "Designed and implemented a dashboard using ReactJS, Material UI and Java Script to visualize data stored in AWS S3 Bucket Database, decreased time to fetch the data 5 times faster than earlier.",
            "Developed various sections like Product Management, Inventory Stocks, Add Sale, Add Purchase, etc. result in smooth and easy management of dashboard.",
            "Used Formik for complex validations of Forms in various sections.",
            "Implemented Keyboard Functionalities and REST API in the Front-End side of the dashboard.",
            "Resulted in a fast and efficient website with all advance features and got 4.8 rating out of 5 from 150 webexperts."
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kkumar001',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kailash-kumar-1658701b6',
    }
];

export const projects = [
    {
        iconUrl: data,
        theme: 'btn-back-red',
        name: 'CRUDS(Create, Read, Update, Delete, Select)',
        description: 'Developed a full stack web application to store data of employees in a table. Implemented features are Add Data, Edit, Delete, Read, Update, Select and Send Data.',
        link: 'https://github.com/kkumar001/cruds',
    },
    {
        iconUrl: youtube,
        theme: 'btn-back-green',
        name: 'YT Clone',
        description: 'Developed a Responsive React replica of the popular online video sharing and social media platform "You Tube" with Search Bar compatible for all devices. Created various video categories like Coding, ReactJS, NextJs, Live, Podcast,etc.',
        link: 'https://github.com/kkumar001/yt_clone',
    },
    {
        iconUrl: pingpong,
        theme: 'btn-back-blue',
        name: 'Ping Pong Score Keeper',
        description: 'Developed a Ping Pong Score Keeper to record the score.An attractive Ping Pong Scorer have multiple game points to set.',
        link: 'https://github.com/kkumar001/Ping-Pong-Scorer',
    },
    {
        iconUrl: candy,
        theme: 'btn-back-pink',
        name: 'Museum of Candy',
        description: 'Built a Responsive Home Page of Candy Shop to learn the application of HTML, Bootstrap and some functions of JavaScript.',
        link: 'https://github.com/kkumar001/Museum-Of-Candy'
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];