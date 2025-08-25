import { NextRequest, NextResponse } from "next/server";
import { emailVerification } from "@/services/auth.service";
import { errorResponse, successResponse } from "@/app/lib/apiResponse";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  try {
    const result = await emailVerification(token);
    return successResponse(200,result.message,result.data)
  } catch (err: any) {
    return errorResponse(err.status,err.message,err.error)
  }
}