# Codex instructions (website)

Goal: Build a fast, responsive static website for EMUS (Université de Sherbrooke) competing in MotoStudent (Spain).

Constraints:
- Static site (no backend).
- Mobile-first, accessible (semantic HTML, alt text, good contrast).
- Optimize images (use responsive sizes; do not commit gigantic originals to the main gallery uncompressed).
- Keep content editable: text lives in CONTENT.md (or content/*.md) and pages render from it.

Workflow:
1) Propose a file tree before large changes.
2) Implement in small steps (one page/section at a time).
3) After each step, run the local dev server / build and fix errors.

Deliverables:
- Pages: Home, Team, Bike/Project, Sponsors, Gallery, Contact.
- Shared layout + navigation + footer.
- Simple deployment instructions (e.g., GitHub Pages).


Color rules:
- Only use colors defined in theme.css.
- Do not introduce new hex values.
- All non-brand colors must be derived using opacity or lightness.
- If a new visual need arises, update STYLE.md first.
