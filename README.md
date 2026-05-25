# APEX Construction — Premium Website

A world-class construction company website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## Design Inspiration

This website synthesizes the best elements from 5 premium construction/architecture design references:
- **City Construct** — Teal-accented service cards, client logos grid, portfolio layout
- **BestBuild** — Clean minimal navigation, full-screen hero, partner marquee
- **BR Construction** — Bold industrial typography, split-hero with worker imagery, stress-free messaging
- **C5C Construction** — Yellow/orange hero accents, founder section with signature
- **DNOIN.INC** — Editorial architecture grid, project categories, recent case studies

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type safety |
| TailwindCSS | Utility-first styling |
| Framer Motion | Cinematic scroll animations |
| Lucide React | Premium icon set |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── projects/page.tsx   # Projects portfolio
│   ├── contact/page.tsx    # Contact page
│   ├── careers/page.tsx    # Careers page
│   ├── blog/page.tsx       # Blog/News
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky smart navbar with dropdowns
│   │   └── Footer.tsx      # Premium multi-column footer
│   ├── sections/           # Homepage sections
│   │   ├── Hero.tsx        # Full-screen cinematic hero
│   │   ├── TrustSection.tsx    # Logo marquee + animated counters
│   │   ├── AboutSection.tsx    # Magazine-style about
│   │   ├── ServicesSection.tsx # Interactive service cards
│   │   ├── ProjectsShowcase.tsx # Filterable project grid
│   │   ├── ProcessSection.tsx  # 6-step timeline
│   │   ├── WhyUsSection.tsx    # Bento grid advantages
│   │   ├── TechSection.tsx     # Technology & innovation
│   │   ├── TestimonialsSection.tsx # Luxury carousel
│   │   └── CTASection.tsx      # Cinematic CTA
│   └── ui/
│       ├── CustomCursor.tsx    # Custom cursor effect
│       ├── AnimatedSection.tsx # Reusable scroll reveal
│       └── SectionHeader.tsx   # Reusable section header
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript interfaces
```

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Matte Black | `#0F1115` | Primary background |
| Deep Black | `#080A0D` | Section backgrounds |
| Graphite | `#2A2E35` | Card backgrounds |
| Off-White | `#F5F5F2` | Body text |
| Construction Orange | `#FF7A00` | Primary accent, CTAs |
| Premium Teal | `#00BFA6` | Technology section |
| Luxury Gold | `#D9A441` | Awards, special accents |

## Typography

| Font | Family | Usage |
|---|---|---|
| Syne | Display / Heading | Hero titles, section headers, navigation |
| DM Sans | Body | Body copy, descriptions |
| DM Mono | Monospace | Tags, labels, statistics |

## Key Features

### Homepage Sections
1. **Hero** — Full-screen slideshow with animated headline rotation, floating project card, stats grid
2. **Trust** — Logo marquee + 6-stat animated counter grid
3. **About** — Magazine split layout with image collage, founder card, timeline
4. **Services** — 8 interactive hover-expansion cards with project metrics
5. **Projects** — Filterable masonry gallery with fullscreen modal
6. **Process** — 6-phase alternating timeline with blueprint cards
7. **Why Us** — 10-item bento grid with safety, tech, sustainability highlights
8. **Technology** — Teal-accented tech grid with live dashboard preview
9. **Testimonials** — Auto-playing carousel with project reference cards
10. **CTA** — Cinematic parallax background with inline contact form

### UX Features
- Custom orange dot cursor with ring follower
- Scroll progress bar
- Dropdown navigation with smooth animations
- Mobile hamburger menu with full-screen overlay
- Framer Motion scroll-triggered reveals throughout
- Image parallax effects
- Glass morphism UI components
- Noise film grain overlay

## CMS-Ready Architecture

The component architecture is designed to integrate with:
- **Sanity CMS** — Projects, team members, testimonials, blog posts
- **Payload CMS** — Services, case studies, careers
- All data is co-located in components for easy extraction

## Customization

### Changing Brand Colors
Edit `tailwind.config.ts` to update the color palette, then update `src/app/globals.css` CSS variables.

### Adding Projects
Update the `projects` array in `src/components/sections/ProjectsShowcase.tsx` or `src/app/projects/page.tsx`.

### Adding Services
Update the `services` array in `src/components/sections/ServicesSection.tsx` or `src/app/services/page.tsx`.

## Deployment

This project is optimized for deployment on **Vercel**:

```bash
npm install -g vercel
vercel --prod
```

Or deploy to any platform supporting Next.js 15.

## Performance

- All images use Next.js `<Image>` with lazy loading
- Fonts are preloaded in the document head
- CSS animations use GPU-accelerated transforms
- Framer Motion animations are triggered on viewport entry

---

Built with precision. Engineered for performance. Designed for conversion.

© 2025 APEX Construction LLC
