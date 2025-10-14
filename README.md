# ChatWars

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> **Live Demo:** [chat-wars-ai.vercel.app](https://chat-wars-ai.vercel.app)

ChatWars is an interactive Star Wars exploration platform that combines the power of AI with the comprehensive data from the Star Wars API (SWAPI). Explore characters, planets, and starships through an intuitive interface enhanced with AI-powered chat capabilities.

## ✨ Features

### 🤖 ChatWars AI
- **Intelligent Chat Interface**: Powered by Google's Gemini AI model
- **Star Wars Expertise**: Specialized knowledge of the Star Wars universe
- **Real-time Conversations**: Stream-based responses for natural interactions
- **Contextual Assistance**: Get detailed information about characters, planets, and starships

### 🔍 Advanced Search
- **Multi-category Search**: Search across people, planets, and starships
- **Real-time Results**: Instant search results with SWAPI integration
- **Smart Filtering**: Efficient search algorithms for accurate results

### 🗺️ Topic Explorer
- **Pagination System**: Navigate through extensive Star Wars data
- **Grid Layout**: Beautiful card-based display for easy browsing
- **Category Organization**: Separate explorers for people, planets, and starships
- **Responsive Design**: Optimized for all device sizes

### 🎨 Modern UI/UX
- **Dark Theme**: Sleek, modern interface with dark mode support
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Interactive Components**: Smooth animations and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun
- Google AI API key (for ChatWars AI feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chatwars.git
   cd chatwars
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Required for ChatWars AI functionality
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here
   
   # Required for SWAPI integration
   BASE_API_URL=https://swapi.dev/api
   ```

   > **Note**: Get your Google AI API key from the [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🧪 Testing

The project includes comprehensive testing with Jest and React Testing Library:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Update snapshots
npm run test:update
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/chat/          # AI chat API endpoint
│   ├── [explore]/         # Dynamic routes for exploration
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ai-elements/       # AI chat components
│   └── ui/               # Base UI components
├── features/             # Feature modules
│   ├── chatwars/         # ChatWars AI implementation
│   ├── searcher/         # Search functionality
│   └── topic-explorer/   # Data exploration components
├── lib/                  # Utility libraries
└── theme/               # Theme configuration
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run test` | Run the test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:update` | Update test snapshots |

## 🌟 Key Technologies

- **Framework**: Next.js 15.5.4 with App Router
- **UI Library**: React 19.1.0 with TypeScript
- **Styling**: Tailwind CSS 4.0 with custom components
- **AI Integration**: Google Gemini AI via @ai-sdk/google
- **Testing**: Jest with React Testing Library
- **Icons**: Lucide React & React Icons
- **Data Source**: [Star Wars API (SWAPI)](https://swapi.dev/)

## 🎯 How to Use

### ChatWars AI
1. Click the chat icon in the bottom-right corner
2. Ask questions about Star Wars characters, planets, or starships
3. The AI will provide detailed, contextual information

### Search Functionality
1. Navigate to any exploration page (People, Planets, or Starships)
2. Use the search bar to find specific items
3. View instant results with detailed information

### Topic Explorer
1. Choose from People, Planets, or Starships on the homepage
2. Browse through paginated results
3. Click on items to view detailed information

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [Star Wars API (SWAPI)](https://swapi.dev/) for providing comprehensive Star Wars data
- [Google AI](https://ai.google.dev/) for powering the chat functionality
- [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/) for the amazing development experience

---

**May the Force be with you!** ⭐