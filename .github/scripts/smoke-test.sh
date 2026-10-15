#!/bin/bash
# smoke-test.sh - Verify deployed service is alive
# Static landing page - checks root URL for 200
set -euo pipefail

# Production custom domain (onrender.com subdomain currently 404s / unused).
URL="${1:-https://swalook.in}"
echo "Smoke testing $URL..."

# Follow redirects; accept final 200 on the landing home page.
STATUS=$(curl -sL -o /tmp/smoke-body.html -w "%{http_code}" "$URL" --connect-timeout 10 --max-time 30 2>/dev/null || echo "000")
if [ "$STATUS" != "200" ]; then
  echo "FAIL: Root URL returned $STATUS"
  exit 1
fi
echo "OK: Root URL returned $STATUS"

# Confirm GA4 measurement ID is present in the HTML shell.
if ! grep -q "G-F1Z96JJDJK" /tmp/smoke-body.html; then
  echo "FAIL: Expected GA4 id G-F1Z96JJDJK not found in HTML"
  exit 1
fi
echo "OK: GA4 measurement id present"

echo "All smoke tests passed for $URL"
