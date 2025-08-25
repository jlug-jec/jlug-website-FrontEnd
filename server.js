const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Cache duration in seconds
const CACHE_DURATIONS = {
  // Static assets - 1 year
  static: 31536000,
  // Images - 1 year
  images: 31536000,
  // Fonts - 1 year
  fonts: 31536000,
  // CSS/JS - 1 year
  styles: 31536000,
  // HTML - 1 hour
  html: 3600,
  // JSON/XML - 1 day
  data: 86400,
};

// Helper function to get cache duration based on file type
function getCacheDuration(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (
    ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'].includes(ext)
  ) {
    return CACHE_DURATIONS.images;
  }

  if (['.woff', '.woff2', '.ttf', '.eot'].includes(ext)) {
    return CACHE_DURATIONS.fonts;
  }

  if (['.css', '.js'].includes(ext)) {
    return CACHE_DURATIONS.styles;
  }

  if (['.json', '.xml'].includes(ext)) {
    return CACHE_DURATIONS.data;
  }

  if (ext === '.html') {
    return CACHE_DURATIONS.html;
  }

  if (ext === '.mp4') {
    return CACHE_DURATIONS.static;
  }

  return CACHE_DURATIONS.static;
}

// Middleware to set cache headers
app.use((req, res, next) => {
  const filePath = req.path;

  // Skip cache headers for API routes
  if (filePath.startsWith('/api/')) {
    return next();
  }

  // Set cache headers based on file type
  const cacheDuration = getCacheDuration(filePath);

  if (cacheDuration > 0) {
    res.set('Cache-Control', `public, max-age=${cacheDuration}, immutable`);
  }

  // Set Accept-Ranges for video files
  if (filePath.endsWith('.mp4')) {
    res.set('Accept-Ranges', 'bytes');
  }

  // Security headers
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'DENY');
  res.set('X-XSS-Protection', '1; mode=block');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  next();
});

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out')));

// Handle client-side routing
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'out', req.path);

  // Check if the file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }

  // If file doesn't exist, serve index.html for client-side routing
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${path.join(__dirname, 'out')}`);
  console.log(`⚡ Cache headers enabled for optimal performance`);
});
