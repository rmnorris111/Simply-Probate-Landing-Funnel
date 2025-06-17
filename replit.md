# Simply Probate - Probate Services Application

## Overview

This is a full-stack web application for Simply Probate, a New Zealand-based probate services company. The application serves as a marketing website with an interactive quiz system to qualify potential clients. The system is built using modern web technologies with a focus on lead generation and client onboarding.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in memory storage with potential for PostgreSQL sessions

### Key Components

#### Client-Side Components
1. **Landing Page Components**:
   - Header: Simple navigation with branding
   - Hero: Video player with call-to-action
   - Benefits: Service highlights with icons
   - Testimonials: Customer review carousel
   - Pricing: Two-tier pricing display (Probate vs Letters of Administration)
   - Quiz: Interactive qualification system
   - Call-to-Action: Lead generation section
   - Footer: Contact information and links

2. **Quiz System**:
   - Multi-step qualification process
   - Scoring system (0-3 scale) to qualify leads
   - Form collection for qualified leads
   - Integration with Google Ads conversion tracking

3. **Routing**:
   - Home page (`/`)
   - Thank you page (`/thank-you`)
   - 404 error handling

#### Server-Side Architecture
1. **API Routes**: Placeholder structure for future backend integration
2. **Storage Interface**: Abstracted storage layer supporting both memory and database backends
3. **User Management**: Basic user schema with authentication capabilities

## Data Flow

1. **User Journey**:
   - User lands on homepage
   - Engages with quiz system
   - Provides contact information if qualified
   - Redirected to thank you page with conversion tracking

2. **Quiz Processing**:
   - Questions presented sequentially
   - Answers scored for qualification
   - Low-scoring users directed to educational content
   - High-scoring users presented with lead capture form

3. **Lead Generation**:
   - Form submission triggers Google Ads conversion
   - User data potentially stored for follow-up
   - Email confirmation and calendar booking integration

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI component primitives
- **Embla Carousel**: Carousel functionality for testimonials
- **Lucide React**: Icon library

### Fonts and Assets
- **Google Fonts**: Poppins (headings) and Lato (body text)
- **Custom CSS Variables**: Brand color system

### Analytics and Tracking
- **Google Tag Manager**: Analytics and conversion tracking
- **Google Ads**: Conversion tracking for lead generation
- **Chatbot Widget**: Third-party customer service integration

### Development Tools
- **Vite Plugins**: Runtime error overlay, cartographer for Replit
- **ESBuild**: Server-side bundling for production

## Deployment Strategy

### Development Environment
- **Replit Configuration**: Node.js 20, PostgreSQL 16 modules
- **Port Configuration**: Server runs on port 5000
- **Hot Reload**: Vite development server with HMR

### Production Build
- **Frontend**: Static assets built to `dist/public`
- **Backend**: Server bundled with ESBuild to `dist/index.js`
- **Deployment Target**: Cloudflare Pages (as documented in build instructions)

### Database Strategy
- **Development**: In-memory storage for rapid development
- **Production**: PostgreSQL via Neon Database with Drizzle ORM
- **Migrations**: Managed through Drizzle Kit

## Database Schema

The application includes a basic user schema:
- **Users Table**: ID, username, password with unique constraints
- **Validation**: Zod schemas for type safety and validation
- **ORM**: Drizzle ORM with PostgreSQL dialect

The schema is prepared for expansion to include:
- Lead/contact information storage
- Quiz response tracking
- Client management features

## Changelog

- June 17, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.