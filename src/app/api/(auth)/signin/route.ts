import { successResponse, errorResponse } from "@/app/lib/apiResponse";
import { signinUser } from "@/services/auth.service";
import { LoginSchema } from "@/app/lib/validation/auth.schema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const userAgent = req.headers.get("user-agent") as string || "unknown";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() as string || "unknown"

    try {
        const body = await req.json();

        // parse data
        const parsed = LoginSchema.safeParse(body);
    
        // validate data
        if (!parsed.success) {
            throw {
                status: 400,
                message: "Validation failed",
                error: parsed.error.flatten().fieldErrors
            }
        }
    
        // get data
        const { email, password } = parsed.data;

        const { data, message } = await signinUser(email, password, userAgent, ip);

        return successResponse(200,message,data)
    } catch(err: any) {
        return errorResponse(err.status || 500, err.message || "Something went wrong!", err.error)
    }
}