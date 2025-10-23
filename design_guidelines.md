# Centax Landing Page Design Guidelines

## Design Approach
Reference-Based Approach inspired by modern fintech applications (Stripe, Plaid) with AI product storytelling (Linear, Notion). Focus on trust-building through clean design, smooth scroll animations, and conversational AI demonstration.

## Typography System

**Primary Font (Headlines):** Gloock
- Hero headline (h1): 56px/64px, weight 400
- Section headlines (h2): 40px/48px, weight 400
- Use for brand wordmark and major headlines to convey trust and sophistication

**Secondary Font (Body & UI):** DM Sans
- Body text: 18px/28px, weight 400
- Subheadlines: 24px/32px, weight 500
- Button text: 16px/24px, weight 600
- Clean, modern sans-serif for readability

## Layout & Spacing System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-6 for cards
- Container max-width: max-w-7xl with px-6 horizontal padding

**Grid System:**
- Features section: 2-column grid (md:grid-cols-2) with 3-4 items
- Benefits section: Single column cards with icons
- Mobile: Always single column (grid-cols-1)

## Hero Section

**Layout:**
- Full-width section with centered content (max-w-4xl)
- Five-color gradient background: primaryLight → primaryLight → primaryMedium → primaryStrong → primary (diagonal 135deg)
- Headline + subheadline + dual CTA buttons
- Floating visual elements (receipt cards, pie charts) with subtle parallax motion
- Height: 90vh minimum with natural content flow

**Content Hierarchy:**
- Brand wordmark "Centax" in Gloock (prominent but not oversized)
- Headline: "Your AI-Assisted Personal Accountant"
- Subheadline: Multi-line description (max-w-2xl centered)
- CTA buttons: Primary "Download the App" + Secondary "Join Early Access"

**Animations:**
- Headline: Fade-in from bottom (translateY(20px) → 0) on load
- Subheadline: Delayed fade-in (0.3s delay)
- CTAs: Slide-up reveal (0.5s delay)
- Floating cards: Continuous subtle parallax on scroll

**Images:**
- Mockup illustrations showing dashboard, receipts, and category tags
- Floating card visuals with subtle drop shadows
- Style: Clean, modern UI mockups with rounded corners

## Section 1: Problem → Solution

**Layout:**
- Two-column layout (text left, visual right on desktop)
- Sticky text container with scroll-triggered image transitions
- py-32 vertical spacing

**Content:**
- Headline: "Self-employed finances are complicated. Centax makes them simple."
- Body paragraph with problem statement
- Animated dashboard mockup cycling through three states:
  1. "All Accounts Linked"
  2. "Your Tax Deductions Found"
  3. "This Month's Insights"

**Animations:**
- Text fades in when 80% in viewport
- Dashboard images crossfade every 3 seconds
- Scroll-triggered morphing between states

## Section 2: Core Value Props (Three Pillars)

**Layout:**
- Three cards in single column (stacked)
- Each card: icon + headline + description
- White background cards with subtle drop shadow (shadow-sm)
- Generous padding (p-8)

**Cards:**
1. **💸 All Your Finances, Unified** - Plaid integration visual
2. **🧾 Smarter Tax Savings** - Receipt/deduction scanning illustration  
3. **🤖 AI That Knows You** - Chatbot/AI assistant visual

**Styling:**
- Icons in accent color (rgba(11,153,177,1))
- Headlines in Gloock, 32px
- Body text in DM Sans, 18px
- Rounded corners (rounded-xl)

**Animations:**
- Sequential slide-in from right (stagger by 0.2s)
- Trigger at 70% viewport visibility

## Section 3: Features Snapshot

**Layout:**
- 2-column grid (md:grid-cols-2, gap-8)
- 7 feature cards total
- Clean white cards with light drop shadows

**Each Card Contains:**
- Accent-colored icon (left aligned)
- Feature title (DM Sans, 20px, weight 600)
- Brief description (DM Sans, 16px)
- Padding p-6, rounded-lg

**Features List:**
1. 🔗 Bank Account Linking
2. 🧮 Automatic Categorization
3. 🪄 Tax Deduction Detection
4. 📊 Budgeting & Forecasting
5. 💬 AI Chatbot
6. 🔔 Alerts & Reminders
7. 📈 Reports & Insights

**Animations:**
- Fade-in with slide-up (translateY(40px) → 0)
- Sequential stagger (0.1s delay per card)

## Section 4: AI Assistant Spotlight

**Layout:**
- Dark background section (transition from white)
- Centered chat interface mockup (max-w-3xl)
- Headline above, body text below mockup

**Visual:**
- Animated chat bubble interface showing:
  - User message: "Can I write off my laptop?"
  - AI typing indicator (animated dots)
  - AI response: Simplified IRS explanation
- Messages appear sequentially with fade-in

**Styling:**
- Dark background using backgroundSecondary → accentStrong gradient
- Chat bubbles with rounded corners
- User messages: right-aligned, primaryStrong background
- AI messages: left-aligned, accent background with white text

**Animations:**
- Background color transition on scroll entry
- Sequential message reveals (1s between each)
- Typing indicator animation (pulsing dots)

## Section 5: Security & Trust

**Layout:**
- Centered content (max-w-3xl)
- Icon + headline + body text
- Subtle background pattern (cloud/lock outlines in accentLight)

**Content:**
- Lock + cloud icon combination in accentStrong
- Headline: "Bank-level security. Tax-level precision."
- Trust badges: Plaid, Firebase, Google Cloud logos
- Body text explaining encryption and data protection

**Animations:**
- Icon fade-in with scale (0.8 → 1)
- Text vertical reveal
- Parallax background pattern

## Section 6: Sticky CTA Footer

**Layout:**
- Sticky bottom bar that slides up on final scroll
- Full-width with centered content
- Dual CTA buttons + headline

**Styling:**
- White background with subtle top border shadow
- Gradient button using buttonGradientStart → buttonGradientEnd
- Primary CTA: "Get Early Access" (gradient fill)
- Secondary CTA: "Download the App" (outline)

**Animation:**
- Slides up from bottom (translateY(100%) → 0) when user reaches 80% scroll
- Sticky positioning: remains visible during scroll-up

## Component Library

**Buttons:**
- Primary: Gradient fill (buttonGradientStart → buttonGradientEnd), white text, px-8 py-4, rounded-full
- Secondary: Border only (primaryStrong), primaryStrong text, px-8 py-4, rounded-full
- Hover: Slight scale (1.05) and shadow increase
- Buttons on images: Backdrop blur (backdrop-blur-md) with semi-transparent background

**Cards:**
- Background: White (#FFFFFF)
- Border radius: rounded-xl (12px)
- Shadow: shadow-sm default, shadow-md on hover
- Padding: p-6 to p-8 depending on content density

**Icons:**
- Use Heroicons via CDN
- Size: 24px standard, 32px for featured sections
- Color: accent (rgba(11,153,177,1)) for primary, accentStrong for emphasis

## Scroll Animations Implementation

**Intersection Observer Pattern:**
- Trigger animations at 80% viewport visibility
- Use opacity + transform combinations
- Stagger delays for sequential elements (0.1-0.2s)

**Animation Types:**
- Fade-in: opacity 0 → 1
- Slide-up: translateY(40px) → 0
- Slide-right: translateX(100px) → 0
- Scale: scale(0.95) → 1

**Performance:**
- Use CSS transforms (not position changes)
- Limit parallax to hero section only
- Debounce scroll listeners
- Prefer CSS transitions over JavaScript where possible

## Images

**Hero Section:**
- Large: Dashboard mockup with financial data (floating, subtle parallax)
- Supporting: Floating receipt cards, pie chart visuals, category icons
- Style: Clean UI screenshots with rounded corners, subtle shadows

**Features Section:**
- Icon-based illustrations for each feature
- Plaid connection flow diagram
- Tax deduction highlighting visual

**AI Section:**
- Chat interface mockup showing conversation
- Mobile phone frame optional

**Trust Section:**
- Lock icon, cloud infrastructure illustration
- Partner logos (Plaid, Firebase, Google Cloud)

All images should have rounded corners (rounded-lg to rounded-xl) and subtle drop shadows for depth.