# Text Editor PWA (Progressive Web Application)

## Overview

This is a Progressive Web Application (PWA) text editor that meets the following acceptance criteria. It provides a client-server folder structure, uses Webpack for bundling JavaScript files, utilizes IndexedDB for content storage, allows installation on the desktop, and deploys smoothly to Heroku with proper build scripts.

## Prerequisites

Before using this text editor PWA, make sure you have the following tools and technologies installed:

- Node.js (with npm)
- Webpack
- IndexedDB-supported browser (most modern browsers)
- A Heroku account (for deployment)

## Getting Started

1. Clone this repository to your local machine:

```shell
git clone https://github.com/rishavpandey02/PWA-Text-Editor.git
```

2. Navigate to the project's root directory:

```shell
cd PWA-Text-Editor
```

3. Install the project dependencies:

```shell
npm install
```

## Usage

### Starting the Application

To start the text editor PWA, follow these steps:

1. Open your terminal and navigate to the project's root directory.

2. Run the following command to start the backend server and serve the client:

```shell
npm run develop
```

### Building JavaScript Files

When you run the application, Webpack will bundle your JavaScript files automatically. Ensure that your JavaScript code adheres to next-gen JavaScript standards to ensure compatibility with modern browsers.

### IndexedDB Integration

The text editor PWA uses IndexedDB for data storage. When you open the text editor, a database storage is immediately created. Content entered in the editor is saved automatically when you click off the DOM window. When you reopen the text editor, the previously saved content will be retrieved from IndexedDB.

### Installation

1. Click on the "Install" button within the application.

2. This will prompt you to download the web application as an icon on your desktop.

### Service Worker and Caching

The application includes a registered service worker using Workbox. When you load the web application, the service worker will pre-cache static assets upon initial loading and cache subsequent pages and static assets for offline use.

### Deployment to Heroku

To deploy this application to Heroku, ensure that you have a Heroku account and the Heroku CLI installed. Proper build scripts for a webpack application are included in this project.

1. Log in to your Heroku account using the Heroku CLI:

```shell
heroku login
```

2. Create a new Heroku app:

```shell
heroku create your-app-name
```

3. Push the code to Heroku:

```shell
git push heroku master
```

4. Access your deployed text editor PWA at the provided Heroku app URL.



---

Thank you for Viewing. Hope you enjoy!!
