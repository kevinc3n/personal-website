import strumme from '../assets/images/strumme.png';

const projects = [
  {
    name: 'strumme',
    imageUrl: strumme,
    text: 'strum.me',
    date: 'January 2024 - April 2024',
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
      { title: 'Demo Video', url: 'https://youtu.be/WDs7-oD90oU' },
      { title: 'Project Repository', url: 'https://github.com/kevinc3n/guitar-chord-identifier' }
    ],
  },
  {
    name: 'project2',
    imageUrl: 'https://via.placeholder.com/640x360',
    text: 'Project 2',
    date: 'date',
    description: [
      'Detailed description of Project 2 point 1...',
      'Detailed description of Project 2 point 2...',
      'Detailed description of Project 2 point 3...',
    ],
    functionalities: [
      'Functionality 1 of Project 2...',
      'Functionality 2 of Project 2...',
      'Functionality 3 of Project 2...',
    ],
    learned: [
      'Lesson 1 learned from Project 2...',
      'Lesson 2 learned from Project 2...',
      'Lesson 3 learned from Project 2...',
    ],
    links: [
      'Link 1 for Project 2...',
      'Link 2 for Project 2...',
    ],
  },
];

export default projects;
