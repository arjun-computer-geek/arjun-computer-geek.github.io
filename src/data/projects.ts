
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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
    longDescription: "A comprehensive e-commerce platform featuring user authentication, payment processing with Stripe, admin dashboard, inventory management, and real-time order tracking. Built with modern web technologies for optimal performance and user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    github: "https://github.com/arjun-computer-geek/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration.",
    longDescription: "Modern task management solution with drag-and-drop functionality, real-time collaboration, team workspaces, file attachments, and comprehensive project tracking. Features WebSocket integration for instant updates across all connected clients.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL", "Tailwind"],
    github: "https://github.com/arjun-computer-geek/task-manager",
    live: "https://task-manager-demo.vercel.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    longDescription: "Comprehensive weather application featuring location-based forecasts, interactive weather maps, detailed analytics, and beautiful data visualizations. Includes severe weather alerts and historical weather data analysis.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "Leaflet", "Vuex"],
    github: "https://github.com/arjun-computer-geek/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    featured: false,
    category: "Frontend"
  },
  {
    id: "social-media-api",
    title: "Social Media API",
    description: "RESTful API for a social media platform with authentication and real-time features.",
    longDescription: "Robust social media backend API featuring user authentication, posts, comments, likes, follow system, real-time notifications, and content moderation. Built with Python FastAPI for high performance and automatic API documentation.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "JWT", "WebSockets"],
    github: "https://github.com/arjun-computer-geek/social-api",
    live: "https://api-docs.example.com",
    featured: false,
    category: "Backend"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design.",
    longDescription: "Modern, responsive portfolio website built with React and enhanced with smooth animations using Framer Motion. Features dark theme, project showcase, blog integration, and optimized performance for excellent user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
    github: "https://github.com/arjun-computer-geek/portfolio",
    live: "https://arjun-portfolio.vercel.app",
    featured: false,
    category: "Frontend"
  },
  {
    id: "chat-application",
    title: "Real-time Chat App",
    description: "Real-time chat application with multiple rooms, file sharing, and emoji reactions.",
    longDescription: "Feature-rich chat application supporting multiple chat rooms, direct messaging, file sharing, emoji reactions, typing indicators, and user presence. Built with WebSocket technology for instant message delivery and real-time user interactions.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
    tech: ["React", "Socket.io", "Express", "MongoDB", "Multer", "JWT"],
    github: "https://github.com/arjun-computer-geek/chat-app",
    live: "https://chat-app-demo.vercel.app",
    featured: false,
    category: "Full Stack"
  }
];
