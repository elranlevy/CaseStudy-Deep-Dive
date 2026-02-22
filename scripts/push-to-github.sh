#!/bin/sh
# Run this in your terminal to push (you'll be prompted for GitHub auth if needed).
# Usage: ./scripts/push-to-github.sh   or   sh scripts/push-to-github.sh
set -e
cd "$(dirname "$0")/.."
git push origin main
echo "Pushed to https://github.com/elranlevy/CaseStudy-Deep-Dive.git"
