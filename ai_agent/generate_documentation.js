const { jsPDF } = require('jspdf');

// Create PDF instance
const doc = new jsPDF();

// Helper function to add page header
function addHeader(doc, pageNum) {
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`AI Research Assistant - Documentation`, 105, 10, { align: 'center' });
  doc.text(`Page ${pageNum}`, 200, 10, { align: 'right' });
  doc.setTextColor(0);
}

// Helper function to add page footer
function addFooter(doc) {
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text('© 2024 AI Research Assistant | Built with Next.js & Claude AI', 105, 285, { align: 'center' });
  doc.setTextColor(0);
}

// PAGE 1: Title & Introduction
doc.setFontSize(28);
doc.setFont(undefined, 'bold');
doc.text('AI Research Assistant', 105, 60, { align: 'center' });

doc.setFontSize(14);
doc.setFont(undefined, 'normal');
doc.text('Intelligent Research, Synthesis, and Knowledge Management', 105, 75, { align: 'center' });

doc.setFontSize(12);
doc.setTextColor(100);
doc.text('Technical Documentation v1.0', 105, 85, { align: 'center' });
doc.setTextColor(0);

// Add a divider line
doc.setLineWidth(0.5);
doc.line(20, 95, 190, 95);

doc.setFontSize(11);
doc.setFont(undefined, 'bold');
doc.text('Executive Summary', 20, 110);

doc.setFont(undefined, 'normal');
const introText = `The AI Research Assistant is a cutting-edge web application that leverages
advanced artificial intelligence to revolutionize how users conduct research,
synthesize information, and manage knowledge. Built with Next.js and powered
by Claude AI, this application provides three core capabilities:`;

doc.text(introText, 20, 120, { maxWidth: 170 });

doc.setFont(undefined, 'bold');
doc.text('• Interactive Chat Assistant', 25, 145);
doc.setFont(undefined, 'normal');
doc.text('  Engage in natural conversations to explore topics and get instant answers', 25, 152);

doc.setFont(undefined, 'bold');
doc.text('• Deep Research Engine', 25, 162);
doc.setFont(undefined, 'normal');
doc.text('  Conduct comprehensive research with multi-source synthesis', 25, 169);

doc.setFont(undefined, 'bold');
doc.text('• Knowledge Management', 25, 179);
doc.setFont(undefined, 'normal');
doc.text('  Save, organize, and retrieve research sessions effortlessly', 25, 186);

doc.setFont(undefined, 'bold');
doc.text('Key Benefits:', 20, 205);
doc.setFont(undefined, 'normal');
doc.text('✓ Save hours of manual research time', 25, 215);
doc.text('✓ Get comprehensive, well-sourced information', 25, 222);
doc.text('✓ Organize and access your research library', 25, 229);
doc.text('✓ Discover connections and insights automatically', 25, 236);
doc.text('✓ Export and share research findings easily', 25, 243);

addFooter(doc);

// PAGE 2: Technical Architecture
doc.addPage();
addHeader(doc, 2);

doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Technical Architecture', 20, 30);

doc.setFontSize(11);
doc.setFont(undefined, 'normal');
const archText = `The AI Research Assistant is built on a modern, scalable architecture that
ensures high performance, reliability, and extensibility.`;
doc.text(archText, 20, 42, { maxWidth: 170 });

doc.setFont(undefined, 'bold');
doc.text('Technology Stack:', 20, 60);

doc.setFont(undefined, 'bold');
doc.text('Frontend Framework:', 25, 72);
doc.setFont(undefined, 'normal');
doc.text('• Next.js 16 with React 19', 30, 79);
doc.text('• TypeScript for type safety', 30, 86);
doc.text('• Tailwind CSS for responsive design', 30, 93);
doc.text('• Server Components and Client Components architecture', 30, 100);

doc.setFont(undefined, 'bold');
doc.text('AI Integration:', 25, 112);
doc.setFont(undefined, 'normal');
doc.text('• Anthropic Claude 3.5 Sonnet model', 30, 119);
doc.text('• @anthropic-ai/sdk for seamless API integration', 30, 126);
doc.text('• Optimized prompting for research and synthesis', 30, 133);
doc.text('• Context-aware conversation management', 30, 140);

doc.setFont(undefined, 'bold');
doc.text('Backend & APIs:', 25, 152);
doc.setFont(undefined, 'normal');
doc.text('• Next.js API Routes (App Router)', 30, 159);
doc.text('• RESTful API design', 30, 166);
doc.text('• In-memory session storage (extensible to databases)', 30, 173);
doc.text('• Error handling and validation', 30, 180);

doc.setFont(undefined, 'bold');
doc.text('Application Features:', 25, 192);
doc.setFont(undefined, 'normal');
doc.text('• Real-time chat interface with streaming responses', 30, 199);
doc.text('• Multi-source research aggregation', 30, 206);
doc.text('• Intelligent information synthesis', 30, 213);
doc.text('• Session persistence and retrieval', 30, 220);
doc.text('• Responsive design for all devices', 30, 227);

doc.setFont(undefined, 'bold');
doc.text('Security & Best Practices:', 25, 239);
doc.setFont(undefined, 'normal');
doc.text('• Environment variables for API key management', 30, 246);
doc.text('• Client-side and server-side validation', 30, 253);
doc.text('• Error boundaries and graceful degradation', 30, 260);

addFooter(doc);

// PAGE 3: Feature 1 - Chat Assistant
doc.addPage();
addHeader(doc, 3);

doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Feature 1: Interactive Chat Assistant', 20, 30);

doc.setFontSize(11);
doc.setFont(undefined, 'normal');
const chatText = `The Chat Assistant provides a natural language interface for exploring topics,
asking questions, and receiving intelligent, contextual responses.`;
doc.text(chatText, 20, 42, { maxWidth: 170 });

doc.setFont(undefined, 'bold');
doc.text('Core Capabilities:', 20, 60);

doc.setFont(undefined, 'bold');
doc.text('1. Conversational AI Interface', 25, 72);
doc.setFont(undefined, 'normal');
const conv1 = `   Users can engage in natural, flowing conversations with the AI assistant.
   The system maintains context throughout the conversation, allowing for
   follow-up questions and deeper exploration of topics.`;
doc.text(conv1, 25, 79, { maxWidth: 165 });

doc.setFont(undefined, 'bold');
doc.text('2. Real-Time Response Generation', 25, 100);
doc.setFont(undefined, 'normal');
const conv2 = `   Messages are processed instantly, with visual loading indicators to
   enhance user experience. The assistant provides comprehensive answers
   backed by its extensive knowledge base.`;
doc.text(conv2, 25, 107, { maxWidth: 165 });

doc.setFont(undefined, 'bold');
doc.text('3. Context Retention', 25, 128);
doc.setFont(undefined, 'normal');
const conv3 = `   The conversation history is maintained throughout the session, enabling
   the AI to reference previous exchanges and provide more relevant,
   contextual responses.`;
doc.text(conv3, 25, 135, { maxWidth: 165 });

doc.setFont(undefined, 'bold');
doc.text('Use Cases:', 20, 158);
doc.setFont(undefined, 'normal');
doc.text('• Quick fact-checking and information lookup', 25, 168);
doc.text('• Exploratory learning on new topics', 25, 175);
doc.text('• Clarifying complex concepts', 25, 182);
doc.text('• Brainstorming and idea generation', 25, 189);
doc.text('• Getting explanations in simple terms', 25, 196);

doc.setFont(undefined, 'bold');
doc.text('User Interface Design:', 20, 210);
doc.setFont(undefined, 'normal');
const uiText = `The chat interface features a clean, intuitive design with:
• Clear message differentiation (user vs assistant)
• Smooth scrolling and auto-scroll to latest messages
• Keyboard shortcuts (Enter to send)
• Loading animations for better user feedback
• Responsive layout for mobile and desktop
• Dark mode support for comfortable viewing`;
doc.text(uiText, 25, 220, { maxWidth: 165 });

addFooter(doc);

// PAGE 4: Feature 2 - Deep Research
doc.addPage();
addHeader(doc, 4);

doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Feature 2: Deep Research Engine', 20, 30);

doc.setFontSize(11);
doc.setFont(undefined, 'normal');
const resText = `The Deep Research Engine goes beyond simple Q&A to provide comprehensive,
multi-source research with intelligent synthesis and analysis.`;
doc.text(resText, 20, 42, { maxWidth: 170 });

doc.setFont(undefined, 'bold');
doc.text('Research Process:', 20, 60);

doc.setFont(undefined, 'bold');
doc.text('Step 1: Topic Submission', 25, 72);
doc.setFont(undefined, 'normal');
doc.text('   Users enter their research topic, and the system initiates a', 25, 79);
doc.text('   comprehensive search across multiple information sources.', 25, 86);

doc.setFont(undefined, 'bold');
doc.text('Step 2: Information Gathering', 25, 98);
doc.setFont(undefined, 'normal');
doc.text('   The system aggregates data from various sources, collecting', 25, 105);
doc.text('   diverse perspectives and comprehensive coverage of the topic.', 25, 112);

doc.setFont(undefined, 'bold');
doc.text('Step 3: AI-Powered Synthesis', 25, 124);
doc.setFont(undefined, 'normal');
doc.text('   Claude AI analyzes all gathered information and creates a', 25, 131);
doc.text('   structured, comprehensive research report with key insights.', 25, 138);

doc.setFont(undefined, 'bold');
doc.text('Research Output Includes:', 20, 155);
doc.setFont(undefined, 'normal');
doc.text('• Executive Summary: High-level overview of findings', 25, 165);
doc.text('• Key Findings: 3-5 main insights and takeaways', 25, 172);
doc.text('• Detailed Analysis: In-depth exploration of the topic', 25, 179);
doc.text('• Implications: Practical applications and significance', 25, 186);
doc.text('• Further Research: Suggested areas for deeper exploration', 25, 193);
doc.text('• Source Citations: Numbered references to all sources', 25, 200);

doc.setFont(undefined, 'bold');
doc.text('Advanced Features:', 20, 215);
doc.setFont(undefined, 'normal');
doc.text('✓ Source tracking and citation management', 25, 225);
doc.text('✓ Timestamp recording for all research sessions', 25, 232);
doc.text('✓ One-click save to knowledge library', 25, 239);
doc.text('✓ Formatted output for easy reading', 25, 246);
doc.text('✓ Extensible to integrate real search APIs', 25, 253);

addFooter(doc);

// PAGE 5: Feature 3 - Knowledge Management
doc.addPage();
addHeader(doc, 5);

doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Feature 3: Knowledge Management System', 20, 30);

doc.setFontSize(11);
doc.setFont(undefined, 'normal');
const kmText = `The Knowledge Management system allows users to save, organize, and retrieve
their research sessions, building a personal knowledge library over time.`;
doc.text(kmText, 20, 42, { maxWidth: 170 });

doc.setFont(undefined, 'bold');
doc.text('Session Management:', 20, 60);

doc.setFont(undefined, 'bold');
doc.text('Save Research Sessions', 25, 72);
doc.setFont(undefined, 'normal');
const save1 = `   Every research session can be saved with a single click. The system
   stores the complete research data including topic, sources, synthesis,
   and timestamp for future reference.`;
doc.text(save1, 25, 79, { maxWidth: 165 });

doc.setFont(undefined, 'bold');
doc.text('Browse Saved Sessions', 25, 100);
doc.setFont(undefined, 'normal');
const save2 = `   View all saved research in an organized list format. Each entry shows
   the title, topic, and creation date for easy identification and
   selection.`;
doc.text(save2, 25, 107, { maxWidth: 165 });

doc.setFont(undefined, 'bold');
doc.text('View Full Research Details', 25, 128);
doc.setFont(undefined, 'normal');
const save3 = `   Click on any saved session to view the complete research report,
   including all original sources, synthesis, and findings. Navigate
   easily between sessions with intuitive controls.`;
doc.text(save3, 25, 135, { maxWidth: 165 });

doc.setFont(undefined, 'bold');
doc.text('Delete Unwanted Sessions', 25, 156);
doc.setFont(undefined, 'normal');
doc.text('   Remove sessions that are no longer needed with confirmation', 25, 163);
doc.text('   prompts to prevent accidental deletion.', 25, 170);

doc.setFont(undefined, 'bold');
doc.text('Benefits of Knowledge Management:', 20, 188);
doc.setFont(undefined, 'normal');
doc.text('• Build a personal research library over time', 25, 198);
doc.text('• Easily reference past research without re-searching', 25, 205);
doc.text('• Track research history and evolution of topics', 25, 212);
doc.text('• Organize knowledge by topic or project', 25, 219);
doc.text('• Share research findings with team members', 25, 226);

doc.setFont(undefined, 'bold');
doc.text('Future Enhancements:', 20, 240);
doc.setFont(undefined, 'normal');
doc.text('• Database integration for persistent storage', 25, 250);
doc.text('• Tagging and categorization system', 25, 257);
doc.text('• Export to various formats (PDF, Word, Markdown)', 25, 264);

addFooter(doc);

// PAGE 6: Implementation Guide
doc.addPage();
addHeader(doc, 6);

doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Implementation Guide', 20, 30);

doc.setFontSize(11);
doc.setFont(undefined, 'normal');
const implText = `Follow these steps to set up and run the AI Research Assistant on your
local machine or deploy it to production.`;
doc.text(implText, 20, 42, { maxWidth: 170 });

doc.setFont(undefined, 'bold');
doc.text('Prerequisites:', 20, 60);
doc.setFont(undefined, 'normal');
doc.text('• Node.js 18 or higher installed', 25, 70);
doc.text('• npm or yarn package manager', 25, 77);
doc.text('• Anthropic API key (get from console.anthropic.com)', 25, 84);
doc.text('• Basic knowledge of Next.js and React', 25, 91);

doc.setFont(undefined, 'bold');
doc.text('Installation Steps:', 20, 105);
doc.setFont(undefined, 'normal');
doc.text('1. Clone or download the project repository', 25, 115);
doc.text('   git clone <repository-url>', 30, 122);

doc.text('2. Navigate to the project directory', 25, 134);
doc.text('   cd ai_agent', 30, 141);

doc.text('3. Install dependencies', 25, 153);
doc.text('   npm install', 30, 160);

doc.text('4. Create environment file', 25, 172);
doc.text('   Copy .env.example to .env and add your API key:', 30, 179);
doc.text('   ANTHROPIC_API_KEY=your_actual_api_key_here', 30, 186);

doc.text('5. Run the development server', 25, 198);
doc.text('   npm run dev', 30, 205);

doc.text('6. Open your browser', 25, 217);
doc.text('   Navigate to http://localhost:3000', 30, 224);

doc.setFont(undefined, 'bold');
doc.text('Project Structure:', 20, 240);
doc.setFont(undefined, 'normal');
doc.text('src/app/page.tsx - Main application page', 25, 250);
doc.text('src/app/components/ - React components', 25, 257);
doc.text('src/app/api/ - API routes for backend logic', 25, 264);

addFooter(doc);

// PAGE 7: Configuration & Deployment
doc.addPage();
addHeader(doc, 7);

doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Configuration & Deployment', 20, 30);

doc.setFontSize(11);
doc.setFont(undefined, 'bold');
doc.text('Environment Configuration:', 20, 45);
doc.setFont(undefined, 'normal');
const envText = `The application uses environment variables for secure configuration. Create
a .env.local file in the project root with the following variables:`;
doc.text(envText, 20, 55, { maxWidth: 170 });

doc.setFontSize(9);
doc.setFont('courier');
doc.text('ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx', 25, 70);
doc.setFont(undefined, 'normal');
doc.setFontSize(11);

doc.setFont(undefined, 'bold');
doc.text('Production Deployment:', 20, 85);
doc.setFont(undefined, 'normal');

doc.setFont(undefined, 'bold');
doc.text('Deploy to Vercel (Recommended):', 25, 97);
doc.setFont(undefined, 'normal');
doc.text('1. Push your code to GitHub', 30, 107);
doc.text('2. Connect your repository to Vercel', 30, 114);
doc.text('3. Add environment variables in Vercel dashboard', 30, 121);
doc.text('4. Deploy with one click', 30, 128);

doc.setFont(undefined, 'bold');
doc.text('Build for Production:', 25, 142);
doc.setFont(undefined, 'normal');
doc.text('npm run build    # Creates optimized production build', 30, 152);
doc.text('npm start        # Runs production server', 30, 159);

doc.setFont(undefined, 'bold');
doc.text('Customization Options:', 20, 175);
doc.setFont(undefined, 'normal');

doc.text('• Change AI Model: Edit model parameter in API routes', 25, 185);
doc.text('• Customize Prompts: Modify system prompts in route.ts files', 25, 192);
doc.text('• Add Database: Replace in-memory storage with PostgreSQL/MongoDB', 25, 199);
doc.text('• Integrate Real Search: Add SerpAPI or Brave Search API', 25, 206);
doc.text('• Export Features: Add PDF/Word export functionality', 25, 213);
doc.text('• User Authentication: Implement NextAuth for multi-user support', 25, 220);

doc.setFont(undefined, 'bold');
doc.text('Performance Optimization:', 20, 235);
doc.setFont(undefined, 'normal');
doc.text('✓ Server components for reduced client bundle size', 25, 245);
doc.text('✓ API route optimization for fast response times', 25, 252);
doc.text('✓ Lazy loading of components', 25, 259);
doc.text('✓ Efficient state management', 25, 266);

addFooter(doc);

// Save the PDF
doc.save('AI_Research_Assistant_Documentation.pdf');
console.log('PDF documentation generated successfully!');
console.log('File: AI_Research_Assistant_Documentation.pdf');
