# 🔄 Quick Cache-Busting Guide

## Before EVERY deployment to GitHub Pages:

### Step 1: Update Version Numbers
```bash
./update-cache-version.sh
```
or
```bash
node update-cache-version.js
```

### Step 2: Commit and Push
```bash
git add index.html
git commit -m "Update cache version"
git push origin main
```

## That's it! ✅

Your users will now **automatically** see the latest version on **all devices** without clearing their cache.

---

## What's Implemented:

✅ **HTTP Cache Headers** - HTML never cached  
✅ **Timestamped Versions** - Unique URLs for assets (JS/CSS)  
✅ **Mobile Support** - Works on iOS, Android, all browsers  
✅ **Automated Scripts** - One command updates everything  

## Current Version:
Check with: `grep "\.js?v=" index.html`

## Full Documentation:
See `DEPLOYMENT.md` for complete details and troubleshooting.
