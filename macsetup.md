# Mac Setup — ShouldIDownloadThis

Run this **once** on a new Mac after cloning the repo. You never need to do this again on the same machine.

## Option A — Let Claude do it (recommended)

Open a Claude session in this repo and say:

> Run setup.sh to set up this machine.

Claude will run `bash setup.sh` via its Bash tool and install everything unattended.

## Option B — Run it yourself

```bash
bash setup.sh
```

## What setup.sh installs

| Tool | Purpose |
|------|---------|
| Homebrew | Mac package manager (if not already installed) |
| Python 3.10+ | Runs the privacy policy scraper |
| scrapling | Python scraping library (handles JS-heavy / copy-protected pages) |
| Patchright Chromium | Headless browser binary used by scrapling |
| Node.js | Runs the Next.js site |
| npm dependencies | `npm install` for the project |

The script is idempotent — safe to run again if something breaks.

## After setup

Verify everything works:

```bash
python3 -c "import scrapling; print('scrapling ok')"
npm run build
```

Both should complete without errors. Then start the dev server:

```bash
npm run dev
```

## Adding apps after setup

Just paste an App Store URL into Claude. It handles everything automatically — no terminal needed.
