import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build messages array
    const messages = [
      ...(conversationHistory || []),
      {
        role: 'user',
        content: message,
      },
    ];

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      system: `You are an intelligent research assistant. Your role is to help users research topics by:
1. Providing comprehensive, well-researched information
2. Citing sources and reasoning
3. Synthesizing information from multiple perspectives
4. Identifying key insights and patterns
5. Suggesting related topics for deeper exploration

Be thorough, accurate, and objective in your responses.`,
      messages: messages,
    });

    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return NextResponse.json({
      response: assistantMessage,
      conversationHistory: [
        ...messages,
        {
          role: 'assistant',
          content: assistantMessage,
        },
      ],
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
