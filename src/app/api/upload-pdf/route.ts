export const runtime = "nodejs";
import { NextResponse } from "next/server";

import dbConnect from "@/lib/mongodb";
import Content from "@/models/Content";
import * as pdf from "pdf-parse";
// Note: If you encounter "pdf is not a function", change to: 
// import * as pdf from "pdf-parse";
import { defaultContent } from "@/lib/content";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
        }

   const buffer = Buffer.from(await file.arrayBuffer());
const data = await pdf.default(buffer);
const text = data.text;
        // Brain of the system: Extract structured data from raw PDF text
        // In a real app, we'd pass this 'text' to Gemini/OpenAI for reliable extraction.
        // For this build, we'll implement a heuristic-based extraction.

        const extractedData = { ...defaultContent };

        // Heuristic 1: Brand Name (often at the top or in caps)
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 5);
        if (lines.length > 0) {
            // Look for common headers or first line
            const brandCandidate = lines[0];
            if (brandCandidate.length < 50) {
                extractedData.brandName = brandCandidate.replace(/[^a-zA-Z\s\–\-]/g, '');
                extractedData.seo.title = `${extractedData.brandName} – Your Study Abroad Partner`;
            }
        }

        // Heuristic 2: Tagline (usually after brand or contains keywords like "Destination", "All your")
        const taglineMatch = text.match(/(.+)Destination(.+)|(.+)all your abroad visa(.+)/i);
        if (taglineMatch) {
            extractedData.tagline = taglineMatch[0].trim();
        }

        // Heuristic 3: Services (Look for service names)
        const servicesFound = [];
        const serviceKeywords = ["Scholarship", "Visa", "Admission", "Guidance", "Interview", "Process"];
        lines.forEach(line => {
            serviceKeywords.forEach(kw => {
                if (line.toLowerCase().includes(kw.toLowerCase()) && line.length < 100) {
                    if (!servicesFound.includes(line)) servicesFound.push(line);
                }
            });
        });

        if (servicesFound.length > 3) {
            // Rotate services or update them
            extractedData.services = servicesFound.slice(0, 6).map((title, i) => ({
                ...defaultContent.services[i % defaultContent.services.length],
                title,
                id: `service-${i}`
            }));
        }

        // Save to DB
        await dbConnect();
        const content = await Content.create({
            data: extractedData,
            isActive: true,
            uploadedPdf: file.name
        });

        // Deactivate others
        await Content.updateMany({ _id: { $ne: content._id } }, { isActive: false });

        return NextResponse.json({
            success: true,
            message: "PDF parsed and website updated successfully",
            data: extractedData
        });

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "An unknown error occurred";
        console.error("PDF_UPLOAD_ERROR:", error);
        return NextResponse.json({ success: false, message: message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const content = await Content.findOne({ isActive: true }).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: content?.data || defaultContent });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({ success: false, message: message }, { status: 500 });
    }
}
