# Simply Probate - Probate Services Application

## Overview

Simply Probate is a full-stack web application designed as a squeeze page for PDF download lead generation. The application features a landing page with a PDF download form to capture leads, combined with pricing information and service details. The application is built using React for the frontend and Express.js for the backend, with plans for database integration using Drizzle ORM and PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Custom component library based on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with custom color scheme and typography (Poppins for headings, Lato for body text)
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for fast server-side bundling
- **API Design**: RESTful API structure with /api prefix routing

### Development Environment
- **Platform**: Replit with Node.js 20, web, and PostgreSQL 16 modules
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Error Handling**: Runtime error overlay for development debugging

## Key Components

### Frontend Components
1. **Landing Page Structure**:
   - Header with company branding
   - Hero section with video player integration
   - Benefits showcase with icon-based feature highlights
   - Customer testimonials with carousel functionality
   - Pricing section with direct application links
   - Interactive quiz system for lead qualification
   - Call-to-action sections throughout
   - Footer with contact information

2. **Quiz System**:
   - Multi-step form with progress tracking
   - Qualification scoring algorithm
   - Lead capture with form validation
   - Results-based routing (qualified vs unqualified leads)
   - Integration with external booking systems

3. **UI Components**:
   - Comprehensive design system using shadcn/ui components
   - Custom video player component
   - Toast notifications for user feedback
   - Responsive design for mobile and desktop

### Backend Components
1. **Storage Layer**:
   - Abstract storage interface (IStorage) for future database integration
   - In-memory storage implementation for development
   - User management with basic CRUD operations

2. **API Structure**:
   - Modular route registration system
   - Error handling middleware
   - Request/response logging
   - CORS and security middleware setup

3. **Development Tools**:
   - Vite integration for serving frontend in development
   - Static file serving for production builds

## Data Flow

### Quiz Flow
1. User completes multi-step assessment quiz
2. Responses are scored using qualification algorithm
3. Based on score, user is either:
   - Redirected to external booking system (qualified)
   - Shown alternative contact information (unqualified)
4. Contact information is captured for follow-up

### Content Delivery
1. Static assets served via Vite in development
2. Production builds served from dist/public directory
3. API routes handle dynamic content and form submissions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI components for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **State**: TanStack React Query for server state
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for testimonial slider

### Backend Dependencies
- **Database**: Drizzle ORM with @neondatabase/serverless driver
- **Validation**: Drizzle-Zod for database schema validation
- **Sessions**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx, esbuild for TypeScript compilation

### Third-Party Integrations
- **Analytics**: Google Tag Manager (GTM-N57MBFF3)
- **Chat**: Custom chatbot widget integration
- **External Forms**: Gavel.io for probate application processing
- **Fonts**: Google Fonts (Poppins, Lato)

## Deployment Strategy

### Development
- Runs on Replit with auto-reload capabilities
- Uses port 5000 for local development
- Vite dev server with Express API integration

### Production Build
- Frontend: Vite build outputs to dist/public
- Backend: esbuild bundles server to dist/index.js
- Static file serving from built assets

### Deployment Options
1. **Replit Autoscale**: Direct deployment with built-in scaling
2. **Cloudflare Pages**: Static site deployment with build instructions provided
3. **Custom Server**: Node.js deployment with PM2 or similar process manager

### Environment Configuration
- Development: NODE_ENV=development with hot reload
- Production: NODE_ENV=production with optimized builds
- Database: DATABASE_URL for PostgreSQL connection (when implemented)

## Changelog
- June 18, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.