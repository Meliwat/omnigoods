# omnigoods

Static site for **Omni Good Enterprise** — sells "How to Start" ebooks at [omnigoodenterprise.com](https://omnigoodenterprise.com).

## Stack

Plain HTML/CSS/JS. No build step. Hosted on Vercel — auto-deploys on push to `main`.

## Files

- `index.html` — page structure
- `styles.css` — all styling
- `script.js` — minimal interactivity (toast, newsletter handler, scroll reveals)

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

```bash
bunx vercel deploy --prod
```

(or just push to `main` once the repo is connected to the Vercel project)

## Edit the maker's letter

Search `index.html` for `[Your name]` and `[city]`.
