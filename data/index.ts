import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm an electronics enthusiast turned Flutter developer",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Trying to do better.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Tinkering with electronics and contributing to open-source projects",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a social media app",
    description: "Bringing ideas to life with innovation.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WhatsApp Clone",
    des: "A complete clone of WhatsApp with essential functionalities.",
    img: "/wp.svg",
    iconLists: ["/flutter.svg", "/firebase.svg", "/dart.svg", "/git.svg"],
    link: "/ui.whatsapp.com",
  },
  {
    id: 2,
    title: "Myntra Clone",
    des: "A robust clone of the Myntra app with shopping features.",
    img: "/myntra.svg",
    iconLists: ["/flutter.svg", "/firebase.svg", "/dart.svg", "/git.svg"],
    link: "/ui.myntra.com",
  },
  {
    id: 3,
    title: "Quiz App",
    des: "An interactive quiz app with various categories and levels.",
    img: "/quiz.jpg",
    iconLists: ["/flutter.svg", "/firebase.svg", "/dart.svg", "/git.svg"],
    link: "/ui.quizapp.com",
  },
  {
    id: 4,
    title: "To-Do App",
    des: "A robust to-do application for managing daily tasks.",
    img: "/todo.jpg",
    iconLists: ["/flutter.svg", "/firebase.svg", "/dart.svg", "/git.svg"],
    link: "/ui.todo.com",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Flutter Development",
    desc: "Gained in-depth knowledge of the Flutter SDK and framework, mastering widget concepts, state management, navigation methods, user authentication with Firebase, and using native device features to build high-performance mobile apps.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Android Development using Kotlin",
    desc: "Learned Android development from the ground up, focusing on Kotlin for building scalable and robust Android applications. Gained expertise in using Android Studio, integrating APIs, managing app architecture, and optimizing user interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Development",
    desc: "Completed comprehensive training on web technologies, including HTML, CSS, JavaScript, and responsive design. Developed skills in building dynamic, responsive websites, integrating backend services, and managing databases.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Python Data Analysis",
    desc: "Acquired essential skills in Python for data analysis, including using libraries like NumPy, pandas, and Matplotlib. Learned to handle large datasets, perform statistical analysis, and create insightful visualizations for data-driven decision-making.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/avanrajput",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://in.linkedin.com/in/avan-singh-shekhawat",
  },
];
