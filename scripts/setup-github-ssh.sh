#!/bin/sh
# One-time setup: use SSH so you never have to enter GitHub credentials again.
# Run: ./scripts/setup-github-ssh.sh

set -e
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
KEY_FILE="$HOME/.ssh/id_ed25519_github"
PUB_FILE="${KEY_FILE}.pub"

echo "=== GitHub SSH setup for CaseStudy-Deep-Dive ==="
echo ""

# 1. Generate SSH key if it doesn't exist
if [ ! -f "$PUB_FILE" ]; then
  echo "Creating new SSH key at $KEY_FILE"
  mkdir -p "$HOME/.ssh"
  chmod 700 "$HOME/.ssh"
  ssh-keygen -t ed25519 -C "github-elranlevy-casestudy-deep-dive" -f "$KEY_FILE" -N ""
  echo "Key created."
else
  echo "SSH key already exists: $PUB_FILE"
fi

# 2. Print public key – add this to GitHub
echo ""
echo "--- Add this key to GitHub (one time) ---"
echo "1. Open: https://github.com/settings/ssh/new"
echo "2. Title: e.g. MacBook CaseStudy-Deep-Dive"
echo "3. Key: paste the lines below, then click Add SSH key"
echo ""
cat "$PUB_FILE"
echo ""
echo "--- end of key ---"

# 3. Use SSH for this repo
cd "$REPO_DIR"
git remote set-url origin git@github.com:elranlevy/CaseStudy-Deep-Dive.git
echo ""
echo "Remote updated to SSH. After adding the key above to GitHub, run:"
echo "  git push origin main"
echo ""
echo "To test: ssh -T git@github.com"
