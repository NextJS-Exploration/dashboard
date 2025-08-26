import { db } from "@/app/lib/db";

export async function getUserById(id: string) {
    let user;
    try {
        user = await db.user.findUnique({
            where: {
                id,
            },
        })
    } catch(err) {
        throw {
            status: 400,
            message: "Internal Server Error",
            error: err
        }
    }

    if (user == null) {
        throw {
            status: 404,
            message: "User not found"
        }
    }

    return user
}