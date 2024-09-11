import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    price,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
 
   
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "J.P. Morgan Chase & Co",
      icon: tesla,
      iconBg: "#383E56",
      date: "January 2024 - March 2021",
      points: [
        "Participated in the entire application lifecycle, focusing on building new features and debugging.",
        "Developed and maintained backend services using Python and Django.",
        "Collaborated with the team to identify and fix bugs, and implement new features.",
      ],
    },
    {
      title: "Intern, Data Analytics",
      company_name: "Quantium Company",
      icon: meta,
      iconBg: "#383E56",
      date: "Feb 2024 - April 2021",
      points: [
        "Assisted in developing data pipelines and ETL processes.",
        "Worked with cloud services for data storage and processing. ",
        "Participated in code reviews and team meetings to discuss project progress. ",
      ],
    },
    // {
    //   title: "Bachelor of Engineering",
    //   company_name: " Information Technology",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2019 - April 2023",
    //   points: [
    //     "I am a recent graduate of Bachelor of Engineering (BE) in Information Technology from Rashtrasant Tukadoji Maharaj Nagpur University", 
    //    "I am eager to embark on a career where I can apply my skills and contribute to innovative solutions.",
    //   "Throughout my studies, I have gained hands-on experience through projects, and coursework, which have equipped me with practical knowledge and problem-solving abilities." ,      
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "IBM and offered through Coursera ",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: " April 2022",
    //   points: [
    //     "Create and structure basic web pages using HTML and style them with CSS.", 
    //     "Develop dynamic web pages with interactive features using JavaScript.", 
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
       
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "IBM and offered through Coursera ",
    //   icon: shopify,
    //   iconBg: "#E6DEDD",
    //   date: "Jul 2023",
    //   points: [
    //     "Develop interactive user interfaces (UIs) and web applications using React.",
    //     "Build dynamic websites and front-end applications quickly and easily with reusable React components.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Rahul's implementation of blockchain technology with React has remarkably enhanced product authenticity, boosting brand trust and customer loyalty.",
     
      name: "Mrudula Maam",
      designation: "Professor",
      company: "College ",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Rahul’s remarkable skills and dedication transform complex challenges into elegant solutions, making a tangible difference in every project he undertakes.",
      name: "Snehit",
      designation: "",
      company: "",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Exceptional talent and a strong work ethic transform complex challenges into elegant solutions, making a noticeable difference.",
      name: "Abhijeet",
      designation: "",
      company: "cohesity",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "  Fake Products Detection Using Blockchain Technology ",
      description:
        "Implemented a blockchain-enabled system for verifying product authenticity; empowered users to identify genuine items, decreasing counterfeit losses by 40% and enhancing brand trust, increasing customer retention by 15%.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Blockchain",
          color: "green-text-gradient",
        },
        {
          name: "Web3.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Real Estate Price Prediction ",
      description:
        "Led the development of a web-based application to forecast real estate prices for properties in Bangalore.Leveraged data analysis techniques and spatial factors to enhance prediction accuracy,empowering informed decision-making for users.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "green-text-gradient",
        },
        {
          name: "Datasets",
          color: "pink-text-gradient",
        },
      ],
      image: price,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
     
    {
      name: "Word Scramble Game",
      description:
        "Created using JavaScript, CSS, and HTML, this game involves solving scrambled words, offering a dynamic experience with real-time scoring and multiple difficulty settings.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      // image: ,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };