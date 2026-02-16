# Specification

## Summary
**Goal:** Build a single-page dark, minimal split-layout portfolio with a dimmed full-screen background, a rotating vinyl + audio play/pause control, and glassmorphism category overlays.

**Planned changes:**
- Add full-viewport background image support using `bg.png` with a dimming treatment and white/near-white typography for readable contrast.
- Implement a responsive Flexbox split layout: left column (title, tagline, interactive categories) and right column (vinyl UI), stacking appropriately on small screens.
- Render left column content exactly: title “shibhi.studio”, cursive italic tagline “Not just for a television, Teleport to where it’s written.”, and clickable categories (Photography, Blender & Animations, Design, Electronics).
- Add interaction and accessibility affordances: hover/active styles, pointer cursor, visible focus styles, keyboard activation for categories and play/pause, and keyboard dismissal for overlays.
- Display `vinyl.png` prominently on the right and animate smooth continuous rotation only while audio is playing (pause rotation when audio pauses).
- Add a centered play/pause toggle button over the vinyl to control MP3 playback and the rotation state, with a clear play vs pause indicator.
- Implement per-category glassmorphism overlay panels with backdrop blur and dynamically selected content based on the clicked category, including dismissal via close/outside click and/or Escape.
- Reference all static assets (`bg.png`, `vinyl.png`, MP3) using paths that work when deployed under a non-root base path (subpath hosting).

**User-visible outcome:** Users see a dark experimental portfolio page with a dimmed background, can play/pause an MP3 via a centered button on a rotating vinyl, and can open/close glassmorphism overlays with dynamic content for each category (mouse or keyboard), with assets loading correctly under subpath hosting.
