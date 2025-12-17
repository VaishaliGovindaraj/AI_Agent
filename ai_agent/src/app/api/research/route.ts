import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// Simulated web search function (in production, you'd use a real search API)
async function simulatedWebSearch(query: string) {
  // This simulates search results - in production, integrate with SerpAPI, Brave Search, etc.
  return [
    {
      title: `Research on ${query}`,
      url: `https://example.com/research/${query.replace(/\s+/g, '-')}`,
      snippet: `Comprehensive overview of ${query} including key concepts, applications, and recent developments...`,
    },
    {
      title: `${query}: Complete Guide`,
      url: `https://example.com/guide/${query.replace(/\s+/g, '-')}`,
      snippet: `An in-depth guide covering all aspects of ${query}, from fundamentals to advanced topics...`,
    },
    {
      title: `Latest Trends in ${query}`,
      url: `https://example.com/trends/${query.replace(/\s+/g, '-')}`,
      snippet: `Explore the latest developments and emerging trends in ${query} research and applications...`,
    },
  ];
}

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    // Get search results
    const searchResults = await simulatedWebSearch(topic);

    // Format search results for AI
    const searchContext = searchResults
      .map(
        (result, idx) =>
          `[${idx + 1}] ${result.title}\nURL: ${result.url}\n${result.snippet}`
      )
      .join('\n\n');

    // Use AI to synthesize the information
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      system: `You are a research synthesis expert. Analyze the provided search results and create a comprehensive research summary.`,
      messages: [
        {
          role: 'user',
          content: `Research topic: ${topic}

Search Results:
${searchContext}

Please provide:
1. Executive Summary
2. Key Findings (3-5 main points)
3. Detailed Analysis
4. Implications and Applications
5. Suggested Areas for Further Research
6. Sources (cite the numbered sources above)`,
        },
      ],
    });

    const synthesis = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return NextResponse.json({
      topic,
      searchResults,
      synthesis,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error in research API:', error);
    return NextResponse.json(
      { error: 'Failed to conduct research' },
      { status: 500 }
    );
  }
}
