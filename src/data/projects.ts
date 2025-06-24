export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "next-internationalization",
    title: "Next.js Internationalization",
    description: "A Next.js Internationalization demo website using ni18n and react-i18next for multi-language support.",
    longDescription: "A comprehensive demonstration of internationalization in Next.js applications. Features multiple language support, dynamic language switching, and proper i18n implementation using ni18n and react-i18next libraries.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    tech: ["Next.js", "React", "i18n", "react-i18next", "TypeScript"],
    github: "https://github.com/arjun-computer-geek/next-internationalization",
    live: "https://next-internationalization-demo.vercel.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: "binks-social",
    title: "Binks Social",
    description: "A feature-rich social media app with post creation, deletion, and commenting functionality.",
    longDescription: "Developed and implemented a feature-rich social media app enabling users to create, delete, and comment on posts. Resulted in a 40% increase in daily active users and 25% higher user engagement levels. Built with modern MERN stack technologies.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tech: ["Node.js", "MongoDB", "React", "Express", "Socket.io"],
    github: "https://github.com/arjun-computer-geek/binks-social",
    live: "https://binks-social.vercel.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "ecommerce-backend",
    title: "E-commerce Backend",
    description: "A complete e-commerce backend with search, order management, and user authentication.",
    longDescription: "An E-commerce backend where you can search, order and manage orders and users. Features comprehensive product management, order processing, user authentication, and admin controls. Made with Express, MongoDB, JWT and Cookies-based authentication.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tech: ["Express", "MongoDB", "JWT", "Cookies", "Authentication"],
    github: "https://github.com/arjun-computer-geek/ecommerce-backend",
    live: "https://ecommerce-backend-demo.vercel.app",
    featured: false,
    category: "Backend"
  },
  {
    id: "fab-tube",
    title: "Fab-Tube",
    description: "A video library web app with modern UI and video management features.",
    longDescription: "A video library web app featuring video upload, categorization, search functionality, and user-friendly interface. Made using React, ContextAPI, Material UI, and MirajJs for enhanced user experience.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
    tech: ["React", "ContextAPI", "Material UI", "MirajJs"],
    github: "https://github.com/arjun-computer-geek/fab-tube",
    live: "https://fab-tube.vercel.app",
    featured: false,
    category: "Frontend"
  },
  {
    id: "fabelle-learn",
    title: "Fabelle Learn",
    description: "An eCommerce web app for selling courses with comprehensive learning management.",
    longDescription: "An eCommerce web app for selling courses with features like course management, user enrollment, progress tracking, and payment processing. Made using React, ContextAPI, CSS, Express, and MongoDB for a complete learning platform.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop",
    tech: ["React", "ContextAPI", "CSS", "Express", "MongoDB"],
    github: "https://github.com/arjun-computer-geek/fabelle-learn",
    live: "https://fabelle-learn.vercel.app",
    featured: false,
    category: "Full Stack"
  },
  {
    id: "fabelle-ui",
    title: "Fabelle UI",
    description: "A UI component library for faster development with reusable components.",
    longDescription: "A comprehensive UI component library designed to accelerate development by providing pre-built, customizable components. Made using HTML, CSS & JavaScript with focus on accessibility and modern design patterns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "Component Library"],
    github: "https://github.com/arjun-computer-geek/fabelle-ui",
    live: "https://fabelle-ui.vercel.app",
    featured: false,
    category: "Frontend"
  }
];
