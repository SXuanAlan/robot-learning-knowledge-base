# Robot Learning Knowledge Base

A bilingual (中文 / English) guide to robot learning, with technical comparisons, equations, paper figures and project videos.

**Website:** https://SXuanAlan.github.io/robot-learning-knowledge-base/

Topics include Deep Reinforcement Learning, Manipulation Policies & Skills, Locomotion & Whole-Body Control, VLA, World Models, Agentic Robotics, Data & Scaling, Simulation & Evaluation, and Physical AI companies.

## Build locally

Use Node.js 24. No package installation is required.

```sh
node build.mjs
```

Open `index.html` directly, or preview any generated article HTML. Styles, scripts, figures and video posters are bundled into each page. LaTeX is rendered to MathML at build time with the vendored KaTeX library. Videos stream from their original project hosts.

## Edit content

- `src/`: authored pages. Run the build after editing.
- `05-agentic-robotics/index.html`: standalone article maintained directly.
- `assets/`: shared styles, interactions, reference catalogs and credited media assets.
- `math.mjs`: LaTeX rendering.
- `build.mjs`: standalone HTML generation.

The repository contains website material only; the original research notebook and local planning notes are outside the published source.

## GitHub Pages

Every push to `main` runs `.github/workflows/pages.yml`. The workflow builds the site, stages the 20 standalone pages, and deploys them to GitHub Pages. It can also be run manually from the Actions tab.

To prepare the same deployment locally:

```sh
node publish.mjs
```

The generated `_site/` directory is the deployment artifact. Source files, build tools and local planning notes are not included in the Pages artifact. All navigation uses relative paths so the site works under the repository URL.

## Attribution

Paper figures, project videos and other third-party material are credited alongside their use. Extracted paper figures also have a source manifest in `assets/papers/sources.json`. KaTeX's license is retained in `vendor/katex/LICENSE`.
