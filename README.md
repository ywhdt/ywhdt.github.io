# ywhdt.github.io

Static GitHub Pages source for project websites published under `https://ywhdt.github.io/`.

The repository is organized for multiple independent projects. Each project owns a permanent
top-level directory and all of its public pages and assets:

```text
/<project>/
├── index.html
├── en/index.html
├── support/index.html
├── privacy/index.html
└── assets/
```

English support and privacy pages live at `/<project>/en/support/` and
`/<project>/en/privacy/`. A project may omit a page that it does not need, but published URLs must
not be moved merely to make a later project look more symmetrical.

Repository-level files are shared infrastructure only:

- There is intentionally no `/index.html`. The root URL returns the neutral 404 page, and every
  public reference must use a project's direct URL.
- `/404.html` is project-neutral; `/robots.txt` and `/sitemap.xml` apply to the entire GitHub Pages
  site.
- `/.nojekyll` keeps deployment as direct static-file hosting.

Current PopTrans paths:

- Chinese product page: https://ywhdt.github.io/poptrans/
- Chinese support: https://ywhdt.github.io/poptrans/support/
- Chinese privacy policy: https://ywhdt.github.io/poptrans/privacy/
- English product page: https://ywhdt.github.io/poptrans/en/
- English support: https://ywhdt.github.io/poptrans/en/support/
- English privacy policy: https://ywhdt.github.io/poptrans/en/privacy/

For a future project, choose a permanent lowercase ASCII slug such as `caption`, create its own
top-level directory, keep its assets inside that directory, and add only completed public pages to
`sitemap.xml`. Do not create empty placeholder projects or reuse another project's assets as shared
site infrastructure.

The site has no build step, JavaScript, analytics, trackers, or external font dependency. Publish
the `main` branch from the repository root with GitHub Pages.
