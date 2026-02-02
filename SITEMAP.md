# Portfolio Sitemap & Structure

## Site Map

```
sarahchen.com/
│
├── / (Home)
│   ├── Positioning statement
│   ├── Featured case study #1 → /case/pricing-experiment
│   ├── Featured case study #2 → /case/churn-attribution
│   ├── Featured case study #3 → /case/attribution-model
│   └── Featured case study #4 → /case/warehouse-efficiency
│
├── /thinking (About)
│   ├── "Most analysis fails before it starts"
│   ├── "Uncertainty is information"
│   ├── "Speed is a feature"
│   ├── "Context beats credentials"
│   └── Background + Contact
│
└── /case/:id (Dynamic Case Study Page)
    ├── Problem Statement
    ├── Constraints & Assumptions
    ├── Analytical Approach
    ├── Key Findings
    ├── Decision / Recommendation
    └── What I Would Do Next
```

## Page-by-Page Structure

### Homepage (`/`)

**Purpose**: Communicate who you are and showcase 3-4 strongest projects in 10 seconds

**Structure**:
```
┌────────────────────────────────────────┐
│ [Navigation: Sarah Chen | Work Thinking]│
└────────────────────────────────────────┘

    Positioning Statement (1 sentence)
    ─────────────────────────────────────
    I turn ambiguous questions into
    decisions backed by evidence.

    Supporting sentence (context/philosophy)
    ─────────────────────────────────────
    Most data work isn't about fancy models...


    SELECTED WORK
    ─────────────────────────────────────

    │ Case Study 1 Title
    │ One-line problem statement that shows
    │ the business context and challenge.
    │ View case study →

    │ Case Study 2 Title
    │ One-line problem statement...
    │ View case study →

    │ Case Study 3 Title
    │ One-line problem statement...
    │ View case study →

    │ Case Study 4 Title
    │ One-line problem statement...
    │ View case study →

┌────────────────────────────────────────┐
│ Footer: Contact/Availability           │
└────────────────────────────────────────┘
```

**Content Requirements**:
- Positioning statement: No buzzwords, shows unique value
- 3-4 case studies (not 10, not 2)
- Each preview must show business problem, not technical task
- Case studies should demonstrate different analytical skills

---

### Case Study Page (`/case/:id`)

**Purpose**: Demonstrate structured thinking, honest constraint assessment, and decision impact

**Structure**:
```
┌────────────────────────────────────────┐
│ [Navigation: Sarah Chen | Work Thinking]│
└────────────────────────────────────────┘

    Case Study Title
    ─────────────────────────────────────
    Context subtitle (domain, timeline)


    PROBLEM STATEMENT
    ─────────────────────────────────────
    3-5 lines describing:
    - Business situation
    - Why this mattered
    - The actual question to answer


    CONSTRAINTS & ASSUMPTIONS
    ─────────────────────────────────────
    • First constraint (data quality, sample size, etc.)
    • Second constraint (time, political, access)
    • Third constraint (methodology limitations)
    • Fourth constraint (bias or measurement issues)
    • Fifth constraint (tradeoffs made)


    ANALYTICAL APPROACH
    ─────────────────────────────────────
    2-4 paragraphs explaining:
    - Why this approach vs alternatives
    - Key analytical decisions
    - What you chose NOT to do (and why)
    - How you handled uncertainty


    KEY FINDINGS
    ─────────────────────────────────────
    │ Finding 1: Specific, quantified insight

    │ Finding 2: Counterintuitive discovery

    │ Finding 3: Pattern or relationship

    │ Finding 4: What you couldn't determine


    DECISION / RECOMMENDATION
    ─────────────────────────────────────
    ┌─────────────────────────────────┐
    │ Recommendation made             │
    │                                 │
    │ Actual outcome / implementation │
    │                                 │
    │ Business impact (if measurable) │
    └─────────────────────────────────┘


    WHAT I WOULD DO NEXT
    ─────────────────────────────────────
    With more time/data/resources:
    • Follow-up analysis #1
    • Methodology improvement #2
    • Validation approach #3
    • Long-term tracking #4

┌────────────────────────────────────────┐
│ Footer: Contact/Availability           │
└────────────────────────────────────────┘
```

**Section Guidelines**:

**Problem Statement** (5 lines max)
- Frame as business problem, not data task
- Include stakes (why this matters)
- Show the ambiguity or tension
- Avoid: "The client wanted a dashboard..."
- Good: "Marketing spend was $200K/month but attribution was broken..."

**Constraints & Assumptions** (3-5 bullets)
- Be specific: "Only 38 customers, 6 churned" not "small sample"
- Include data quality issues
- Mention time/political constraints
- List methodology limitations
- Show what you can't measure

**Analytical Approach** (2-4 paragraphs)
- Start with reasoning, not tools
- Explain choices made
- Mention alternatives considered
- Address how you handled uncertainty
- Avoid: "I used Python and Pandas..."
- Good: "I treated this as a segmentation problem..."

**Key Findings** (3-4 bullets)
- Quantify when possible
- Include surprises or counterintuitive results
- Mention what you couldn't determine
- Show nuance (not just "this went up")
- Avoid vague statements

**Decision / Recommendation** (highlighted box)
- Clear recommendation
- Actual implementation (what happened)
- Business outcome if available
- Avoid: "I recommended improvements"
- Good: "I recommended against the 20% discount. Instead..."

**What I Would Do Next** (3-5 bullets)
- Shows scope awareness
- Demonstrates you know limits of analysis
- Suggests natural follow-ups
- Not generic ("more data") - be specific

---

### About/Thinking Page (`/thinking`)

**Purpose**: Show analytical philosophy and demonstrate you've thought deeply about the work

**Structure**:
```
┌────────────────────────────────────────┐
│ [Navigation: Sarah Chen | Work Thinking]│
└────────────────────────────────────────┘

    How I Think About Data Work
    ─────────────────────────────────────


    Principle #1: Most analysis fails before it starts
    ─────────────────────────────────────
    2-3 paragraphs explaining a core belief
    about analytical work, with examples


    Principle #2: Uncertainty is information
    ─────────────────────────────────────
    2-3 paragraphs on another aspect of your
    approach, showing opinionated perspective


    Principle #3: Speed is a feature
    ─────────────────────────────────────
    2-3 paragraphs demonstrating practical
    wisdom from real experience


    Principle #4: Context beats credentials
    ─────────────────────────────────────
    2-3 paragraphs showing self-awareness
    and understanding of tradeoffs


    ─────────────────────────────────────


    Background
    ─────────────────────────────────────
    2-3 sentences on experience
    1 sentence on what you're looking for

    ┌─────────────────────────────────┐
    │ Contact: email@example.com      │
    └─────────────────────────────────┘

┌────────────────────────────────────────┐
│ Footer: Contact/Availability           │
└────────────────────────────────────────┘
```

**Content Requirements**:
- 3-4 core principles about analytical work
- Each principle: claim + explanation + example
- Opinionated but not preachy
- Shows you've thought about the work, not just done it
- Background: previous roles, current focus
- Contact info in dedicated box

---

## Navigation Flow

```
User Journey #1: Hiring Manager Reviewing Portfolio
┌─────────────┐
│   Land on   │  ← Positioning statement determines interest
│    Home     │
└──────┬──────┘
       │
       ├→ Skim case study titles
       │
       ├→ Click most relevant case
       │  ┌──────────────┐
       │  │  Case Study  │ ← Read Problem + Constraints
       │  │     Page     │   If interesting → read full case
       │  └──────┬───────┘   If not → back to home
       │         │
       │         ├→ Read through all sections
       │         └→ Assess analytical thinking
       │
       └→ Check "Thinking" page
          ┌──────────────┐
          │    About     │ ← Confirm philosophy alignment
          └──────────────┘

Decision point: Request interview or move on
```

```
User Journey #2: Recruiter Sourcing Candidates
┌─────────────┐
│   Land on   │  ← Need quick summary
│    Home     │
└──────┬──────┘
       │
       ├→ Read positioning statement
       ├→ Scan case study titles
       │
       └→ Check "Thinking" for background
          ┌──────────────┐
          │    About     │ ← Years of experience, domain
          └──────────────┘   Contact information

Decision point: Reach out or skip
```

---

## Content Inventory

### Required Content

**For Homepage:**
- [ ] 1 positioning statement (1 sentence, no buzzwords)
- [ ] 1 supporting paragraph (2-3 sentences)
- [ ] 3-4 case study titles (question format works well)
- [ ] 3-4 one-line problem statements

**For Each Case Study (minimum 3, ideal 4):**
- [ ] Title
- [ ] Context line (domain + timeline)
- [ ] Problem statement (3-5 lines)
- [ ] 3-5 constraints (specific, not generic)
- [ ] Analytical approach (2-4 paragraphs)
- [ ] 3-4 key findings (quantified when possible)
- [ ] Decision + outcome (1-2 paragraphs)
- [ ] Next steps (3-4 specific bullets)

**For About/Thinking:**
- [ ] Page title
- [ ] 3-4 principle sections (each with heading + 2-3 paragraphs)
- [ ] Background summary (2-3 sentences)
- [ ] Current availability (1 sentence)
- [ ] Contact email

**Global:**
- [ ] Footer text (availability or call-to-action)

### Optional Content

- Case study tags/categories (if 5+ studies)
- Resume/CV download link
- LinkedIn profile link (only if active)
- Medium/blog link (only if publishing regularly)

---

## Technical Implementation Notes

**Current Setup:**
- Single-page React app with state-based routing
- No URL routing (could add React Router later)
- All content in `src/data/caseStudies.ts`
- Completely static (no backend needed)

**Adding URL Routing (Optional Enhancement):**
```bash
npm install react-router-dom
```

Update App.tsx to use BrowserRouter:
- `/` → Home
- `/thinking` → About
- `/case/:id` → CaseStudy

Benefits: Shareable URLs, browser back button
Tradeoff: Slightly more complex, requires build config

**Current Decision:** Using state-based navigation for simplicity.
Add routing only if sharing specific case study URLs becomes important.

---

## Content Examples

### Good Positioning Statements
✓ "I turn ambiguous questions into decisions backed by evidence."
✓ "I find the truth in messy data, then explain it clearly."
✓ "I build the analysis that changes the decision."

### Poor Positioning Statements
✗ "Data analyst with 5+ years of experience"
✗ "Passionate about data-driven insights"
✗ "Expert in SQL, Python, and Tableau"

### Good Case Study Titles
✓ "Should We Discount Annual Plans?"
✓ "Why Are Enterprise Customers Churning?"
✓ "Is Our Marketing Attribution Lying to Us?"
✓ "Which Warehouse Process Is the Bottleneck?"

### Poor Case Study Titles
✗ "Pricing Analysis"
✗ "Churn Reduction Project"
✗ "Marketing Dashboard"
✗ "SQL Query Optimization"

---

## Progressive Enhancement Roadmap

**Phase 1: Launch** (Current)
- 3-4 case studies
- About page with philosophy
- Static site, no backend
- Typography-focused design

**Phase 2: Polish** (If needed)
- Add URL routing for shareable links
- PDF export per case study
- Simple case study filtering by domain
- Minor animation on hover states

**Phase 3: Scale** (Only if 10+ case studies)
- Search functionality
- Tag system for skills/domains
- "Selected works" vs "All work" separation
- Archive older case studies

**Do Not Add Unless Explicitly Needed:**
- Blog/writing section (high maintenance)
- Tool proficiency indicators (not valuable signal)
- Certifications page (put on resume instead)
- Animated charts (defeats text-first philosophy)

---

**Key Principle**: Every element should help a hiring manager answer "Can this person frame problems and make data-driven decisions?" Everything else is distraction.
