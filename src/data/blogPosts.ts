
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readingTime: number;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-best-practices-2024",
    title: "React Best Practices for 2024: A Complete Guide",
    summary: "Explore the latest React best practices, including hooks patterns, performance optimization, and modern state management techniques.",
    content: `# React Best Practices for 2024

React continues to evolve, and with it, the best practices for building robust applications. In this comprehensive guide, we'll explore the latest patterns and techniques that will make your React applications more maintainable, performant, and scalable.

## 1. Custom Hooks for Logic Reuse

Custom hooks are one of React's most powerful features for sharing logic between components. Here's how to create effective custom hooks:

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## 2. Performance Optimization

Use React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders:

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
\`\`\`

## 3. Modern State Management

Consider using Zustand or Jotai for simpler state management:

\`\`\`javascript
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
\`\`\`

These patterns will help you build better React applications in 2024 and beyond.`,
    date: "2024-01-15",
    readingTime: 8,
    tags: ["React", "JavaScript", "Best Practices", "Performance"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "tailwind-design-system",
    title: "Building a Design System with Tailwind CSS",
    summary: "Learn how to create a consistent and scalable design system using Tailwind CSS utilities and custom components.",
    content: `# Building a Design System with Tailwind CSS

Creating a design system is crucial for maintaining consistency across your application. Tailwind CSS provides an excellent foundation for building scalable design systems.

## Setting Up Your Design System

Start by customizing your Tailwind config to match your brand:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
\`\`\`

## Component Library

Build reusable components with consistent styling:

\`\`\`javascript
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-colors';
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

This approach ensures consistency while maintaining flexibility.`,
    date: "2024-01-10",
    readingTime: 6,
    tags: ["Tailwind CSS", "Design System", "CSS", "UI/UX"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for React Applications",
    summary: "Dive deep into advanced TypeScript patterns that will make your React applications more type-safe and maintainable.",
    content: `# Advanced TypeScript Patterns for React Applications

TypeScript provides powerful tools for creating type-safe React applications. Let's explore some advanced patterns that will improve your development experience.

## Generic Components

Create flexible, reusable components with generics:

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

## Discriminated Unions

Use discriminated unions for better state management:

\`\`\`typescript
type AsyncState<T> = 
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function useAsyncData<T>(fetcher: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });

  useEffect(() => {
    fetcher()
      .then(data => setState({ status: 'success', data }))
      .catch(error => setState({ status: 'error', error: error.message }));
  }, []);

  return state;
}
\`\`\`

These patterns will make your TypeScript code more robust and maintainable.`,
    date: "2024-01-05",
    readingTime: 10,
    tags: ["TypeScript", "React", "Advanced Patterns", "Type Safety"],
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "web-performance-optimization",
    title: "Web Performance Optimization: From Theory to Practice",
    summary: "A practical guide to optimizing web application performance, covering everything from bundle size to runtime optimizations.",
    content: `# Web Performance Optimization: From Theory to Practice

Performance is crucial for user experience and SEO. This guide covers practical techniques for optimizing your web applications.

## Bundle Optimization

Start with analyzing your bundle:

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
\`\`\`

## Code Splitting

Implement route-based code splitting:

\`\`\`javascript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Image Optimization

Use modern image formats and lazy loading:

\`\`\`javascript
function OptimizedImage({ src, alt, ...props }) {
  return (
    <picture>
      <source srcSet={\`\${src}.webp\`} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        {...props}
      />
    </picture>
  );
}
\`\`\`

These optimizations can significantly improve your application's performance.`,
    date: "2023-12-28",
    readingTime: 12,
    tags: ["Performance", "Optimization", "Web Development", "Bundle Analysis"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false
  }
];
