# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Scripts
- `npm run dev` - Start development server at localhost:5173 (Vite default)
- `npm run build` - Build for production
- `npm run serve` - Preview production build locally

### Code Quality
- `npm run lint` - Check code for issues with ESLint
- `npm run lint:fix` - Automatically fix ESLint issues where possible
- `npm run prettier` - Check code formatting
- `npm run prettier:write` - Fix code formatting
- `npm run typecheck` - Check TypeScript types without building

### Testing
- `npm test` - Run tests in watch mode (interactive)
- `npm run test:run` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Architecture

### Technology Stack
- **Vue 3** with Composition API
- **TypeScript** for type safety and better developer experience
- **Vite** as build tool and dev server
- **Vue Router** for client-side routing with lazy loading
- **Pinia** for state management
- **Sass/SCSS** for styling with modern architecture
- **Axios** for HTTP requests
- **Vitest** + **Vue Test Utils** for testing
- **ESLint** for code quality and linting

### Application Structure

**Main Entry Points:**
- `src/main.js` - Application bootstrap with Pinia and router setup
- `src/App.vue` - Root component with SiteHeader, router-view, and SiteFooter layout

**Routing:**
- `src/router/index.js` - Vue Router configuration with lazy-loaded components
- Uses `createWebHistory()` with scroll behavior management
- Catch-all route for 404 handling at `ErrorPage.vue`

**State Management:**
- `src/store/global.js` - Pinia store example with state, actions, and getters
- Uses Composition API store definition pattern

**Component Organization:**
- `src/components/` - Reusable UI components (SiteHeader, SiteFooter, HelloWorld)
- `src/views/` - Page-level components (HomePage, AboutPage, StyleGuidePage, ErrorPage)
- `src/composables/` - Vue composables for reusable logic (useYear for date formatting)

**Services Layer:**
- `src/services/index.js` - Axios client configuration for API calls
- Pre-configured with PokeAPI example and 10s timeout

**Styling Architecture:**
- `src/assets/scss/main.scss` - SCSS entry point with modular imports
- **Abstracts:** variables, colors, functions, mixins, breakpoints
- **Base:** reset, fonts, global styles
- **Components:** typography, buttons, forms, lists, tables, code, utilities
- **Layout:** grid, spacing, header, footer, sidebar
- Vite configured to auto-import main.scss in all components

### Path Aliases
- `@/` resolves to `src/` directory for clean imports

### Vue DevTools
- Enabled in development via `vite-plugin-vue-devtools`

## Requirements
- Node.js v20.0.0+
- npm v10.0.0+

## Potential Improvements

This section contains potential improvements and enhancements that can be implemented incrementally based on project needs and priorities.

### Development Tooling & Quality

#### Pre-commit Hooks
- **husky + lint-staged** to enforce code quality before commits
- Automatically run linting, formatting, and tests on staged files
- Prevent broken code from entering the repository

#### Commit Standards
- **Commitizen** for consistent commit message formatting
- Conventional commits for better changelog generation
- Automated versioning based on commit types

#### Build Analysis
- **Bundle analyzer** to optimize build size and identify large dependencies
- Webpack/Vite bundle visualization
- Performance budgets and size monitoring

#### Component Documentation
- **Storybook** for component documentation and isolated development
- Interactive component playground
- Design system documentation

#### End-to-End Testing
- **Playwright/Cypress** for E2E testing beyond unit tests
- User flow automation
- Cross-browser testing capabilities

### Performance & Optimization

#### Progressive Web App
- **PWA support** with service worker and manifest
- Offline functionality and caching strategies
- App-like experience on mobile devices

#### Image Optimization
- **Modern image formats** (WebP, AVIF) with fallbacks
- Automated image compression pipeline
- Responsive images with srcset

#### Code Splitting
- **Advanced code splitting** optimization
- Route-based and component-based lazy loading
- Dynamic imports for heavy dependencies

#### Bundle Optimization
- **Tree shaking** analysis and unused code elimination
- Dead code detection and removal
- Dependency optimization

#### Critical CSS
- **Critical CSS** extraction for faster initial page loads
- Above-the-fold content prioritization
- Progressive enhancement strategies

### Developer Experience

#### Hot Module Replacement
- **Enhanced HMR** for better development experience
- State preservation during development
- Faster feedback loops

#### Containerization
- **Docker** setup for consistent development environments
- Development and production containers
- Multi-stage builds for optimization

#### CI/CD Pipeline
- **GitHub Actions** for automated testing and deployment
- Automated builds on pull requests
- Deployment to staging/production environments

#### Dependency Management
- **Renovate/Dependabot** for automated dependency updates
- Security vulnerability scanning
- Automated testing of dependency updates

#### IDE Integration
- **VSCode workspace** settings and recommended extensions
- Debugging configuration
- Integrated terminal tasks

### Application Features

#### Theme Support
- **Dark mode** theme switching with system preference detection
- CSS custom properties for theming
- Persistent theme selection

#### Internationalization
- **i18n support** for multi-language applications
- Locale-based routing
- Translation management workflow

#### Authentication System
- **JWT/OAuth integration** for user authentication
- Protected routes and role-based access
- Session management and refresh tokens

#### Error Handling
- **Error boundary** components for better error handling
- Global error reporting and logging
- User-friendly error pages

#### UX Enhancements
- **Loading states** and skeleton screens
- Progressive loading strategies
- Optimistic UI updates

### Architecture Improvements

#### Composable Library
- **Extended composables** (useLocalStorage, useApi, useDebounce, etc.)
- Reusable business logic abstractions
- Custom hooks for common patterns

#### Component System
- **Design system** with standardized components
- Design tokens for consistent styling
- Component composition patterns

#### API Layer
- **Enhanced API abstraction** with better error handling
- Request/response interceptors
- Caching and retry mechanisms

#### Form Management
- **Form validation** system with Vee-Validate or Formik
- Complex form handling patterns
- Dynamic form generation

#### State Management
- **Advanced state patterns** for complex data flows
- Normalized state structures
- Optimistic updates and conflict resolution

### Testing & Documentation

#### Visual Testing
- **Visual regression testing** for UI components
- Screenshot comparison workflows
- Cross-browser visual consistency

#### API Mocking
- **MSW (Mock Service Worker)** for reliable API testing
- Consistent test data management
- Integration test scenarios

#### Test Coverage
- **Comprehensive component testing** coverage
- Unit test improvements
- Integration test patterns

#### Auto-Documentation
- **Documentation generation** from code comments
- API documentation automation
- Component prop documentation

#### Accessibility
- **A11y testing** and WCAG compliance
- Screen reader compatibility
- Keyboard navigation support

### Implementation Priority

#### Phase 1 (Quick Wins)
- Pre-commit hooks (husky + lint-staged)
- Bundle analyzer setup
- Dark mode theme support
- Enhanced composables library

#### Phase 2 (Medium Effort)
- Storybook component documentation
- PWA capabilities
- CI/CD pipeline setup
- Form validation system

#### Phase 3 (Long Term)
- Internationalization support
- Authentication system
- E2E testing suite
- Advanced performance optimizations