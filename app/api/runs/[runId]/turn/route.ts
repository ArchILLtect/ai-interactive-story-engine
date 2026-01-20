import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{
    runId: string;
  }>;
}

// POST /api/runs/[runId]/turn - Create a new turn for a run
export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { runId } = await params;
    const body = await request.json();
    const { choice, outcome } = body;

    // Verify run exists and is active
    const run = await prisma.run.findUnique({
      where: { id: runId },
    });

    if (!run) {
      return NextResponse.json(
        { error: "Run not found" },
        { status: 404 }
      );
    }

    if (run.status !== "active") {
      return NextResponse.json(
        { error: "Run is not active" },
        { status: 400 }
      );
    }

    // Create the turn
    const runState = run.state as Record<string, unknown>;
    const currentTurn = (runState?.currentTurn as number) || 0;
    const turn = await prisma.turn.create({
      data: {
        runId,
        choice: choice || {},
        outcome: outcome || {},
        state: {
          turnNumber: currentTurn + 1,
        },
      },
    });

    // Update run state
    const currentState = (run.state as Record<string, unknown>) || {};
    await prisma.run.update({
      where: { id: runId },
      data: {
        state: {
          ...currentState,
          currentTurn: currentTurn + 1,
          lastChoice: choice,
        },
      },
    });

    return NextResponse.json(turn, { status: 201 });
  } catch (error) {
    console.error("Error creating turn:", error);
    return NextResponse.json(
      { error: "Failed to create turn" },
      { status: 500 }
    );
  }
}
