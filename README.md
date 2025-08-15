# From Thomas - Personal Website

A simple, clean personal website built with **Astro** and Tailwind CSS.

## Features

- ✨ **Astro** - Fast static site generation
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive design** - Works on all devices
- 🚀 **Fast performance** - Static generation for optimal speed
- 🎭 **Custom styling** - Beautiful gradients and typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro      # Main layout wrapper
├── pages/
│   ├── index.astro       # Home page
│   ├── letters.astro     # Letters page
│   └── about.astro       # About page
└── styles/
    └── globals.css       # Global styles and Tailwind imports

public/                    # Static assets
├── favicon.svg
└── ... (other assets)
```

## Design Features

- **Black background** (`#000000`) for main app
- **Cream background** (`#F2EDE6`) for letters page
- **Custom fonts**: Hedvig Letters Serif and Inter
- **Smooth hover effects** on navigation links
- **Responsive navigation** with proper spacing

## Technologies Used

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library (if needed for future enhancements)

## License

This project is open source and available under the [MIT License](LICENSE).
