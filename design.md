# Portfolio Design System & AI Guidelines

## 1. Persona & Vibe
*   **Role:** Backend-Focused Software Engineer (Java, Spring Boot, Microservices, AWS).
*   **Vibe:** Engineered, structured, highly readable, and professional. 
*   **Design Philosophy:** Function over form. The design should feel like well-written backend code—clean, efficient, and perfectly spaced. No flashy "vibe-coded" elements.

## 2. Typography
*Avoid default AI fonts like Inter or standard Roboto.*
*   **Headings (H1 - H4):** `Plus Jakarta Sans` or `Geist` — Clean, modern sans-serif with strong geometric structure.
*   **Body Text:** `Work Sans` or `DM Sans` — Highly legible for paragraphs and descriptions.
*   **Technical/Skills/Code Elements:** `JetBrains Mono` or `Fira Code` — Use exclusively for skill badges (e.g., "Java", "Spring Boot", "PostgreSQL") to immediately establish the backend developer aesthetic.

## 3. Color Palette
*Strictly avoid generic AI gradients (especially purple/blue) and neon glowing colors.*
*   **Background (Body):** `#FAFAFA` (Off-white/warm gray) - Keeps it soft on the eyes.
*   **Surface (Cards/Containers):** `#FFFFFF` (Pure white) for high contrast against the background.
*   **Primary Text:** `#111827` (Near black) for stark, crisp readability.
*   **Secondary Text:** `#4B5563` (Muted gray) for dates, locations, and subheadings.
*   **Accent Color (Buttons/Links):** `#2A433A` (Dark muted forest green) - Matches the existing "Get In Touch" button. Professional and grounded.
*   **Footer Background:** `#18181B` (Zinc 900) - Sharp contrast to visually anchor the bottom of the page.
*   **Borders/Dividers:** `#E5E7EB` (Light gray) - Use for structural lines and card outlines.

## 4. Spacing & Layout Rules
*Enforce symmetric, mathematically sound spacing.*
*   **Grid:** Adhere to a strict 8pt grid system for all padding and margins.
*   **Section Padding:** `py-24` (96px) vertical spacing between major sections (Work Experience, Projects, Skills) to allow the content to breathe.
*   **Card Padding:** `p-6` (24px) uniform padding inside all Project and Skill cards.
*   **Alignment:** Keep the Hero section centered. Keep Work Experience and Project content left-aligned for readable information density.
*   **Skill Grid:** Maintain the categorized masonry/grid layout for Technical Skills (Languages, Backend, Frontend, Databases). Do not use floating word clouds.

## 5. UI Components
*   **Buttons:** Flat design. Solid accent color background, pure white text. 4px border-radius (slightly rounded, but not pill-shaped).
*   **Skill Badges/Tags:** White background, 1px solid light gray border, 4px border-radius. Text must be the monospaced font.
*   **Cards:** 1px solid light gray border. **No heavy drop shadows.** If a hover state is needed, use a very subtle `shadow-sm` or slight border color darken. 
*   **Icons:** Avoid generic AI defaults like Lucide. Use **Tabler Icons** or **Phosphor Icons**. Keep stroke width consistent (1.5px) and strictly monochromatic (black or dark gray). 

## 6. ANTI-SLOP Directives (Crucial for AI Agent)
*   **NO Glowing Lights:** Absolutely no background radial gradients, blurred colored blobs, or floating orbs.
*   **NO Glassmorphism:** Avoid heavy backdrop blurs or semi-transparent frosted glass containers.
*   **NO Uneven Spacing:** Ensure padding is perfectly equal on top/bottom and left/right inside buttons and cards.
*   **NO Unprompted Status Badges:** Do not add "Open to work" blinking green dots or unnecessary visual clutter unless explicitly requested.
*   **NO AI Illustrations:** If imagery is needed, use actual screenshots, architectural diagrams, or high-quality photos. Do not generate 3D/vector illustrations.