# Overview

EMDRise is a professional EMDR (Eye Movement Desensitization and Reprocessing) therapy web application designed to provide evidence-based trauma treatment through guided sessions. The application serves as a landing page and potentially a full-featured therapy platform, targeting users seeking accessible mental health treatment for trauma, anxiety, and PTSD.

The project is structured as a full-stack web application with a React frontend, Express.js backend, and PostgreSQL database integration. It emphasizes accessibility, professional medical standards, and user privacy while delivering therapeutic content through modern web technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing, supporting main pages (/home, /terms, /privacy)
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, professional interface design
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **State Management**: TanStack React Query for server state management and data fetching
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API services
- **Language**: TypeScript throughout for consistent type checking across frontend and backend
- **Database Integration**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development Tools**: Hot module replacement and error overlay for development experience

## Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless hosting for scalable cloud deployment
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Schema Validation**: Zod integration with Drizzle for runtime type validation
- **Migrations**: Drizzle-kit for database migration management
- **Session Storage**: PostgreSQL-backed session storage for user authentication state

## Authentication and Authorization
- **Session-based Authentication**: Traditional session management with secure cookie handling
- **User Schema**: Basic user model with username/password authentication
- **Security**: HTTPS enforcement, secure session configuration, and credential management
- **Privacy**: End-to-end encryption mentioned for therapeutic content (implementation pending)

## Design System and Accessibility
- **Component Library**: Comprehensive UI component system based on Radix UI primitives
- **Accessibility**: WCAG compliance through semantic HTML, keyboard navigation, and screen reader support
- **Responsive Design**: Mobile-first approach with adaptive layouts for various screen sizes
- **Theme System**: CSS custom properties for consistent color schemes and spacing
- **Focus Management**: Visible focus indicators and proper focus flow for keyboard users

## Content Management
- **Landing Page Structure**: Modular component architecture for hero, features, testimonials, FAQ sections
- **Animation System**: Intersection Observer API for scroll-triggered animations with reduced motion support
- **SEO Optimization**: Comprehensive meta tags, structured data (JSON-LD), and semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient bundling strategies

# External Dependencies

## Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for cloud deployment
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **@tanstack/react-query**: Server state management and data synchronization
- **wouter**: Lightweight routing solution for single-page application navigation

## UI and Design
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework for rapid styling and responsive design
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Modern icon library for consistent iconography

## Development and Build
- **vite**: Fast build tool and development server with HMR support
- **typescript**: Type checking and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific development tools and error handling

## Form and Validation
- **react-hook-form**: Performant form handling with minimal re-renders
- **@hookform/resolvers**: Integration adapters for validation libraries
- **zod**: Runtime type validation and schema definition

## Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **nanoid**: Secure unique ID generation for various use cases

## Hosting and Deployment
- **Target Platform**: GitHub Pages with custom domain (emdrise.com)
- **Database**: Neon PostgreSQL for production data storage
- **CDN**: Font loading from Google Fonts for typography
- **SSL**: HTTPS enforcement for secure data transmission