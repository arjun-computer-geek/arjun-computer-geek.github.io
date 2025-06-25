# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3476d67f-2bf2-4381-a33b-6598a9c03239

## Features

### 📱 Progressive Web App (PWA)

This portfolio is now a fully functional Progressive Web App with offline capabilities:

- **Offline Support**: Works without internet connection using cached content
- **Installable**: Can be installed on mobile and desktop devices
- **App-like Experience**: Full-screen standalone mode with native app feel
- **Automatic Updates**: Seamless updates with user notification
- **Smart Caching**: Intelligent caching strategy for optimal performance
- **Installation Prompt**: Encourages users to install the app
- **Offline Fallback**: Graceful offline experience with helpful messaging

#### PWA Features:

- **Service Worker**: Handles caching and offline functionality
- **Web App Manifest**: Defines app appearance and behavior
- **Runtime Caching**: Caches fonts, API calls, and static assets
- **Update Notifications**: Informs users when new versions are available
- **Installation Management**: Handles app installation and updates

### 📄 Resume Download

The portfolio includes multiple download resume buttons for easy access:

- **Hero Section**: Prominent download button alongside "View My Work" and "Get In Touch"
- **About Section**: Download button after the stats section
- **Contact Section**: Primary download button in the contact area
- **File Location**: Resume is served from `/public/resume.pdf`
- **Download Behavior**: Opens in a new tab for easy viewing and downloading

### 🚀 GitHub Integration

This portfolio now automatically fetches and displays data from GitHub:

- **Dynamic Experience Calculation**: Automatically calculates experience from September 2023 to present
- **Real-time Repository Data**: Fetches all public repositories with stats (stars, forks, languages)
- **Live Project Count**: Shows actual number of completed projects from GitHub
- **GitHub Stats Dashboard**: Displays total stars, forks, and languages used
- **Featured Projects**: Automatically showcases top repositories based on engagement
- **Search & Filter**: Full repository browsing with search and language filtering

### 🛠️ Technical Features

- **React Query**: Efficient data fetching with caching and error handling
- **TypeScript**: Full type safety for GitHub API responses
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-time Updates**: Data refreshes automatically every 5 minutes

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3476d67f-2bf2-4381-a33b-6598a9c03239) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

# Step 5: Build for production with PWA features
npm run build:pwa

# Step 6: Preview production build
npm run preview:pwa
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Query (TanStack Query)
- GitHub API Integration
- **PWA (Progressive Web App)**
  - Vite PWA Plugin
  - Workbox (Service Worker)
  - Web App Manifest

## PWA Implementation Details

### Service Worker Strategy

- **Cache First**: Static assets (images, fonts, CSS, JS)
- **Network First**: API calls with fallback to cache
- **Stale While Revalidate**: Dynamic content with background updates

### Caching Strategy

- **Static Assets**: Cached for 1 year (fonts, images, icons)
- **API Data**: Cached for 1 day with network-first approach
- **App Shell**: Cached for instant loading
- **Runtime Caching**: Intelligent caching based on content type

### Offline Features

- **Offline Fallback Page**: Helpful message when content unavailable
- **Cached Content Access**: All cached content available offline
- **Connectivity Detection**: Real-time online/offline status
- **Graceful Degradation**: App works with limited connectivity

### Installation Features

- **Install Prompt**: Automatic installation suggestion
- **App Shortcuts**: Quick access to key sections
- **Splash Screen**: Native app-like loading experience
- **Standalone Mode**: Full-screen app experience

## GitHub Integration Details

### API Endpoints Used

- `GET /users/arjun-computer-geek/repos` - Fetch all repositories
- `GET /repos/{owner}/{repo}/topics` - Fetch repository topics

### Experience Calculation

Experience is automatically calculated from September 1, 2023 to the current date, providing accurate year/month breakdown.

### Data Caching

- Repository data: 5 minutes stale time, 30 minutes cache
- Experience calculation: 1 hour stale time, 24 hours cache
- Automatic retry with exponential backoff

### Error Handling

- Graceful fallbacks for API failures
- Loading states for better UX
- Error boundaries for component-level error handling

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3476d67f-2bf2-4381-a33b-6598a9c03239) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

## Recent Updates

### Progressive Web App (PWA) - Latest

- ✅ Full offline support with intelligent caching
- ✅ Installable app with native-like experience
- ✅ Automatic service worker registration and updates
- ✅ Installation prompts and app shortcuts
- ✅ Offline fallback pages and connectivity detection
- ✅ Runtime caching for optimal performance
- ✅ Update notifications and seamless updates

### Resume Download Feature

- ✅ Multiple download resume buttons across the portfolio
- ✅ Hero section download button for immediate access
- ✅ About section download button after stats
- ✅ Contact section primary download button
- ✅ Download icon for better visual indication
- ✅ Opens resume in new tab for easy viewing/downloading

### GitHub Integration

- ✅ Automatic experience calculation from September 2023
- ✅ Real-time GitHub repository fetching
- ✅ Dynamic project count and stats
- ✅ Featured projects showcase
- ✅ Search and filter functionality
- ✅ Responsive design with loading states
- ✅ Error handling and fallbacks
