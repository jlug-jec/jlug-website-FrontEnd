# JLUG Website

Official website for JEC Linux Users Group (JLUG) built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- Modern React with Next.js 15
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design
- SEO optimized
- Performance optimized

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── styles/               # Global styles
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── constants/            # App constants
├── hooks/                # Custom React hooks
└── assets/               # Static assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Type check
pnpm type-check
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

## 📝 Code Style

- ESLint for linting
- Prettier for code formatting
- Husky for git hooks
- lint-staged for pre-commit hooks

## 🚀 Deployment

The project is optimized for deployment on Vercel, Netlify, or any static hosting platform.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📞 Contact

For any questions or support, please contact the JLUG team.
