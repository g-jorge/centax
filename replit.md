# Centax - AI-Assisted Personal Accountant

## Overview

Centax is a modern landing page application for an AI-powered personal finance management platform designed for self-employed individuals, freelancers, and small business owners. The landing page showcases the product's value proposition: unified financial tracking, automated tax deduction detection, and AI-guided insights. Built with React, TypeScript, and shadcn/ui components, the application features smooth scroll animations, gradient backgrounds, and modern fintech-inspired design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for client-side routing (lightweight alternative to React Router)
- Single-page application (SPA) architecture with client-side rendering

**UI Component System**
- **shadcn/ui** (New York style) as the primary component library, providing pre-built, accessible components
- **Radix UI** primitives for headless, accessible component foundations
- **Tailwind CSS** for utility-first styling with custom design tokens
- Components are co-located in `client/src/components/ui/` with consistent API patterns

**Design System**
- Custom color system using CSS variables with HSL values for theme flexibility
- Typography system featuring **Gloock** (headlines) and **DM Sans** (body text)
- Spacing system based on Tailwind's unit scale (4, 6, 8, 12, 16, 20, 24, 32)
- Elevation system using `--elevate-1` and `--elevate-2` for interactive states
- Custom border radius values: lg (9px), md (6px), sm (3px)

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Custom `queryClient` configuration with optimized defaults (no refetch on window focus, infinite stale time)
- Custom `apiRequest` utility for consistent API communication with credential handling

**Animation Strategy**
- Intersection Observer API for scroll-triggered animations
- CSS transitions for fade-in, slide-up, and parallax effects
- Design guideline references GSAP and Framer Motion for potential future enhancements
- Hero section features gradient motion and floating card animations with subtle parallax

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the Node.js server
- ESM (ES Modules) throughout the codebase for modern JavaScript standards
- Custom middleware for request logging with JSON response capture
- Vite middleware integration for development hot module replacement

**API Design Pattern**
- RESTful API structure with `/api` prefix for all application routes
- Route registration through centralized `registerRoutes` function
- Storage abstraction layer using interface-based design (`IStorage`)
- Currently implements in-memory storage (`MemStorage`) for development

**Database Layer**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- Database schema defined in `shared/schema.ts` for type sharing between client and server
- **Neon Database** (`@neondatabase/serverless`) as the serverless PostgreSQL provider
- Migration system using Drizzle Kit with migrations stored in `./migrations`
- Schema includes basic user management (id, username, password) with UUID primary keys

**Build & Deployment**
- Separate build processes: Vite for client, esbuild for server
- Server bundled as ESM with external packages for production optimization
- Development mode uses `tsx` for TypeScript execution with watch mode
- Production build outputs to `dist/` directory with static assets in `dist/public`

### Path Aliases & Module Resolution

**TypeScript Path Mapping**
- `@/*` → `client/src/*` for client-side code
- `@shared/*` → `shared/*` for shared types and schemas
- `@assets/*` → `attached_assets/*` for static assets
- Bundler-based module resolution for compatibility with Vite and esbuild

### Security & Data Handling

**Request Processing**
- JSON body parsing with raw body preservation for webhook verification
- URL-encoded form data support
- CORS and credential handling configured in fetch utilities

**Error Handling**
- Runtime error overlay in development via Replit plugin
- Custom error boundary patterns through toast notifications
- HTTP error translation in query client with status code and text extraction

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Complete suite of accessible, unstyled UI primitives (accordion, dialog, dropdown, popover, select, slider, switch, tabs, toast, tooltip, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for managing component variants
- **cmdk**: Command menu component (Command+K style interfaces)
- **lucide-react**: Icon library for consistent iconography
- **embla-carousel-react**: Carousel/slider component
- **vaul**: Drawer component primitive

### Form & Validation
- **react-hook-form**: Form state management with minimal re-renders
- **@hookform/resolvers**: Integration adapters for validation libraries
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

### Data Fetching & State
- **TanStack Query (v5)**: Async state management, caching, and data synchronization
- Custom fetch wrapper with credential support and error handling

### Database & ORM
- **Drizzle ORM**: TypeScript ORM with schema-first design
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)
- PostgreSQL as the production database (configured but not yet connected)

### Development Tools
- **Replit Plugins**: Runtime error modal, cartographer, dev banner for Replit environment
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **tsx**: TypeScript execution engine for development server
- **esbuild**: Fast bundler for production server builds

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx** & **tailwind-merge**: Conditional className utilities
- **nanoid**: Compact unique ID generation
- **wouter**: Minimal client-side routing (1.3kb alternative to React Router)

### Design Assets
- **Google Fonts**: Gloock (serif headlines) and DM Sans (sans-serif body)
- Design guidelines reference modern fintech apps (Stripe, Plaid) and AI products (Linear, Notion)
- Attached design documents provide copy, layout structure, and animation specifications