# Data Analyst Portfolio - Structure & Usage Guide

## Overview

A minimal, text-first portfolio designed to demonstrate analytical thinking, problem-framing ability, and decision-making skills rather than visual polish.

## Philosophy

This portfolio is built on the principle that hiring managers reviewing 200+ candidates want to **quickly identify who actually understands data work**. It prioritizes:

- Clear problem framing over technical jargon
- Honest assessment of limitations over false precision
- Decision impact over methodology details
- Readability over visual complexity

## Site Structure

```
/
├── Home (Work)
│   └── Positioning statement + featured case studies
├── Case Study Pages
│   └── Individual project deep-dives
└── Thinking (About)
    └── Analytical philosophy + background
```

## Component Architecture

### Navigation (`src/components/Navigation.tsx`)
- Sticky header with portfolio owner name
- Two-tab navigation: Work / Thinking
- Minimal styling, clear active states

### Home Page (`src/components/Home.tsx`)
- One positioning sentence (no buzzwords)
- 3-4 featured case studies with:
  - Title
  - One-line problem statement
  - Link to full case study

### Case Study Template (`src/components/CaseStudy.tsx`)
Strict six-section structure:

1. **Problem Statement** (5 lines max, business-focused)
2. **Constraints & Assumptions** (bullet list)
3. **Analytical Approach** (reasoning, not code)
4. **Key Findings** (outcome-focused)
5. **Decision / Recommendation** (highlighted box)
6. **What I Would Do Next** (demonstrates scope awareness)

### About/Thinking Page (`src/components/About.tsx`)
- Analytical philosophy sections
- Background summary
- Contact information

## Design System

### Typography
- Headings: Bold, clear hierarchy (4xl → 2xl → sm)
- Body: 16-18px base, generous line-height (1.6-1.75)
- Monospace: Not used (this isn't a developer portfolio)

### Color Palette
- Primary text: Gray-900 (near black)
- Secondary text: Gray-600/700
- Accent: Teal-600 (professional, not purple/indigo)
- Backgrounds: White, Gray-50 for emphasis
- Borders: Gray-200

### Spacing
- Section margins: 12-16 spacing units
- Content max-width: 3xl (768px)
- Generous padding: 6 units (24px)

### Interaction
- Subtle hover states
- Color transitions (200ms)
- No animations or micro-interactions
- Clear clickable areas for case studies

## Content Guidelines

### Writing Tone
- **Clear**: Short sentences, concrete language
- **Direct**: No hedging, no marketing speak
- **Opinionated**: Show judgment and perspective
- **Honest**: Acknowledge uncertainty and limitations

### What to Include
- Real constraints (sample size, data quality, time pressure)
- Analytical reasoning (why this approach vs. alternatives)
- Business impact (what decision changed)
- Self-awareness (what you would do differently)

### What to Avoid
- Technical jargon without context
- Code snippets or tool names (unless critical)
- Skill bars, proficiency ratings, buzzwords
- Generic statements ("detail-oriented," "team player")
- Perfect success stories (show tradeoffs)

## Case Study Data Structure

```typescript
interface CaseStudyData {
  id: string;                    // URL-friendly identifier
  title: string;                 // Question format works well
  context: string;               // Domain, timeline
  problemOneLine: string;        // For homepage preview
  problemStatement: string;      // 3-5 line business problem
  constraints: string[];         // Data/time/political limitations
  approach: string;              // Analytical reasoning
  findings: string[];            // Key discoveries
  decision: string;              // Recommendation + outcome
  nextSteps: string;             // What you'd do with more time
}
```

## Adding New Case Studies

1. Add case study object to `src/data/caseStudies.ts`
2. Follow the strict structure (all fields required)
3. Keep problem statements under 5 lines
4. List 3-5 meaningful constraints
5. Focus approach on reasoning, not tools
6. Highlight 3-4 key findings
7. State clear decision + actual outcome
8. Show awareness with "next steps"

## Customization

### Changing Name/Branding
- Update name in `Navigation.tsx` (line 14)
- Update contact email in `About.tsx`
- Consider changing accent color (search for `teal-600`)

### Accent Color Options
Current: `teal-600` (professional blue-green)

Alternatives:
- `blue-600` (trust, corporate)
- `green-600` (growth, data)
- `gray-700` (ultra-minimal)

Avoid: purple, indigo, pink (too consumer/creative)

### Adding Sections
Keep the structure minimal. If you must add:
- Tools/Methods page: Only if you have 5+ unique methodologies
- Writing page: Only if you have published thought leadership
- Visual page: Only if charts are central to your work

## Progressive Enhancement Ideas

### Optional Additions (if needed)
- **Downloadable case studies**: PDF export button per case
- **Filtering**: By domain (SaaS, operations, marketing)
- **Search**: If you have 10+ case studies
- **Charts**: Only when they support a decision point
- **Testimonials**: Short, specific quotes from stakeholders

### What NOT to Add
- Animations or parallax effects
- Social media links (unless relevant)
- "Latest blog posts" feed
- Skill progress bars
- Tool logos or certifications
- Dark mode toggle
- Chat widget

## Testing Your Content

Before publishing, ask:

1. **Can a non-technical person understand the business problem?**
   - If not, rewrite without jargon

2. **Would you hire yourself based on this case study?**
   - If not, add more specific constraints and findings

3. **Does each case study show different skills?**
   - Vary: exploratory analysis, experimentation, constraint reasoning, stakeholder management

4. **Are you honest about limitations?**
   - Every project should mention what you couldn't measure

5. **Is the decision clear?**
   - Hiring managers should understand the outcome in 30 seconds

## Deployment

This is a static React site with no backend. Deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static host

No environment variables needed.
No API keys required.
No database setup.

## Maintenance

Update quarterly or after major projects:
1. Replace weakest case study with stronger work
2. Refresh "Thinking" page if philosophy evolves
3. Update contact availability status

## Success Metrics

This portfolio succeeds if:
- Hiring managers read to the end of a case study
- You get interview questions about your analytical approach
- Recruiters mention specific case studies in outreach
- Technical interviewers skip basic screening questions

It fails if:
- Recruiters can't explain what you do
- Interviewers ask "but what tools do you use?"
- You're getting filtered out by ATS systems (add a simple resume page if this happens)

---

**Remember**: The goal is not to look impressive. The goal is to demonstrate clear thinking about ambiguous problems. Hiring managers who value that will find you. Those who don't, won't—and that's the filter working correctly.
