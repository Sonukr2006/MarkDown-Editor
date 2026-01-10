# Markdown Previewer

A modern, feature-rich Markdown editor and previewer built with React, Vite, and Tailwind CSS.

## 📋 Overview

**Markdown Previewer** is a real-time markdown editor that allows you to write markdown on one side and see the preview on the other. With a beautiful, responsive UI and dark/light theme support, it's perfect for writing documentation, blogs, or any markdown content.

## ✨ Features

- **Live Preview**: See your markdown render in real-time as you type
- **Split View**: Side-by-side editor and preview panes
- **Theme Support**: Toggle between light and dark themes with persistent storage
- **Fullscreen Mode**: Expand to fullscreen for focused writing
- **Monaco Editor Integration**: Professional code editing experience
- **Markdown Support**: Full markdown syntax support including:
  - Headings (h1-h6)
  - Bold, italic, and strikethrough text
  - Lists (ordered and unordered)
  - Code blocks with syntax highlighting
  - Links and images
  - Tables and blockquotes
- **Character Counter**: Real-time character count with adjustable limit
- **Safe HTML Rendering**: Uses DOMPurify to sanitize HTML output
- **Responsive Design**: Works seamlessly on desktop and tablet devices

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.1.18
- **Markdown Parsing**: Marked.js 17.0.1
- **Code Editor**: Monaco Editor
- **Icons**: Lucide React & React Icons
- **HTML Sanitization**: DOMPurify
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd markdown-previewer
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── WritingSpace     # Editor component
│   ├── PreviewerSpace   # Preview component
│   ├── HeadingControl   # Header with theme toggle and controls
│   └── PreviewerHeading # Styling for heading
├── store/               # State management (Logic context)
├── assets/              # Static assets
├── App.jsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles
└── main.jsx             # Entry point
```

## 🎨 Features in Detail

### Theme Persistence
Your preferred theme (light/dark) is automatically saved to localStorage and persists across sessions.

### Character Limit Control
Adjust the character limit dynamically using the heading controls. Default limit is set to 20 characters but can be modified.

### Fullscreen Mode
Toggle fullscreen mode to maximize the editor space for distraction-free writing.

### Safe Markdown Rendering
The previewer uses DOMPurify to sanitize all HTML output, preventing XSS attacks while rendering markdown safely.

## 🔧 Customization

You can customize various aspects:
- Modify color scheme in `App.css`
- Adjust Tailwind configuration in `tailwind.config.js`
- Update markdown parsing rules in the Logic store

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or issues, please create an issue in the repository or contact the maintainer.
