# Pinned Repositories Configuration

This document explains how to configure pinned repositories for the GitHub projects section.

## Overview

The application now supports pinned repositories that will be:

1. **Shown first** on the `/github` page in a dedicated "Pinned Projects" section
2. **Only shown** on the landing page in the "GitHub Projects" section

## Configuration

### 1. Repository Names

Edit `src/config/pinned-repos.ts` and add your repository names to the `PINNED_REPOSITORIES` array:

```typescript
export const PINNED_REPOSITORIES = [
  "mongo-pipeline-kit",
  "next-internationalization",
  "next-Ui-library",
];
```

**Important**: Repository names must match exactly with the names on GitHub (case-sensitive).

### 2. Repository Topics

You can also pin repositories by adding specific topics to them on GitHub. Add the topics to the `PINNED_TOPICS` array:

```typescript
export const PINNED_TOPICS = ["portfolio", "showcase", "featured"];
```

Then add these topics to your repositories on GitHub:

1. Go to your repository on GitHub
2. Click on "About" section
3. Click on the gear icon next to "Topics"
4. Add topics like "portfolio", "showcase", or "featured"

## How It Works

1. **Landing Page (`/`)**: Only shows pinned repositories
2. **GitHub Projects Page (`/github`)**: Shows pinned repositories first, then all other repositories
3. **Pinned repositories** are marked with a pin icon (📌) on the GitHub projects page

## Example

If you have these repositories:

- `my-portfolio` (pinned)
- `chat-app` (pinned)
- `todo-app` (not pinned)
- `weather-app` (not pinned)

**Landing page** will show:

- `my-portfolio`
- `chat-app`

**GitHub projects page** will show:

1. **Pinned Projects** section:
   - `my-portfolio` 📌
   - `chat-app` 📌
2. **All Projects** section:
   - `todo-app`
   - `weather-app`

## Updating Configuration

After updating the configuration:

1. Save the file
2. The changes will be reflected immediately in development
3. For production, rebuild and deploy the application

## Troubleshooting

- **Repository not showing as pinned**: Check that the repository name matches exactly (case-sensitive)
- **Topic-based pinning not working**: Ensure the topic is added to the repository on GitHub and matches the `PINNED_TOPICS` array
- **No pinned repositories showing**: Verify that the repositories exist and are public on GitHub
