# Portfolio Website

A modern, responsive portfolio website built with React and Material-UI for showcasing software development projects, skills, and experience.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Material-UI components for a professional look
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly drawer
- **Project Showcase**: Filterable project gallery with detailed modals
- **Contact Form**: Functional contact form with validation
- **Skills Section**: Animated progress bars and technology chips
- **Social Links**: Easy access to social media profiles
- **Accessibility**: Built with accessibility best practices

## Technologies Used

- **React**: Frontend framework
- **Material-UI**: Component library and styling
- **Vite**: Build tool and development server
- **JavaScript**: Programming language

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Customization

#### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx`: Update name, title, and description
- `src/components/About.jsx`: Update skills, experience, and education
- `src/components/Projects.jsx`: Update project details
- `src/components/Contact.jsx`: Update contact information and social links

#### Images

Replace placeholder images in the `public/images/` directory:

- `profile-image.jpg`: Your professional headshot
- `project1.jpg` to `project6.jpg`: Screenshots of your projects

#### Resume

Add your resume PDF to the `public/` directory as `resume.pdf`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deployment

#### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

#### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts

#### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Run: `npm run deploy`

## Project Structure

```
portfolio/
├── public/
│   ├── images/          # Project images
│   ├── profile-image.jpg # Profile photo
│   └── resume.pdf       # Resume file
├── src/
│   ├── components/
│   │   ├── Hero.jsx     # Hero section
│   │   ├── About.jsx    # About section
│   │   ├── Projects.jsx # Projects showcase
│   │   └── Contact.jsx  # Contact form
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please open an issue or contact me through the portfolio contact form.
