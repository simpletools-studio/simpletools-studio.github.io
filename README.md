# SimpleTools website

The public website for SimpleTools, an independent collection of Unity packages.

**Website:** https://doruktan.github.io/simple-tools-webpage/

## Packages

- **SimpleTransform** — Scene-view authoring for position, rotation, and scale sequences, Bezier paths, easing, events, and moving platforms. In development; public repository links are not yet available.
- **SimpleBlend** — Vertex painting and URP material-layer blending. [Repository](https://github.com/DorukTan/SimpleBlend).
- **Supabase for Unity** — A Unity C# client for authentication, database, realtime, storage, and Edge Functions. [Repository](https://github.com/DorukTan/unity-supabase).

The site explains use cases, included capabilities, compatibility, and requirements. Detailed views support direct links, keyboard navigation, Escape, and browser history. No videos or interactive demos are included.

## Local preview

This is a static HTML/CSS/JavaScript site. No dependencies or build step are required.

```sh
python -m http.server 5500 --bind 127.0.0.1
```

Open http://127.0.0.1:5500/ or open index.html directly.

## Editing

- `index.html`: homepage content and package/About/Support detail templates.
- `styles.css`: responsive visual styling.
- `script.js`: detail navigation, configuration, and install-link copying.
- `config.js`: optional, publisher-supplied Asset Store product URL and support email.
- `assets/`: original SimpleTools branding and the generated product illustration.

Product and contact settings are blank until supplied by the publisher. Never add credentials or secret keys to this static website; every published file is public.

Increment stylesheet/script version queries after updates so visitors receive the latest files. The product illustration is conceptual artwork, not a screenshot of the packages.

## Publishing

GitHub Pages serves the root of the `main` branch. `.nojekyll` keeps the site as plain static files. Push changes to `main` to publish them. All assets use relative URLs so repository-subfolder hosting works.

## Project status

Descriptions follow package documentation. SimpleBlend remains a beta with URP compatibility boundaries documented in its repository. Supabase hosting and configuration are separate from its client SDK. Check the linked documentation for current requirements and platform support.

SimpleTools is independently published and is not affiliated with Unity Technologies or Supabase. Names and trademarks identify compatibility. Brand assets and artwork are not granted an open-source license by this repository.
