# TownTrend Marketing - Product Requirements Document

## Project Overview
**Project Name:** TownTrend Marketing Website  
**Type:** Digital Marketing Agency Landing Page  
**Status:** Frontend with Mock Data (Phase 1 Complete)  
**Date Created:** March 15, 2026  
**Last Updated:** March 15, 2026 (Pricing updated)

## Original Problem Statement
Create a modern and professional digital marketing agency website for "TownTrend Marketing" with dark theme and vibrant gradient accents. The website should include hero section, about, services, portfolio, testimonials, pricing, inquiry form, contact section, WhatsApp integration, Tawk.to chatbot, and social media links.

## User Personas
1. **Local Business Owners** - Looking for digital marketing services to grow their business online
2. **Entrepreneurs** - Need professional websites and social media management
3. **Marketing Decision Makers** - Evaluating agency capabilities and pricing

## Tech Stack
- **Frontend:** React 19, TailwindCSS, Shadcn UI Components
- **Backend:** FastAPI, Python (Not implemented yet)
- **Database:** MongoDB (Not implemented yet)
- **Integrations:** Tawk.to chatbot, WhatsApp, Google Maps iframe

## Core Requirements

### Design Requirements ✅
- Dark background (slate-950, slate-900) with vibrant gradient accents
- Emerald-cyan gradients for primary CTAs
- Orange-rose gradients for secondary elements
- Purple-pink, amber-orange gradients for variety
- Smooth animations and transitions
- Mobile-responsive design
- Lucide React icons (NO emoji icons)
- Shadcn UI components

### Functional Requirements

#### Completed ✅ (Phase 1 - Frontend with Mock Data)
1. **Header Navigation** - Fixed header with smooth scrolling navigation
2. **Hero Section** - Full-screen hero with gradient backgrounds, CTA buttons, stats
3. **About Section** - Company information with feature highlights
4. **Services Section** - 7 service cards with icons (Social Media, Website Design, SEO, Ads, YouTube, Lead Gen, Chatbot)
5. **Portfolio Section** - 4 showcase projects with results and categories
6. **Testimonials** - 3 client testimonials with ratings
7. **Pricing Section** - 3 pricing tiers (Basic ₹9,999, Pro ₹14,999, Business ₹19,999)
8. **Inquiry Form** - Lead capture form with validation (frontend only, form submission MOCKED)
9. **Contact Section** - Contact info, social links, Google Maps iframe
10. **Footer** - Brand info, quick links, contact details, social media
11. **WhatsApp Button** - Floating button with link to WhatsApp
12. **Tawk.to Integration** - Chat widget component (needs Property ID from user)

#### Pending ⏳ (Phase 2 - Backend)
1. **Form Submission API** - Email sending for inquiry form
2. **Database Models** - Store inquiries, testimonials, portfolio items
3. **Admin Panel** - Manage content (optional)
4. **Analytics Integration** - Track form submissions and conversions

## What's Been Implemented

### Date: March 15, 2026
**Completed:**
- ✅ Created comprehensive mock data file with services, portfolio, testimonials, pricing
- ✅ Built Hero component with gradient backgrounds, CTAs, and stats
- ✅ Built About component with feature cards
- ✅ Built Services component with 7 service cards using Shadcn UI
- ✅ Built Portfolio component with vibrant gradient project cards
- ✅ Built Testimonials component with star ratings
- ✅ Built Pricing component with 3 pricing tiers and WhatsApp CTAs
- ✅ Built InquiryForm component with validation and success state (MOCKED submission)
- ✅ Built Contact component with info cards and Google Maps iframe
- ✅ Built Header with sticky navigation and mobile menu
- ✅ Built Footer with social links and contact info
- ✅ Created WhatsAppButton floating component
- ✅ Integrated Tawk.to chat widget (needs Property ID)
- ✅ Updated App.js with all components
- ✅ Applied dark theme with vibrant gradients per design guidelines
- ✅ Installed @tawk.to/tawk-messenger-react package
- ✅ **Updated pricing:** Pro Plan ₹19,999 → ₹15,000 → ₹14,999/month, Business Growth Plan ₹34,999 → ₹19,999/month
- ✅ **Updated Google Maps:** Replaced with business listing iframe showing Town Trend Marketing Agency with ratings and reviews
- ✅ **Updated Header & Footer:** Replaced "TT" icon with professional TownTrend Marketing logo (megaphone icon with brushed text style), increased logo size to h-16 (1.6x larger)
- ✅ **Updated Hero Section:** Removed "Digital Marketing Agency" label badge for cleaner appearance

**Technical Notes:**
- Form submission is MOCKED - shows success message but doesn't send emails yet
- Tawk.to widget has placeholder Property ID - user needs to provide actual ID
- All data is stored in mockData.js file for easy backend integration later
- Used Shadcn UI components: Card, Button, Input, Textarea, Badge, Toaster
- Followed design guidelines: no emoji icons, vibrant gradients, smooth animations

## API Contracts (For Phase 2)

### POST /api/inquiry
**Purpose:** Submit inquiry form and send email  
**Request Body:**
```json
{
  "fullName": "string",
  "phone": "string",
  "email": "string",
  "businessType": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting TownTrend Marketing. Our team will contact you soon."
}
```

## Prioritized Backlog

### P0 (Critical - Phase 2)
- [ ] Backend API for form submission
- [ ] Email service integration (SendGrid/SMTP)
- [ ] MongoDB models for inquiries
- [ ] Error handling and validation on backend

### P1 (High Priority)
- [ ] Admin dashboard to view inquiries
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Performance optimization (image lazy loading, code splitting)

### P2 (Nice to Have)
- [ ] Blog section for content marketing
- [ ] Case studies with detailed project pages
- [ ] Newsletter subscription
- [ ] Live chat integration with CRM

## Next Tasks
1. User to provide Tawk.to Property ID for live chat
2. Build backend API endpoints for form submission
3. Integrate email service for inquiry notifications
4. Test end-to-end form submission flow
5. Deploy to production

## Contact Information
**Agency:** TownTrend Marketing  
**Owner:** Mangesh Dhurve  
**Email:** towntrendmarketing@gmail.com  
**Phone:** +91 9424057785  
**Location:** Pandhurna, Madhya Pradesh, India (480-334)  
**WhatsApp:** https://wa.me/919424057785

## Social Media
- Instagram: https://www.instagram.com/creatorpsycho_ai/
- Facebook: https://www.facebook.com/share/18JynA7GE4/
- YouTube: http://www.youtube.com/@crecketlivestudios
- LinkedIn: https://www.linkedin.com/in/mangesh-dhurve-937750258
