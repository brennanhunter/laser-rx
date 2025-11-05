# Sanity CMS Integration Roadmap

## Overview
This document outlines the step-by-step process for integrating Sanity CMS into the Laser RX website to enable dynamic content management.

## Phase 1: Initial Setup & Configuration

### 1.1 Install Dependencies
- [x] Install Sanity client packages
  - `@sanity/client` - Core client for API requests ✅
  - `@sanity/image-url` - Image URL generation ✅
  - `@sanity/vision` - GraphQL query tool (optional) ✅
  - `sanity` - Sanity Studio (if embedding) ✅

### 1.2 Environment Configuration
- [x] Create `.env.local` file with:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID=gr4vzt7o`
  - `NEXT_PUBLIC_SANITY_DATASET=production`
  - `SANITY_API_TOKEN=skn0NGZV9XIISe2azzxDhp7EUdUND9x1bWM3XcN53L5IypUrGEoS8iKrS4dluBup33VCZJOaeGI8bQNR8XrC2YkhRG2VCFzfyx3RbDhkmQuLbpcWr54lXswEmhe1s1SuXdsEDrfbnZSQy5Y54ZfmznLSJ3yKVV4a8suqepBiy3Q2MDEnT6no`
  - `NEXT_PUBLIC_SANITY_API_VERSION=2023-12-21`

### 1.3 Client Configuration
- [x] Create `lib/sanity/client.ts` - Main Sanity client ✅
- [x] Create `lib/sanity/image.ts` - Image URL builder ✅
- [x] Create `lib/sanity/queries.ts` - GROQ queries ✅
- [x] Set up TypeScript types in `types/sanity.ts` ✅

## Phase 2: Content Schema Design

### 2.1 Core Content Types
- [ ] **Page Content**
  - Hero section content
  - Service descriptions
  - About page content
  - Contact information

- [ ] **Services**
  - Service name
  - Description
  - Benefits
  - Pricing
  - Before/after images
  - Testimonials

- [ ] **Team Members**
  - Name, title, bio
  - Profile images
  - Credentials

- [ ] **Testimonials**
  - Client name
  - Review text
  - Rating
  - Service type
  - Before/after photos

### 2.2 Media Management
- [ ] **Image Assets**
  - Hero images/videos
  - Service photos
  - Before/after galleries
  - Team photos

- [ ] **Documents**
  - Treatment guides
  - Aftercare instructions
  - Consent forms

## Phase 3: Sanity Studio Setup

### 3.1 Schema Configuration
- [ ] Create schema files for each content type
- [ ] Set up field validation
- [ ] Configure rich text editor
- [ ] Set up image/media fields

### 3.2 Studio Customization
- [ ] Customize studio branding
- [ ] Configure user roles and permissions
- [ ] Set up preview URLs
- [ ] Add custom input components (if needed)

### 3.3 Deployment Options
- [ ] **Option A**: Embed Studio in Next.js (`/studio` route)
- [ ] **Option B**: Deploy Studio separately on Sanity hosting
- [ ] Configure preview mode for draft content

## Phase 4: Frontend Integration

### 4.1 Data Fetching
- [ ] Replace static content with Sanity queries
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Add error handling and loading states
- [ ] Set up TypeScript interfaces

### 4.2 Component Updates
- [ ] **Hero Section** - Dynamic content
- [ ] **Services Section** - Service cards from Sanity
- [ ] **Results Section** - Before/after galleries
- [ ] **Contact Section** - Dynamic contact info
- [ ] **About Page** - Team members and content

### 4.3 Image Optimization
- [ ] Implement Sanity Image URLs with Next.js Image
- [ ] Set up responsive image sizing
- [ ] Configure image transformations
- [ ] Add lazy loading and blur placeholders

## Phase 5: Advanced Features

### 5.1 Content Preview
- [ ] Set up preview mode for draft content
- [ ] Add preview bar for editors
- [ ] Configure webhook for cache invalidation

### 5.2 SEO Enhancement
- [ ] Dynamic meta tags from Sanity
- [ ] Structured data for services
- [ ] Open Graph images
- [ ] XML sitemap from Sanity content

### 5.3 Performance Optimization
- [ ] Implement proper caching strategies
- [ ] Use Sanity CDN for images
- [ ] Optimize GROQ queries
- [ ] Set up monitoring and analytics

## Phase 6: Content Migration & Launch

### 6.1 Content Migration
- [ ] Audit existing static content
- [ ] Create content migration plan
- [ ] Import existing images and text
- [ ] Set up redirects if needed

### 6.2 Testing & QA
- [ ] Test all dynamic content rendering
- [ ] Verify image optimization
- [ ] Check mobile responsiveness
- [ ] Test content preview functionality

### 6.3 Training & Documentation
- [ ] Create content editor guide
- [ ] Document schema relationships
- [ ] Set up content workflows
- [ ] Train team on Sanity Studio

## Implementation Checklist

### Prerequisites Needed
- [x] Sanity Project ID: `gr4vzt7o` ✅
- [x] Dataset Name: `production` ✅
- [x] API Token: `configured` ✅
- [ ] Organization ID: `_________________` (optional)

### File Structure to Create
```
src/
├── lib/
│   └── sanity/
│       ├── client.ts
│       ├── image.ts
│       ├── queries.ts
│       └── config.ts
├── types/
│   └── sanity.ts
└── studio/
    ├── schemas/
    │   ├── index.ts
    │   ├── page.ts
    │   ├── service.ts
    │   ├── testimonial.ts
    │   └── teamMember.ts
    └── sanity.config.ts
```

## Next Steps
1. Provide Project ID and credentials
2. Start with Phase 1: Initial Setup
3. Design content schema based on current site structure
4. Begin frontend integration with existing components

---

**Note**: This roadmap is tailored for the Laser RX website structure. Adjust content types and schema based on specific business requirements.