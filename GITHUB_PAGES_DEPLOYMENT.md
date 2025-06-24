# GitHub Pages Deployment Guide

This guide explains how to deploy your React application to GitHub Pages and how the routing works.

## Overview

The application has been configured to work with GitHub Pages using HashRouter and a custom 404.html redirect solution.

## How Routing Works

### HashRouter vs BrowserRouter

- **HashRouter**: Uses URL hashes (#) for routing (e.g., `yoursite.com/#/github`)
- **BrowserRouter**: Uses clean URLs (e.g., `yoursite.com/github`)

GitHub Pages doesn't support server-side routing, so we use HashRouter to ensure all routes work correctly.

### URL Structure

With HashRouter, your URLs will look like this:

- Home: `yoursite.com/#/`
- Projects: `yoursite.com/#/projects`
- GitHub: `yoursite.com/#/github`
- Blog: `yoursite.com/#/blog`
- Admin: `yoursite.com/#/admin`

## Deployment Steps

### 1. Build the Application

```bash
npm run build
```

This creates a `dist` folder with the production build.

### 2. Configure GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 3. Deploy

You can deploy using one of these methods:

#### Method 1: Manual Deployment

1. Copy the contents of the `dist` folder to your repository root
2. Commit and push the changes

#### Method 2: GitHub Actions (Recommended)

Create a GitHub Actions workflow for automatic deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Configure GitHub Pages Source

After setting up the GitHub Action:

1. Go to repository Settings > Pages
2. Change source to "Deploy from a branch"
3. Select "gh-pages" branch and "/ (root)" folder
4. Save

## Files Added for GitHub Pages

### 1. `public/404.html`

This file handles direct navigation to routes. When someone visits `yoursite.com/github` directly, GitHub Pages serves this 404.html file, which redirects to the correct hash route.

### 2. Script in `index.html`

The script in index.html handles the redirect from 404.html and restores the correct URL in the browser history.

## Testing

### Local Development

```bash
npm run dev
```

- Uses BrowserRouter for clean URLs
- Routes work as expected: `localhost:8080/github`

### Production (GitHub Pages)

- Uses HashRouter for compatibility
- Routes work as: `yoursite.com/#/github`
- Direct navigation to `yoursite.com/github` redirects to `yoursite.com/#/github`

## Troubleshooting

### Routes Not Working

1. Ensure you're using HashRouter (already configured)
2. Check that 404.html is in the public folder
3. Verify the script is in index.html
4. Make sure GitHub Pages is configured to serve from the correct branch/folder

### Build Issues

1. Run `npm run build` locally to check for errors
2. Check that all imports are correct
3. Verify that all dependencies are installed

### Deployment Issues

1. Check GitHub Actions logs for build errors
2. Ensure the gh-pages branch is created
3. Verify GitHub Pages settings point to the correct branch

## Benefits of This Setup

1. **Works with GitHub Pages**: No server configuration needed
2. **Direct Navigation**: Users can bookmark and share direct links
3. **SEO Friendly**: Search engines can crawl the content
4. **Automatic Deployment**: GitHub Actions handles deployment
5. **Fallback Support**: 404.html ensures all routes work

## Alternative Solutions

If you prefer clean URLs without hashes, you can:

1. **Use a custom domain** with proper server configuration
2. **Deploy to Netlify/Vercel** which support clean URLs out of the box
3. **Use GitHub Pages with a custom 404.html** (current solution)

The current HashRouter solution is the most reliable for GitHub Pages deployment.
