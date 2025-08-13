import satlantis from '../assets/images/satlantis.jpg';
import aaimse from '../assets/images/aaimse.png';
import hp from '../assets/images/hp.png';

const experiences = [
  {
    name: 'Satlantis',
    imageUrl: satlantis,
    text: 'Satlantis',
    date: 'May 2024 ➜ May 2025',
    role: 'Software Engineer Intern',
    description: [
      'Satlantis is a small-satellite solutions company that combines machine learning with satellite imagery to enhance Earth observation capabilities.',
      'As part of the Software Engineering team, I focused on MLOps and DevOps infrastructure to support and optimize the company’s satellite image processing and ML pipelines.',
      'My role centered on helping build and manage Argo Workflows running on an AWS Kubernetes cluster and serving containerized ML models.'
    ],
    contributions: [
      'Developed scalable microservices for satellite imagery processing using Kubernetes and Argo Workflows, reducing peak memory usage by 50% and computation time by over 97% (from 24 hours to 30 minutes).',
      'Helped maintain a Kubernetes cluster hosted on AWS, improving resource efficiency through Cognito-based authentication and automated pod retry strategies.',
      'Enhanced machine learning model serving for a cloud detection pipeline using BentoML and Docker, expanding API capabilities and improving deployment stability and accessibility.',
      'Upgraded backend APIs by adding debugging tools, GPU/CPU monitoring endpoints, and usage metrics to assist in system observability and performance tuning.',
      'Engineered a PostgreSQL-backed feedback logging system to capture and retrieve labeled API inputs for iterative model improvement and retraining workflows.'
    ],
    learned: [
      'Gained deep experience in Kubernetes (e.g., pod scheduling, secrets management) and Argo Workflows for building multi-step, resource-aware pipelines.',
      'Deepened cloud experience by integrating authentication with AWS Cognito and understanding how to automate infrastructure deployment using Terraform.',
      'Improved proficiency in Linux scripting, shell automation, and working with observability tools for monitoring system performance.',
      'Learned to navigate and extend existing open-source packages, adapting them to fit production needs while keeping usability and robustness in mind.',
      'Sharpened skills in containerization with Docker and Docker Compose, focusing on developing maintainable and scalable microservices.'
    ],
    links: [
      { title: 'Satlantis Website', url: 'https://www.satlantis.com/' },
      { title: 'Satlantis (U.S.) LinkedIn', url: 'https://www.linkedin.com/company/satlantis-llc' }
    ]
  },
  {
    name: 'Research for AI in Education',
    imageUrl: aaimse,
    text: 'Research',
    date: 'August 2023 ➜ May 2025',
    role: 'Undergraduate Research Intern',
    description: [
      'The Applications of Artificial Intelligence in Middle School Education (AAIMSE) was a two-year research initiative led by the University of Florida College of Education in partnership with the P.K. Yonge Developmental Research School.',
      'The project explored effective strategies for integrating AI tools into middle school classrooms through curriculum enhancement and practical tool development.',
      'As a research intern, I supported teachers in understanding and implementing AI by providing technical guidance and contributing to the creation of tools that aligned with the project’s educational goals.'
    ],
    contributions: [
      'Collaborated with middle school teachers to understand their instructional goals and identified AI tools best suited to enhance classroom learning.',
      'Developed a ChatGPT-style platform for a research study measuring students\' AI literacy, capturing and analyzing 2,800+ essay-writing interactions from 20+ students.',
      'Designed and developed interactive web-based activities that visualize machine learning concepts, improving teacher comprehension and engagement.',
      'Assisted in building and maintaining the official AAIMSE website, centralizing project updates and research tools, and aggregated over 100 AI educational resources for the initiative.'
    ],
    learned: [
      'Improved ability to communicate computer science and machine learning concepts in an accessible and educationally meaningful way for non-CS audiences.',
      'Gained hands-on experience with web development using Flask and PostgreSQL, deploying components within an AWS-hosted environment.',
      'Developed a deeper understanding of education research processes, including user testing, feedback cycles, and collaborative design with educators, as part of a cross-functional team spanning technical, pedagogical, and research expertise.'
    ],
    links: [
      { title: 'AAIMSE Website', url: 'https://education.ufl.edu/aaimse/' }
    ]
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