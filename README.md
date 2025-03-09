# Low Poly Princess

A Phaser.js game project built with Vite.

## Description

This is a Phaser.js game project following a tutorial, built with modern JavaScript and Vite as the build tool.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lowpolyprincess.git
cd lowpolyprincess

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

## Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
lowpolyprincess/
├── .github/           # GitHub Actions workflows
├── public/            # Static assets
├── src/               # Source code
│   ├── main.js        # Main entry point
│   └── style.css      # Global styles
├── index.html         # HTML entry point
└── package.json       # Project dependencies and scripts
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

- On push to main/master: Builds, tests, and deploys the application
- On pull request to main/master: Builds and tests the application

## License

[MIT](LICENSE)
