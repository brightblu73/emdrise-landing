# 🚀 Deployment Guide - Cache-Busting System

## Overview
This site implements a robust cache-busting system to ensure users always see the latest version without manually clearing their browser cache.

## ✅ Cache-Busting Features Implemented

### 1. **HTTP Meta Tags** (Already in index.html)
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```
- Prevents browsers from caching the HTML file
- Forces fresh fetch on every page load

### 2. **Asset Versioning** (Query String Method)
All CSS and JS files include version numbers:
```html
<script src="/assets/index-DOH7Q0Gz.js?v=20251017161536"></script>
<link rel="stylesheet" href="/assets/index-BxgDnp-o.css?v=20251017161536">
```
- Unique version = unique URL = bypasses browser cache
- Version format: `YYYYMMDDHHmmss` (timestamp down to the second)

## 📋 Deployment Workflow

### Before Every GitHub Push:

#### **Option 1: Using the Bash Script** (Recommended for Mac/Linux)
```bash
./update-cache-version.sh
```

#### **Option 2: Using the Node.js Script** (Cross-platform)
```bash
node update-cache-version.js
```

#### **Option 3: Manual Update**
1. Generate new version: `date +%Y%m%d%H%M%S`
2. Update all `?v=` query strings in `index.html` with new version

### Then Deploy:
```bash
git add .
git commit -m "Deploy with cache-busting v$(date +%Y%m%d%H%M%S)"
git push origin main
```

## 🔄 Automated Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy with Cache Busting

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Update cache version
        run: |
          VERSION=$(date +%Y%m%d%H%M%S)
          sed -i "s/\.js?v=[0-9]\+/\.js?v=$VERSION/g" index.html
          sed -i "s/\.css?v=[0-9]\+/\.css?v=$VERSION/g" index.html
      
      - name: Commit and push
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add index.html
          git commit -m "Auto-update cache version" || exit 0
          git push
```

## 🧪 Testing Cache-Busting

### Test 1: Verify HTML is Not Cached
1. Open Developer Tools → Network tab
2. Load the page
3. Check the `index.html` response headers:
   - Should see `Cache-Control: no-cache, no-store, must-revalidate`

### Test 2: Verify Assets Use Unique URLs
1. View page source
2. Confirm all `.js` and `.css` files have `?v=` query strings
3. Each version should be unique (timestamp-based)

### Test 3: Mobile Testing
1. Open site on mobile device
2. Make a change and deploy with new version
3. Reload the mobile page → should see new changes immediately

### Test 4: Force Cache Test
1. Load the page normally
2. Run the update script to change version
3. Push to GitHub Pages
4. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
5. Verify new version loaded (check Network tab)

## 📱 Mobile Cache Clearing (Fallback)

If users still see old content:

### iOS Safari:
Settings → Safari → Clear History and Website Data

### Android Chrome:
Settings → Privacy → Clear browsing data → Cached images and files

## ⚡ Best Practices

1. **Always run the version update script before pushing to GitHub**
2. **Never manually edit version numbers** - use the scripts
3. **Commit the updated index.html** with the new version
4. **Test on mobile** after each deployment
5. **Monitor GitHub Pages deployment** to ensure it completes

## 🔍 Troubleshooting

### Issue: Users still see old version
**Solution:** 
- Verify version number changed in deployed `index.html`
- Check GitHub Pages deployment completed successfully
- Clear CDN cache if using Cloudflare or similar

### Issue: Script doesn't update versions
**Solution:**
- Check script has execute permissions: `chmod +x update-cache-version.sh`
- Verify regex patterns match your HTML structure
- Run with verbose output to debug

### Issue: Mobile devices cache aggressively
**Solution:**
- Ensure meta tags are in `<head>` section
- Add `.htaccess` rules if using Apache (not needed for GitHub Pages)
- Consider service worker cache clearing if applicable

## 📊 Version History Tracking

To track which version is deployed:
```bash
grep "\.js?v=" index.html
```

Expected output:
```
<script src="/assets/index-DOH7Q0Gz.js?v=20251017161536"></script>
```

## 🎯 Summary

✅ HTTP cache headers prevent HTML caching  
✅ Query string versioning prevents asset caching  
✅ Automated scripts ensure unique versions  
✅ Works on all devices (desktop, mobile, tablet)  
✅ No manual cache clearing needed for users
