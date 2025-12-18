import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
      systemInstruction: `You are an intelligent research assistant. Your role is to help users research topics by:
1. Providing comprehensive, well-researched information
2. Citing sources and reasoning
3. Synthesizing information from multiple perspectives
4. Identifying key insights and patterns
5. Suggesting related topics for deeper exploration

Be thorough, accurate, and objective in your responses.`
    });

    // Build conversation history for Gemini
    const history = (conversationHistory || []).map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Start chat with history
    const chat = model.startChat({
      history: history,
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const assistantMessage = response.text();

    return NextResponse.json({
      response: assistantMessage,
      conversationHistory: [
        ...(conversationHistory || []),
        {
          role: 'user',
          content: message,
        },
        {
          role: 'assistant',
          content: assistantMessage,
        },
      ],
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please check your API key.' },
      { status: 500 }
    );
  }
}
