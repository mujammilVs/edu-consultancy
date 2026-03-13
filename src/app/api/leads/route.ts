import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        await dbConnect();

        const newLead = await Lead.create(data);

        return NextResponse.json({
            success: true,
            message: "Lead captured successfully",
            data: newLead
        }, { status: 201 });

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Failed to submit form";
        console.error("LEAD_POST_ERROR:", error);
        return NextResponse.json({
            success: false,
            message: message
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, count: leads.length, data: leads });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "An error occurred";
        return NextResponse.json({ success: false, message: message }, { status: 500 });
    }
}
