#!/usr/bin/env node

/**
 * Automated Cache-Busting Version Updater
 * This script updates version numbers in index.html before deployment
 */

const fs = require('fs');
const path = require('path');

// Generate unique version based on current timestamp
const version = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);

console.log(`🔄 Updating cache-busting version to: ${version}`);

// Read index.html
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Update all .js and .css assets with new version
html = html.replace(/\.js\?v=\d+/g, `.js?v=${version}`);
html = html.replace(/\.css\?v=\d+/g, `.css?v=${version}`);

// Write updated HTML
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('✅ Cache-busting version updated successfully!');
console.log(`📦 Version: ${version}`);
console.log('\nCurrent asset versions:');

// Show updated versions
const assetLines = html.match(/\.(js|css)\?v=\d+/g);
if (assetLines) {
  assetLines.forEach(line => console.log(`  ${line}`));
}
