import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nofaldi Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Nofaldi Personal Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nofaldi',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'image.png',
  paragraphOne:
    'Hello my name is nofaldi, but you can call me opal, i am currently pursuing a Computer Science degree at University of Indonesia.',
  paragraphTwo:
    'I usually spend my free time reading books or manga, (im a weeeb :3). I love to code and i also like to teach to other people.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1ZVCAwSXMrvw6w7sfFVQUcXISGaDkQGKh/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Online Chat App',
    info:
      'Online chat application made with React, Redux, Express and Socket.io, this project mainly made to implement the use of socket.io, each user can create a room to chat or join another people room by simply inputting the room name.',
    info2: '',
    url: 'https://5f32c096df41472f47cd8676--hardcore-mahavira-d3f484.netlify.app/',
    repo: 'https://github.com/nofamex/Chat-App-FrontEnd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Netflix Clone',
    info:
      'Netflix clone made with React and Redux, this application is using the TMDB API to fetch the movie data and showing it on the application, this app doesnt play any movie but show the trailer instead when one of the film is clicked.',
    info2: '',
    url: 'https://netflix-clone-3e31b.web.app/',
    repo: 'https://github.com/nofamex/Netflix-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'I Am Okay',
    info:
      'This website made with Django and python for my organization where i was working, my organization mainly focus on educating about mental health, and i with my team was in charge of website development.',
    info2: '',
    url: 'http://www.iamokay.id/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Online Shop',
    info:
      'Build with Django and JavaScript, this website is my final project for my web development class in college, this app is build by implementing red-green-refractor and fully tested in unit test and functional test using selenium.',
    info2: '',
    url: 'https://tugaskelompok1.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to hire me? Cool bro !',
  btn: 'Contact Me',
  email: 'nofaldi.fikrul@ui.ac.id',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nofelldown',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nofaldi-atmam-b34851196/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nofamex',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
