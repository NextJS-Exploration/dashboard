import { NextResponse } from "next/server";

interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: any;
}

export function successResponse<T>(status = 200, message = "Success", data: T) {
    return NextResponse.json<ApiResponse<T>>(
        {
            success: true,
            message,
            data,
        },
        { status }
    )
}

export function errorResponse(status = 500, message = "Something went wrong", errorDetails?: any) {
    return NextResponse.json<ApiResponse<null>>(
        {
            success: false,
            message,
            error: errorDetails,
        },
        { status }
    )
}