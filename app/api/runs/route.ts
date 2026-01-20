import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/runs - Create a new story run
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body;

    const run = await prisma.run.create({
      data: {
        userId: userId || "anonymous",
        state: {
          currentAct: 1,
          currentScene: 1,
          choices: [],
        },
        status: "active",
      },
    });

    return NextResponse.json(run, { status: 201 });
  } catch (error) {
    console.error("Error creating run:", error);
    return NextResponse.json(
      { error: "Failed to create run" },
      { status: 500 }
    );
  }
}
