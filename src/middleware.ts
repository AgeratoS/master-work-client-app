import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    return console.log("MIDDLEWARE RUNNING");
}

export const config = {}