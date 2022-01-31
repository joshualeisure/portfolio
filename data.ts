import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import {MdNextPlan} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'
import { IService, ISkill, IProject } from './type';

export const services: IService[] = [
  {
    title: 'Frontend Frameworks & Libraries',
    about: 'I have predominantly used <b>React</b> & <b>Svelte</b> to create interactive webpages and highly reusable code. Throughout, I have had to illustrate my <b>problem solving</b> & <b>creativity</b> to produce interactive websites. ',
    Icon: RiComputerLine
  },
  {
    title: 'Backend Development',
    about: 'I have predominantly used <b>NodeJS</b>, <b>Express</b>, <b>MongoDB</b>, & <b>PostgreSQL</b>. That being said, I have been responsible for helping the browser communicate with <b>databases</b> as well as <b>server-side validation</b>.',
    Icon: FaServer
  },
  {
    title: 'API Development',
    about: 'I have used direct data formats like <b>JSON</b> as well as database data formats like <b>SQL</b>. I have also generated, interacted, and parsed endpoint data through <b>RESTful APIs</b>.',
    Icon: AiOutlineAntDesign
  },
  {
    title: 'Mobile Development',
    about: 'I have created mobile apps that have been published to the <b>App Store</b> as well as <b>Expo</b> generated apps using <b>React Native</b>.',
    Icon: MdDeveloperMode
  },
  {
    title: 'UI/UX & Styling',
    about: 'Using <b>Figma</b> as a base, I have used <b>SCSS</b> to style the application. I also styled web and mobile applications from the ground up using <b>Tailwind</b>, <b>SAAS</b>, <b>Styled</b>, & <b>SMUI/MUI</b>.',
    Icon: AiOutlineApi
  },
  {
    title: 'Next Steps',
    about: 'I plan on learning more front-end technologies like <b>Ionic</b>, <b>CapacitorJS</b>, <b>Typescript</b>, and <b>Tailwind</b>. For back-end technologies, I plan on learning <b>Python</b> and <b>Java/Springboot</b>.',
    Icon: MdNextPlan
  }
];

export const languages: ISkill[] = [
  {
    name: 'Javascript',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'CSS',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'HTML',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'React Native',
    level: '100%',
    Icon:BsCircleFill
  },
  {
  name: 'MongoDB',
  level: '100%',
  Icon:BsCircleFill
},
  {
    name: 'NodeJs',
    level: '100%',
    Icon:BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name: 'Github',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'Figma',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'Jira',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'VsCode',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'GitBash',
    level: '100%',
    Icon:BsCircleFill
  },
  {
    name: 'Axios',
    level: '100%',
    Icon:BsCircleFill
  },
]

export const projects: IProject[] = [
  { 
    id: 1,
    name: "RN Food Tracker/Filter",
    description:
      "This app was designed to learn different forms of navigation within React Native (Stacks, Screens, and Drawers) as well as a little Redux for filtering.",
    image_path: "/meals.JPG",
    deployed_url: "https://expo.dev/@joshualeisure/rn-complete-guide",
    github_url: "https://github.com/joshualeisure/rn-food-planner",
    category: ["react native", "react"],
    key_techs: ["React Native", "React", "Stylesheet", "Redux", "React Navigation"],
  },
  {
    id: 2,
    name: "TitanUpFitness App",
    image_path: "/titan.JPG",
    deployed_url: "https://expo.dev/@joshualeisure/titanupfitnessmobileapp",
    github_url: "google.com",
    category: ["react native", "mongo", "node", "react", "express"],
    description:
      "This app is an app in progress and is designed to retrieve videos and display them based on the users status. Database is MongoDB and back-end is NodeJS.",
    key_techs: ["React Native", "React", "Stylesheet", "NodeJS", "Express", "Mongoose", "MongoDB", "Heroku", "Axios"],
  },

  {
    id: 3,
    name: "Netflix Clone",
    image_path: "/netflix.JPG",
    deployed_url: "https://react-netflix-clone-cc9b0.web.app/",
    github_url: "https://github.com/joshualeisure/netflix-react",
    category: ["react"],
    description:
      "Constructed a react based version of Netflix, making an API call to TMDB to retrieve movie trailers. The application was created using React for functionality and CSS to style the application as a Netflix clone. Hosted on Firebase.",
    key_techs: [
      "React",
      "TMDB API",
      "CSS",
      "Firebase",
      "React-Youtube",
    ],
  },

  {
    id: 4,
    name: "RN Shopping App",
    image_path: "/computer.jpeg",
    deployed_url: "https://expo.dev/@joshualeisure/rn-shopping-app",
    github_url: "https://github.com/joshualeisure/rn-shopping-app",
    category: ["react native"],
    description:
      "A pratice project to learn redux and redux thunk and how to integrate that into a react native and firebase app. It allows the user to create an account and create/order items as an admin can.",
    key_techs: ["React", "React Native", "Firebase", "Redux", "Redux Thunk"],
  },

  // {
  //   id: 5,
  //   name: "Tweeter Clone",
  //   image_path: "/computer.jpeg",
  //   deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  //   github_url: "https://github.com/Dey-Sumit/tweetme",
  //   category: ["django", "react"],
  //   description:
  //     "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
  //   key_techs: ["React", "Django", "Django REST API"],
  // },

  // {
  //   id: 6,
  //   name: "Color Classification using tf.js",
  //   image_path: "/computer.jpeg",
  //   deployed_url: "!#",
  //   github_url: "https://github.com/Dey-Sumit/color-classification",
  //   category: ["express"],
  //   description:
  //     "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  //   key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  // },
  // {
  //   id: 7,
  //   name: "YouTube using YouTube ",
  //   image_path: "/computer.jpeg",
  //   deployed_url: "https://not-utube.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  //   category: ["express"],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: [
  //     "React",
  //     "Redux",
  //     "Firebase Auth",
  //     "YouTube API",
  //     "Sass",
  //     "Bootstrap",
  //   ],
  // },
  // {
  //   id: 8,
  //   name: "Football App",
  //   image_path: "/computer.jpeg",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   description:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  // },
];