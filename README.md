# Weirdos.dev - Developer Marketing Agency

🚀 Modern React website for Weirdos.dev, a developer marketing agency specializing in conferences, product launches, and paid advertising.

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Styling**: Modern CSS with CSS Custom Properties
- **Icons**: SVG assets
- **Fonts**: Inter (Google Fonts) + Custom Brunson font

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/danielbass37/weirdos.dev.git
   cd weirdos.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run serve` - Serve production build on port 4173

## 📁 Project Structure

```
weirdos.dev/
├── public/                 # Static assets
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   └── site.webmanifest   # PWA manifest
├── src/
│   ├── assets/            # Images, fonts, logos
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── styles/            # CSS files
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **PWA Ready**: Web app manifest for mobile installation
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized fonts, images, and code splitting
- **Modern CSS**: CSS Custom Properties, Grid, Flexbox
- **Smooth Animations**: Framer Motion integration

## 🌐 Pages

- **Home**: Full-screen slides with smooth scrolling
- **Conferences**: Conference marketing services
- **Product Launches**: Product launch marketing
- **Paid Advertising**: Paid ads and marketing campaigns

## 🔧 Development Guidelines

### Code Style

- Follow ESLint configuration
- Use modern JavaScript (ES6+)
- Prefer functional components with hooks
- Use semantic HTML elements
- Follow BEM-like CSS naming conventions

### Performance Best Practices

- Optimize images and assets
- Use lazy loading for images
- Minimize bundle size
- Use proper font loading strategies

### Accessibility

- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Maintain proper color contrast

## 📱 PWA Features

The site includes Progressive Web App features:

- Web app manifest for mobile installation
- Optimized for various screen sizes
- Fast loading with Vite's optimizations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Netlify/Vercel

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📊 SEO & Analytics

- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`
- **Meta Tags**: Comprehensive SEO meta tags
- **Social Sharing**: Open Graph and Twitter Cards
- **Schema Markup**: Ready for structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

Created by **Daniel Bass** and the Weirdos.dev team.

## 📞 Contact

- Website: [weirdos.dev](https://weirdos.dev)
- Email: Contact through the website
- GitHub: [@danielbass37](https://github.com/danielbass37)