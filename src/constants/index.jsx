import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Waruna Dhananjana, a passionate software engineering student at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. With a strong foundation in front-end development, I specialize in crafting visually appealing and user-friendly interfaces. I enjoy working with modern technologies like React, Node.js, and Next.js, constantly exploring innovative ways to enhance user experiences. . My journey is fueled by a commitment to lifelong learning and the pursuit of excellence in the tech industry.`;

export const PROJECTS = [
  {
    title: "MedExplore (Group)",
    image: project1,
    description:
      "MedExplorer simplifies prescriptions by providing detailed medication info, cost insights, and easy sharing with pharmacies for a seamless healthcare experience.",
    technologies: [
      " React Native",
      " Express.js",
      "Flask",
      "Node.js",
      " Cloud Firestore",
      "Tensorflow",
    ],
    link: "https://github.com/Rdilshan/MedExplorer",
  },
  {
    title: "TOUR GLOW (Group)",
    image: project2,
    description:
      "TourGlow is a travel platform offering personalized recommendations and seamless booking for effortless trip planning.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    link: "https://github.com/amcishara/TourGlow",
  },
  {
    title: " MERN-BLOG (Individual,Ongoing)",
    image: project3,
    description:
      "A web app for authors to manage blogs with images, while users view profiles, blogs, and enjoy secure login.",
    technologies: ["React.js", "Node.js", "Mongo DB", "Express.js"],
    link: "https://github.com/warunadhananjana/Mern-blog-",
  },
  {
    title: "HAMMH (Group,Ongoing)",
    image: project4,
    description:
      "A web system for Hambantota Mental Health Unit to digitize records, enhancing efficiency, access, and patient care.",
    technologies: [
      "Next js",
      "Progress",
      "prisma",
      "Tailwind css",
      "Google Maps Api",
    ],
    link: "https://github.com/Rdilshan/HAMMH",
  },
];

export const CONTACT = {
  address: "Dhananjana,julampitiya road,omara,walasmulla ",
  phoneNo: "+94 702 014 607 ",
  email: "warunad999@gmai.com",
};
