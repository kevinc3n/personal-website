import strumme from '../assets/images/strumme.png';
import gatorchat from '../assets/images/gatorchat.png';
import trackscore from '../assets/images/trackscore.png';
import birthday from '../assets/images/birthday.png';
import site from '../assets/images/site.png';

const projects = [
  {
    name: 'strum.me',
    imageUrl: strumme,
    text: 'strum.me',
    date: 'January 2024 ➜ April 2024',
    description: [
      'A full-stack machine learning project designed to let users quickly identify ten types of acoustic guitar chords.',
      'Implemented, trained, and tuned a convolutional neural network (CNN) to interpret visual representations of audio waves and detect what chord classification it belonged to.',
      'Developed a frontend service that allowed users to simply press a button and strum, allowing them to quickly determine what chord was being played in real time.',
    ],
    functionalities: [
      'Simple, clean interface that lets a user play an acoustic guitar into their microphone.',
      'Once a certain volume decibel is detected, a pipeline will trigger where a snippet is captured and preprocessed for the ML model.',
      'Inference is run on the sample and the classification is returned to the frontend/user using web-sockets.',
    ],
    learned: [
      'How to fully implement a machine learning pipeline, utilizing best practices when training and tuning the CNN model (achieving 90% testing accuracy).',
      'How to use web-sockets to pass information between the backend/ML model and the frontend.',
    ],
    links: [
      {title: 'Demo Video', url: 'https://youtu.be/WDs7-oD90oU'},
      {title: 'Project Repository', url: 'https://github.com/kevinc3n/guitar-chord-identifier'}
    ],
  },
  {
    name: 'GatorChat',
    imageUrl: gatorchat,
    text: 'GatorChat',
    date: 'January 2023 ➜ April 2023',
    description: [
      'A full-stack application that allows University of Florida (UF) students to connect and message one another on a centralized platform.',
      'Supports friend requests, private messaging, text and image transfer, and the ability to edit or delete messages in real-time.',
      'Developed using Angular.js for the frontend and Golang/SQL for the backend.',
    ],
    functionalities: [
      'A UF student can create an account using their UF email and add other students using their personal IDs.',
      'A student can start a conversation with an added friend and send both text messages and images.',
      'The student can search for a specific keyword, edit a message, delete a message, and delete a conversation.',
      'Conversations persist and update in real-time through a cloud SQL database using Microsoft Azure.',
    ],
    learned: [
      'Gained experience as a backend developer through using Golang to develop an API that can handle requests to a cloud database.',
      'Learned more about writing SQL queries and understanding how to best design a table schema for the project\'s purpose.',
      'Became more familiar with Agile/Scrum and how to delegate tasks across the frontend/backend team.',
    ],
    links: [
      {title: 'Demo Video', url: 'https://www.youtube.com/watch?v=SLc8g9nW35A'},
      {title: 'Project Repository', url: 'https://github.com/SWEGroup39/GatorChatApp'}
    ],
  },
  {
    name: 'trackScore.',
    imageUrl: trackscore,
    text: 'trackScore.',
    date: 'June 2023 ➜ September 2023',
    description: [
      'A Next.js application designed to let users search and rate songs/albums from Spotify.',
      'Supports a search engine that catalogs songs, albums, and artists from Spotify and allows users to select and write reviews for a song or album.',
    ],
    functionalities: [
      'A user can use the search page to look up a song, album, or artist.',
      'Clicking on one of the tiles reveals more information related to the tile (e.g. date released, artists featured, etc.).',
      'Selecting "Write Review" opens a dedicated review page where users can rate the song or album with a numerical score and share their thoughts through a written description.',
    ],
    learned: [
      'Learned how to work with APIs through connecting and making requests to Spotify\'s API.',
      'Gained frontend experience with understanding how to create reusable components and leverage libraries to create a unique yet interpretable website design.',
    ],
    links: [
      {title: 'Demo Video', url: 'https://www.youtube.com/watch?v=FQZXiVQeKS0'},
      {title: 'Project Repository', url: 'https://github.com/kevinc3n/trackScore'}
    ],
  },
  {
    name: '\"Is It Kevin\'s Birthday Today?\"',
    imageUrl: birthday,
    text: 'Birthday',
    date: 'May 2023 ➜ June 2023',
    description: [
      'Developed as a way to experiment with the skills gained in my web development course, this website\'s main purpose is to display whether it is my birthday (August 2nd) today or not.',
      'The design of the website mimics the early operating systems of the 2000s with pixelated/flat designs and bold, bright colors.',
      'The user can explore the "desktop" to interact with small widgets that showcase interesting statistics related to my birthday or other general items I wanted to share.',
    ],
    functionalities: [
      'Upon visiting the site, the user will be prompted with a "loading" screen. Internally, the site is determining which version of the site to display based on the current date.',
      'If it is not August 2nd, the site will contain widgets or "apps" that show information related to the amount of time until my birthday or how old I will be turning.',
      'If it is August 2nd, the site will flash colors and rain confetti. Additionally, the user can play a celebration song and write a birthday message to me that will be stored in a database for me to read!',
    ],
    learned: [
      'Got more familiar with working in PHP to handle the logic of deciding which version of the website to load.',
      'Learned more about viewports and how to ensure that the windows and apps are constrained within the current device\'s screen dimensions.',
      'Gained more insight into how modern libraries/frameworks operate, as this project was created entirely through raw HTML/CSS.',
    ],
    links: [
      {title: 'Link to Website', url: 'https://www.cise.ufl.edu/~kcen/isitkevin\'sbirthdaytoday'},
      {title: 'Project Repository', url: 'https://github.com/kevinc3n/isitkevinsbirthdaytoday'}
    ],
  },
  {
    name: 'Personal Website',
    imageUrl: site,
    text: 'Website',
    date: 'June 2024 ➜ August 2024',
    description: [
      'Designed as a central hub to showcase my work and offer a concise introduction to who I am and my creative style.',
      'Presents a "resume-style" overview of my interests, projects, professional experience, and skills.',
      'The site\'s clean and minimalist design reflects a \"homemade\" aesthetic that is both approachable and easy to navigate.',
    ],
    functionalities: [
      'Upon visiting the site, users can explore four panels, each highlighting a different aspect of my journey and experiences in software engineering.',
      'The "About Me" section offers a brief introduction to my background, education, interests, and aspirations.',
      'The "Experiences" and "Projects" panels showcase my passion for continuous learning and my ability to apply software development skills beyond the classroom.',
      'The "Skills" section provides a comprehensive overview of the tools and methodologies I have learned, which I aim to further develop as I advance in my software engineering career.',
    ],
    learned: [
      'Gained more experience with React.js, focusing on efficiently passing information and creating reusable templates.',
      'Learned how to make components and information responsive across all devices, ensuring the site is accessible in any situation.',
      'Acquired knowledge in deploying a website, ensuring it\'s accessible via a link rather than just a local project.',
    ],
    links: [
      {title: 'Link to Website', url: 'https://kevin-cen-personal-website.onrender.com'},
      {title: 'Project Repository', url: 'https://github.com/kevinc3n/personal-website'}
    ],
  },
];

export default projects;
