import { NextResponse } from "next/server";
import { sendContactInquiry, ContactInquiryPayload } from "@/lib/nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      service,
      plotArea,
      plotLocation,
      timeline,
      notes,
    } = body;

    // Basic Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number for our site engineer." },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const refId = `EH-${Math.floor(100000 + Math.random() * 900000)}`;

    const payload: ContactInquiryPayload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email ? String(email).trim() : undefined,
      service: service || "2bhk-turnkey",
      plotArea: plotArea ? String(plotArea).trim() : undefined,
      plotLocation: plotLocation ? String(plotLocation).trim() : undefined,
      timeline: timeline || "1-3-months",
      notes: notes ? String(notes).trim() : undefined,
      refId,
    };

    // Dispatch via Nodemailer
    const result = await sendContactInquiry(payload);

    return NextResponse.json({
      success: true,
      refId: result.refId,
      delivered: result.delivered,
      notice: result.notice,
    });
  } catch (error: unknown) {
    console.error("[API /api/contact Error]:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: "Failed to dispatch inquiry. Please try again or call our direct civil desk.", details: errorMessage },
      { status: 500 }
    );
  }
}

