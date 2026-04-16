

## Make both heroes taller and more impactful

**Homepage Hero (`Hero.tsx`)**
- Change from `height: "clamp(400px, 60vh, 680px)"` to `height: "clamp(500px, 80vh, 900px)"`
- This gives it real presence — nearly full-screen on most viewports

**Property Hero (`PropertyHero.tsx`)**
- Change from `minHeight: "70vh"` to `minHeight: "85vh"` (both on the section and the inner content div)
- Creates a more cinematic, full-bleed feel matching premium property sites

Both changes are single-line edits. The parallax and content positioning all remain the same.

