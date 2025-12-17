import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (in production, use a database)
let sessions: any[] = [];

export async function GET() {
  try {
    return NextResponse.json({ sessions });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch sessions' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, topic, synthesis } = await req.json();

    const newSession = {
      id: Date.now().toString(),
      title,
      content,
      topic,
      synthesis,
      createdAt: new Date().toISOString(),
    };

    sessions.push(newSession);

    return NextResponse.json({
      message: 'Session saved successfully',
      session: newSession,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save session' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    sessions = sessions.filter(session => session.id !== id);

    return NextResponse.json({
      message: 'Session deleted successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete session' },
      { status: 500 }
    );
  }
}
