# AI Research Assistant

An intelligent research assistant powered by Claude AI that helps users conduct comprehensive research, synthesize information, and manage knowledge effectively.

## Features

### 1. Interactive Chat Assistant
- Natural language conversations with AI
- Context-aware responses
- Real-time interaction
- Follow-up question support

### 2. Deep Research Engine
- Multi-source information gathering
- AI-powered synthesis and analysis
- Structured research reports
- Source citations and references

### 3. Knowledge Management
- Save research sessions
- Organize research library
- Quick access to past research
- Session management (view, delete)

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **AI**: Anthropic Claude 3.5 Sonnet
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai_agent
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Anthropic API key to `.env.local`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai_agent/
├── src/
│   └── app/
│       ├── api/              # API routes
│       │   ├── chat/         # Chat endpoint
│       │   ├── research/     # Research endpoint
│       │   └── sessions/     # Session management
│       ├── components/        # React components
│       │   ├── ChatInterface.tsx
│       │   ├── ResearchPanel.tsx
│       │   └── SavedSessions.tsx
│       └── page.tsx          # Main application page
├── .env.example              # Environment variables template
└── README.md
```

## Usage

### Chat Assistant
1. Navigate to the "Chat Assistant" tab
2. Type your question or topic in the input field
3. Press Enter or click Send
4. The AI will provide a detailed response
5. Continue the conversation with follow-up questions

### Deep Research
1. Switch to the "Deep Research" tab
2. Enter your research topic
3. Click "Research" button
4. Wait for the AI to gather and synthesize information
5. Review the comprehensive research report
6. Click "Save Research" to add it to your library

### Saved Research
1. Go to the "Saved Research" tab
2. Browse your saved research sessions
3. Click on any session to view details
4. Delete sessions you no longer need

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## Customization

- **Change AI Model**: Edit the `model` parameter in API route files
- **Modify Prompts**: Update system prompts in `src/app/api/*/route.ts`
- **Add Database**: Replace in-memory storage with PostgreSQL/MongoDB
- **Integrate Real Search**: Add SerpAPI or Brave Search API
- **Export Features**: Implement PDF/Word export functionality

## Documentation

For detailed documentation, see [AI_Research_Assistant_Documentation.pdf](./AI_Research_Assistant_Documentation.pdf)

## License

MIT

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Anthropic Claude AI](https://www.anthropic.com/)
- [Tailwind CSS](https://tailwindcss.com/)
