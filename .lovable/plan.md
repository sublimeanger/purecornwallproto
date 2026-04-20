
## Logo + Footer refinement

Two clear fixes based on client feedback.

### 1. Header logo — make it readable

Currently the logo sits at 60px tall in a 90px header bar — too small to read "Cornwall". Bump it up substantially:

- **Header height**: 90px → 120px (gives breathing room)
- **Logo height**: 60px → 96px (60% larger, makes "Cornwall" legible)
- Keep nav vertically centred alongside it
- Mobile: logo scales to ~72px (still readable, doesn't dominate small screens)

This keeps the existing top-left placement (consistent with Cornish Secrets / Unique Home Stays) rather than moving it to a centred banner — centring would force a full layout rework of the nav and feels more "wedding invitation" than "luxury rentals."

### 2. Footer — separate the bottom strip + lift the gold

The gold sign-off line is currently lost against the dark teal. Two-part fix:

**a) Split the footer into two tones (Cornish Secrets pattern)**

- **Upper footer** (4 columns + sign-off): stays `bg-brand-dark` (#2f5550)
- **Lower bar** (copyright + legal links): becomes `bg-white` with `text-brand-body` (#3a3a3a), separated by a 1px gold rule
- Legal link hover: `text-brand-teal`

This gives the gold line and italic sign-off proper contrast, and the white strip adds the editorial "page break" feel the client referenced.

**b) Add a subtle wave watermark**

- Decorative SVG wave motif positioned bottom-right of the upper footer
- Sized ~280px wide, gold (#d3a36e) at 8% opacity
- Pointer-events none, sits behind content
- Same wave language already used on the Facilities section of the property page — keeps brand consistency

### Files to edit
- `src/components/Header.tsx` — header height + logo size
- `src/components/Footer.tsx` — split tonal layout, wave watermark SVG, restyled bottom bar
