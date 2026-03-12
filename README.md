# Ali Automations - AI-Powered Property Operations

A professional Next.js landing page for aliautomations, an AI-powered automation tool for property managers.

## Features

✨ **Modern Design**
- Dark professional blue theme
- Fully responsive mobile, tablet, and desktop
- Smooth animations and transitions
- Tailwind CSS for styling

🎯 **Complete Landing Page Sections**
- Hero section with CTA buttons
- How It Works with feature cards
- Client Reviews (5-star testimonials)
- About section with bio
- Final CTA and Footer

🚀 **Built with Next.js 14**
- TypeScript support
- App Router architecture
- Optimized performance

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Visit `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Form Email Notifications

The form at `/form` now sends every submission to your email via Resend.

1. Copy env template:
   ```bash
   cp .env.example .env.local
   ```
2. Set:
   - `RESEND_API_KEY` = your Resend API key
   - `FORM_NOTIFICATION_TO_EMAIL` = where you want to receive submissions
   - `FORM_NOTIFICATION_FROM_EMAIL` = sender (must be valid in your Resend setup for production)

## Visitor Analytics + Heatmaps

This project supports:
- `Google Analytics 4` for traffic and conversion tracking
- `Microsoft Clarity` for heatmaps and session recordings

1. In `.env.local`, set:
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
   - `NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx`
2. Restart app/deployment after adding env vars.
3. Form submissions fire a GA4 `generate_lead` event automatically.

## Customization

### Add Your Content

1. **Professional Photo & Video:**
   - Replace placeholder in hero section with your headshot
   - Add Loom/YouTube video embed
   - Location: `src/app/page.tsx` (hero section)

2. **Demo Video/GIF:**
   - Add your 20-30 sec demo showing the workflow
   - Location: `src/app/page.tsx` (How It Works section)

3. **Calendly Link:**
   - Update all Calendly URLs with your actual link
   - Search for `https://calendly.com` in `src/app/page.tsx`

4. **LinkedIn Profile:**
   - Update LinkedIn URL in footer
   - Search for `https://linkedin.com` in `src/app/page.tsx`

### Color Customization

The site uses a professional dark blue theme. To adjust:
- Modify Tailwind colors in `tailwind.config.ts`
- Primary blue shades range from `blue-400` to `blue-700`

## File Structure

```
aliautomations/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   └── layout.tsx        # Root layout
│   └── styles/
│       └── globals.css       # Global styles
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

## Page Sections Overview

### 1. Hero Section
- Large headline: "Turn Violations & Work Orders into Autopilot"
- Subheadline with key features
- CTA: "Book Free 15-min Pilot" (Calendly link)
- Secondary CTA: "See Demo" (scrolls to demo section)
- Trust badges: 5-star reviews + NYC mention
- Placeholder for professional photo/video

### 2. How It Works
- 3 key features with icons:
  - Handles blurry violation notices
  - Natural language commands
  - Enforces your rules automatically
- Demo placeholder (replace with video/GIF)
- CTA: "Try a Free Pilot on Your Properties"

### 3. Client Reviews
- 3 featured 5-star reviews from your clients
- Interactive hover effects
- Professional badges for each review
- Trust metric: "100% 5-Star Client Reviews"

### 4. About Section
- Personal bio: "I'm Ali, a builder from Endicott, NY..."
- Photo placeholder
- Why trust me section with checkmarks
- Indie builder vibe emphasis

### 5. Final CTA & Footer
- Strong headline: "Ready to Save 10+ Hours Weekly?"
- "Get Started – Free Pilot" button
- Footer with contact info, links, and social media

## Contact Information

- **Email:** muhammadalishahid14@gmail.com
- **LinkedIn:** [Add your profile URL]
- **Calendar:** [Add your Calendly link]

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Next Steps

1. ✅ Replace placeholders with your actual content
2. ✅ Add Calendly link
3. ✅ Update LinkedIn URL
4. ✅ Deploy to Vercel (recommended for Next.js)

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

---

**Built with ❤️ for property managers everywhere**
