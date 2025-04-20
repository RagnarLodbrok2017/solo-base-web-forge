# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implemented a visually appealing client testimonials section in `index.html`.
- Integrated smooth scrolling functionality using `SmoothScroll.js` and initialized in `smooth-scroll-init.js`.
- Enhanced responsive design for testimonials and project showcase sections in `css/styles.css`.

### Changed
- Updated color variables and layout rules for improved consistency and readability.
- Optimized image loading in testimonials and project showcase sections by adding `loading="lazy"` and explicit width/height attributes to images in `index.html` to reduce layout shifts and scroll jank.
- Throttled scroll-triggered animations in `main.js` to improve scroll performance and prevent lag/jumping in the "projects-showcase" and "clients py-20 bg-white" sections.

### Fixed
- N/A

### Removed
- N/A

---

> _Changelog created on 2025-04-20._
