# Median Website

A modern, fast, and beautiful static website built with React, TypeScript, and Tailwind CSS. Perfect for introduction and marketing websites.

## 🚀 Live Demo

- **Production**: [https://median-nunfl19cl-sunshade8s-projects.vercel.app](https://median-nunfl19cl-sunshade8s-projects.vercel.app)
- **Repository**: [https://github.com/sunshade8/medianweb](https://github.com/sunshade8/medianweb)

## ✨ Features

- **⚡ Lightning Fast**: Static site with no server-side processing
- **🎨 Beautiful UI**: Built with Radix UI components and Tailwind CSS
- **📱 Responsive**: Mobile-first design that works on all devices
- **🔧 Modern Stack**: React 18, TypeScript, Vite
- **🎯 SEO Optimized**: Fast loading times for better search rankings
- **🌙 Dark Mode**: Built-in theme switching
- **♿ Accessible**: WCAG compliant components

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Routing**: Wouter (lightweight React router)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sunshade8/medianweb.git
cd medianweb

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your site!

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
medianweb/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── main.tsx       # App entry point
│   └── index.html         # HTML template
├── attached_assets/       # Static assets
├── dist/                 # Build output (generated)
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Other Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Enable Pages in repository settings
- **AWS S3**: Upload `dist` folder to S3 bucket
- **Any static hosting provider**

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update components in `client/src/components/`
- Add custom CSS in component files

### Content
- Update page content in `client/src/pages/`
- Replace images in `attached_assets/`
- Modify site metadata in `client/index.html`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with TypeScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for blazing fast build tool
- [Vercel](https://vercel.com/) for seamless deployment

---

Made with ❤️ for fast, beautiful websites 