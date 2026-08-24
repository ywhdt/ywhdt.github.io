# ywhdt.github.io

Static source for project websites published under `https://ywhdt.github.io/`.

## Projects

- [PopTrans](https://ywhdt.github.io/poptrans/) — Simplified Chinese by default, with English under `/poptrans/en/`.
- [Skinfold](https://ywhdt.github.io/skinfold/) — English by default, with Simplified Chinese and Japanese locale paths.

The root URL intentionally has no project homepage and returns a neutral 404 page.

## Layout

```text
/<project>/
├── index.html
├── <locale>/index.html
├── support/index.html
├── privacy/index.html
└── assets/
```

Each project owns a permanent lowercase directory and keeps its pages and assets inside it. The
project root is its default language; other languages use explicit locale directories. Published
URLs remain stable.

`404.html`, `robots.txt`, `sitemap.xml`, and `.nojekyll` are shared site infrastructure.

## Publishing

GitHub Pages publishes direct static files from the `main` branch and repository root. There is no
build step. Add only completed canonical pages to the shared `sitemap.xml`.
