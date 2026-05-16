#!/usr/bin/env bash
# ShouldIDownloadThis — one-time environment bootstrap
# Run once after cloning on a new machine (Mac or Linux).
# Claude: run this automatically via Bash if scrape_privacy.py fails with
#         an import error or a browser/playwright error.

set -e

BOLD="\033[1m"
GREEN="\033[32m"
YELLOW="\033[33m"
RED="\033[31m"
RESET="\033[0m"

ok()   { echo -e "${GREEN}✓${RESET} $*"; }
warn() { echo -e "${YELLOW}!${RESET} $*"; }
die()  { echo -e "${RED}✗${RESET} $*"; exit 1; }

echo -e "\n${BOLD}=== ShouldIDownloadThis — environment setup ===${RESET}\n"

# ── 1. Homebrew (macOS only) ───────────────────────────────────────────────────
if [[ "$OSTYPE" == "darwin"* ]]; then
    if ! command -v brew &>/dev/null; then
        warn "Homebrew not found. Installing..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        # Add brew to PATH for the rest of this script (Apple Silicon default path)
        eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null || /usr/local/bin/brew shellenv)"
    fi
    ok "Homebrew: $(brew --version | head -1)"
fi

# ── 2. Python 3.11+ ───────────────────────────────────────────────────────────
PYTHON=""
for candidate in python3 python python3.13 python3.12 python3.11; do
    if command -v "$candidate" &>/dev/null; then
        ver=$("$candidate" -c "import sys; print(sys.version_info[:2])" 2>/dev/null)
        # Accept 3.10 and above
        major=$(echo "$ver" | tr -d '(),' | awk '{print $1}')
        minor=$(echo "$ver" | tr -d '(),' | awk '{print $2}')
        if [[ "$major" -ge 3 && "$minor" -ge 10 ]]; then
            PYTHON="$candidate"
            break
        fi
    fi
done

if [[ -z "$PYTHON" ]]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        warn "Python 3.10+ not found. Installing via Homebrew..."
        brew install python
        PYTHON=python3
    else
        die "Python 3.10+ not found. Install it and re-run this script."
    fi
fi
ok "Python: $($PYTHON --version)"

# ── 3. pip ────────────────────────────────────────────────────────────────────
if ! $PYTHON -m pip --version &>/dev/null; then
    warn "pip not found. Installing..."
    curl -sS https://bootstrap.pypa.io/get-pip.py | $PYTHON
fi
ok "pip: $($PYTHON -m pip --version | awk '{print $2}')"

# ── 4. scrapling ──────────────────────────────────────────────────────────────
if ! $PYTHON -c "import scrapling" &>/dev/null; then
    warn "scrapling not installed. Installing..."
    $PYTHON -m pip install scrapling
fi
ok "scrapling: $($PYTHON -c "import scrapling; print(scrapling.__version__)" 2>/dev/null || echo 'installed')"

# ── 5. Patchright Chromium browser ────────────────────────────────────────────
# patchright is installed as a scrapling dependency; we just need the browser binary.
if ! $PYTHON -c "
from patchright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch(headless=True)
    b.close()
" &>/dev/null 2>&1; then
    warn "Patchright Chromium not found. Installing browser binary..."
    $PYTHON -m patchright install chromium
fi
ok "Patchright Chromium: installed"

# ── 6. Node.js ────────────────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        warn "Node.js not found. Installing via Homebrew..."
        brew install node
    else
        die "Node.js not found. Install it (https://nodejs.org) and re-run."
    fi
fi
ok "Node.js: $(node --version)"

# ── 7. npm dependencies ───────────────────────────────────────────────────────
if [[ ! -d node_modules ]]; then
    warn "node_modules not found. Running npm install..."
    npm install
fi
ok "npm dependencies: installed"

# ── Done ──────────────────────────────────────────────────────────────────────
echo -e "\n${BOLD}${GREEN}=== Setup complete! ===${RESET}"
echo ""
echo "  Start dev server : npm run dev"
echo "  Add a new app    : paste an App Store URL to Claude"
echo "  Run scraper      : $PYTHON scrape_privacy.py <app-store-or-policy-url>"
echo ""
