# BlueForge — Enterprise IT Website (Frontend)

A modern, animated, enterprise-grade IT company website built with React, Tailwind CSS, GSAP, and React Three Fiber (with Drei). Includes mock data and routing to simulate a full product/services site. 3D hero uses a Spline scene for visual depth.

## Tech Stack
- React (Vite)
- Tailwind CSS
- GSAP (animations, scroll reveals)
- React Three Fiber + Drei (3D)
- React Router
- Mock data (local JS modules)

## Getting Started
1. Install dependencies and run the dev server:
   - npm install
   - npm run dev
2. Open the preview URL shown in the terminal.

## Project Structure
- components — layout and UI building blocks
- pages — routed screens
- sections — home page sections
- data — mock data for products, services, and case studies
- three — small 3D components for product previews

## Mock Data
All data is stored in `/src/data/*.js` and imported by pages/sections. Replace with real API calls later.

## 3D & Performance
- Hero uses Spline; 3D previews are lazy and minimal.
- R3F scenes use lightweight materials and orbit controls disabled where not needed.

## Environment
- Tailwind is pre-configured.
- No backend required; swap mock data imports with API calls when ready.

## Notes
- This is frontend-only. Forms use mock submit handlers with success messages.
- Animations are tuned for smoothness; adjust timings and thresholds to preferences.
