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
  private?: boolean;
  company?: string;
  companyUrl?: string;
}

export const projects: Project[] = [
  // {
  //   id: "loopedin",
  //   title: "LoopedIn",
  //   description: "All-in-one tool for collecting feedback, building roadmaps, sharing changelogs and publishing knowledge bases.",
  //   longDescription: "Worked on admin page, new public page redesign in SvelteKit and Node.js, implemented SSO, SAML, multi-domain features. Deployed on Heroku using Docker for the new public page deployment. Implemented Upstash QStash and Redis, Bull and sockets for event detection.",
  //   image: "/loopedin.png?w=500&h=300&fit=crop",
  //   tech: ["SvelteKit", "Node.js", "SSO", "SAML", "Docker", "Heroku", "Redis", "Bull", "Socket.io", "Upstash QStash"],
  //   github: "#",
  //   live: "https://app.loopedin.io/",
  //   featured: true,
  //   category: "Full Stack",
  //   private: true,
  //   company: "IIH Global",
  //   companyUrl: "https://www.iihglobal.com/"
  // },
  {
    id: "confidential",
    title: "confidential",
    description: "All-in-one tool for collecting feedback, building roadmaps, sharing changelogs and publishing knowledge bases.",
    longDescription: "Worked on admin page, new public page redesign in SvelteKit and Node.js, implemented SSO, SAML, multi-domain features. Deployed on Heroku using Docker for the new public page deployment. Implemented Upstash QStash and Redis, Bull and sockets for event detection.",
    image: "/private.jpg?w=500&h=300&fit=crop",
    tech: ["SvelteKit", "Node.js", "SSO", "SAML", "Docker", "Heroku", "Redis", "Bull", "Socket.io", "Upstash QStash"],
    github: "#",
    live: "",
    featured: true,
    category: "Full Stack",
    private: true,
    company: "IIH Global",
    companyUrl: "https://www.iihglobal.com/"
  },
  {
    id: "zyapaar",
    title: "Zyapaar",
    description: "India's Largest Business Networking Platform for MSMEs - B2B platform connecting buyers, suppliers, traders & service providers across the country.",
    longDescription: "Led the development of India's largest B2B networking platform for MSMEs. Built with Next.js, Redux, and StompJS for real-time chat features. The platform connects 70,000+ sellers, 50,000+ buyers, and 6,00,000+ products across India, providing verified business networking and digital identity for businesses.",
    image: "/zyapaar.png?w=500&h=300&fit=crop",
    tech: ["Next.js", "Redux", "StompJS", "Socket.io", "B2B Platform", "MSME", "Real-time Chat"],
    github: "#",
    live: "https://zyapaar.com/",
    featured: true,
    category: "Frontend",
    private: true,
    company: "Zyapaar",
    companyUrl: "https://in.linkedin.com/company/zyapaar-b2b-trade-marketplace"
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
    category: "Frontend"
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
