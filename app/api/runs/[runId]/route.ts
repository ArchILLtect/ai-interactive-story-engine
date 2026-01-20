import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{
    runId: string;
  }>;
}

// GET /api/runs/[runId] - Get a specific run
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { runId } = await params;

    const run = await prisma.run.findUnique({
      where: { id: runId },
      include: {
        turns: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!run) {
      return NextResponse.json(
        { error: "Run not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(run);
  } catch (error) {
    console.error("Error fetching run:", error);
    return NextResponse.json(
      { error: "Failed to fetch run" },
      { status: 500 }
    );
  }
}
