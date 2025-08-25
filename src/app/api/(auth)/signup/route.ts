import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import { signUpUserToDB } from "@/app/services/auth.service";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { status, message, data } = await signUpUserToDB(body);
        return successResponse(status, message, data)
    } catch (err: any) {
        return errorResponse(err.status, err.message, err.error)
    }
}