#!/usr/bin/env bash
# Build the static export and sync it to the CloudPanel site.
# Override the target with DEPLOY_HOST / DEPLOY_USER / DEPLOY_PATH.
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-164.52.209.116}"
DEPLOY_USER="${DEPLOY_USER:-churchcms-docs}"
DEPLOY_PATH="${DEPLOY_PATH:-/home/churchcms-docs/htdocs/docs.churchcms.app}"

cd "$(dirname "$0")/.."

pnpm install --frozen-lockfile
pnpm run generate-content-json
rm -rf out
pnpm run build

if [ ! -f out/index.html ]; then
  echo "Build produced no out/index.html, aborting deploy" >&2
  exit 1
fi

rsync -az --delete --human-readable --stats \
  out/ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"

echo "Deployed to https://docs.churchcms.app"
