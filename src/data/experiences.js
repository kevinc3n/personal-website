import satlantis from '../assets/images/satlantis.jpg';
import aaimse from '../assets/images/aaimse.png';
import hp from '../assets/images/hp.png';

const experiences = [
  {
    name: 'Satlantis',
    imageUrl: satlantis,
    text: 'Satlantis',
    date: 'May 2024 ➜ Present',
    role: 'Software Engineer Intern',
    description: [
      'Satlantis is a small-satellite solutions company that combines machine learning with satellite imagery to enhance Earth observation capabilities.',
      'I am currently part of the Software Engineering team at Satlantis, where I focus on MLOps/DevOps. ',
      'My primary role involves developing a deployment pipeline for the machine learning models created by the data science team, specifically the cloud detection model.',
    ],
    contributions: [
      'Improved ML Model Serving: Enhanced the model serving pipeline for a cloud detection model using BentoML and Docker, expanding API capabilities and enriching the information delivered.',
      'Upgraded API Functionality: Reworked API endpoints, added debugging features, and added support for tracking hardware usage (CPU and GPU metrics).',
      'Assembled a dataset of 90 inputs for the cloud detection model, manually annotating those with inaccurate outputs to generate ground truth data for improved model retraining.',
      'Developed Feedback System: Created a user feedback system to log and retrieve \"good\" and \"bad\" API inputs for model retraining.'
    ],
    learned: [
      'Gained proficiency in coding within a Linux environment, including scripting and using shell commands effectively.',
      'Acquired experience in working with existing packages, understanding their architecture and limitations, and researching to adapt them to specific needs.',
      'Built knowledge in containerization tools (e.g. Docker, Docker Compose), focusing on creating tools with the end user’s experience in mind.'
    ],
    links: [
      {title: 'Satlantis Website', url: 'https://www.satlantis.com/'},
      {title: 'Satlantis (U.S.) LinkedIn', url: 'https://www.linkedin.com/company/satlantis-llc'},
    ],
  },
  {
    name: 'Research for AI in Education',
    imageUrl: aaimse,
    text: 'Research',
    date: 'August 2023 ➜ Present',
    role: 'Undergraduate Research Intern',
    description: [
      "The Applications of Artificial Intelligence in Middle School Education (AAIMSE) project is a two-year research initiative led by the College of Education at the University of Florida in conjunction with the P.K. Yonge Developmental Research School, now in its second year.",
      "The project aims to explore the most effective ways to integrate AI tools into middle school classrooms, both through curriculum enhancements and general classroom tools.",
      "In this project, I act as a resource for teachers seeking knowledge in computer science/machine learning and contribute to the development of tools/resources that support the project's objectives."
     ],
    contributions: [
      'Engaged with teachers to understand their goals and identify how existing AI tools could be best adapted to meet their needs.',
      'Led the creation of interactive activities to illustrate and visualize machine learning concepts, enhancing teachers\' understanding of complex ML topics.',
      'Assisted in the development of the AAIMSE project website which centralizes resources, dates, and information related to the research initiative.',
      'Contributed to both the frontend and backend development of a ChatGPT clone for a study assessing how different site layouts impact the AI assistant\'s effectiveness in supporting students.'
    ],
    learned: [
      'Learned how to explain computer science and machine learning concepts in a clear and accessible manner for those without a CS background.',
      'Gained experience in web development using Python\'s Flask framework and managed a PostgreSQL database via AWS.',
      'Acquired insights into the methodologies and processes involved in developing research projects, specifically within the College of Education.'
    ],
    links: [
      {title: 'AAIMSE Website', url: 'https://education.ufl.edu/aaimse/'},
    ],
  },
  {
    name: 'Hewlett-Packard (HP)',
    imageUrl: hp,
    text: 'HP',
    date: 'June 2022 ➜ August 2022',
    role: 'Multimedia Production Intern',
    description: [
      'HP Workforce Experience is a telemetry and analytics platform that leverages deep learning to help IT optimize devices, software, and security for employees. It proactively identifies issues and enables scalable solutions.',
      'To support efficient use of this tool, I contributed to the writing and production of tutorial videos that guide users through specific services and features.'
     ],
    contributions: [
      'Streamlined end-user learning by delivering concise content, reducing the need for extensive documentation.',
      'Collaborated with project managers to learn/understand new analytical and security software, producing two technical videos per week.',
      'Regularly participated in feedback sessions with lead editors to ensure the content was accessible and jargon-free for viewers.',
    ],
    learned: [
      'Developed the ability to explain technical terms and concepts in a business-centric way, helping organizations understand the importance of metrics and tools.',
      'Gained first-time experience with the enterprise environment, including meetings with managers and participating in standup meetings.',
      'Learned to work within a brand identity, ensuring all produced content was consistent with the company\'s visual aesthetic.'
    ],
    links: [
      {title: 'HP Workforce Experience Platform Website', url: 'https://www.hp.com/us-en/services/workforce-solutions/workforce-experience-platform.html'},
      {title: 'Video Library', url: 'https://wexlearning.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=813f76b0-a5db-4752-86d2-afe9015d4d66'},
    ],
  },
];

export default experiences;