# Portfolio refresh notes

## What changed
- Rebuilt the hero around a real interactive Three.js scene (React Three Fiber): animated wireframe/metallic core, orbital rings, stars, and sparkles.
- Added a clearer introduction, rotating role label, opportunity indicator, stronger calls to action, and working GitHub/LinkedIn/email links.
- Added a responsive two-column desktop layout that stacks on mobile, a subtle technical grid, improved typography, and reduced-motion support.
- Updated page title, theme color, and search description metadata.
- Kept the existing About, Skills, Experience, Projects, Certifications, Achievements, Contact, and Footer components in place.

## Run locally
1. Install Node.js (use a version supported by the current Vite release).
2. Extract this project folder.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed in the terminal.
5. Run `npm run build` to create a production build.

## Before publishing
- Replace `#` project repository links in `src/components/Projects.jsx` with the real project URLs.
- Add a real resume PDF and connect a download link if you want a resume button.
- Verify all profile/contact URLs and the project descriptions are up to date.
