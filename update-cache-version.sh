#!/bin/bash

# Automated Cache-Busting Version Updater
# This script updates version numbers in index.html before deployment

# Generate a unique version based on current timestamp (down to the second)
VERSION=$(date +%Y%m%d%H%M%S)

echo "🔄 Updating cache-busting version to: $VERSION"

# Update version in index.html for all assets
sed -i.bak "s/\\.js?v=[0-9]\+/\.js?v=$VERSION/g" index.html
sed -i.bak "s/\\.css?v=[0-9]\+/\.css?v=$VERSION/g" index.html

# Clean up backup file
rm -f index.html.bak

echo "✅ Cache-busting version updated successfully!"
echo "📦 Version: $VERSION"
echo ""
echo "Current asset versions:"
grep -E "\.(js|css)\?v=" index.html | sed 's/^[ \t]*/  /'
