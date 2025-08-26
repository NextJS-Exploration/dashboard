import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    databaseUrl: process.env.POSTGRES_PRISMA_URL ? "found" : "missing",
  });
}