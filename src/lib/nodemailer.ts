import nodemailer from "nodemailer";

export interface ContactInquiryPayload {
  name: string;
  phone: string;
  email?: string;
  service: string;
  plotArea?: string;
  plotLocation?: string;
  timeline?: string;
  notes?: string;
  refId: string;
}

/**
 * Creates and configures the Nodemailer SMTP transporter.
 */
export function getMailTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Formats and dispatches inquiry emails via Nodemailer:
 * 1. Admin Notification to Company Desk
 * 2. Client Confirmation Receipt (if client provided email)
 */
export async function sendContactInquiry(data: ContactInquiryPayload) {
  const transporter = getMailTransporter();
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
  const senderEmail = process.env.SMTP_USER;
  const senderName = process.env.SMTP_FROM_NAME || "Elite Homes Civil Engineering";

  // If SMTP credentials have not been configured yet in .env.local:
  if (!transporter || !senderEmail || !receiverEmail) {
    console.warn(
      `[Nodemailer Notice] SMTP credentials not fully configured in .env.local. ` +
      `Inquiry (Ref: ${data.refId}) from "${data.name}" was logged but email delivery was skipped. ` +
      `To enable actual email sending, add SMTP_USER and SMTP_PASS in .env.local.`
    );
    return {
      success: true,
      delivered: false,
      refId: data.refId,
      notice: "SMTP credentials pending in .env.local",
    };
  }

  const serviceLabels: Record<string, string> = {
    "2bhk-turnkey": "2BHK Turnkey House Construction",
    "3bhk-turnkey": "3BHK Premium House Construction",
    "villa-turnkey": "Special Luxury Villa Execution",
    "commercial": "Commercial Infrastructure Construction",
    "structural-design": "Structural Engineering & Blueprint Design",
    "renovation": "Structural Retrofitting & Renovation",
  };

  const readableService = serviceLabels[data.service] || data.service;
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // 1. Company Admin Notification Email (HTML)
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #0d0d0d; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #262626; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
        .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
        .badge { display: inline-block; background: #ffffff; color: #0d0d0d; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 6px; margin-top: 12px; }
        .content { padding: 32px; }
        .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
        .row:last-child { border-bottom: none; }
        .label { font-weight: 700; color: #64748b; width: 38%; }
        .value { font-weight: 700; color: #0f172a; width: 62%; text-align: right; }
        .notes-box { margin-top: 20px; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 13px; color: #334155; line-height: 1.5; }
        .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
        .cta-btn { display: inline-block; background: #0d0d0d; color: #ffffff !important; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 16px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>New Civil Construction Inquiry</h1>
          <p>Received on ${timestamp} (IST)</p>
          <div class="badge">Reference ID: ${data.refId}</div>
        </div>
        <div class="content">
          <div class="row">
            <span class="label">Client Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="row">
            <span class="label">Contact Phone:</span>
            <span class="value"><a href="tel:${data.phone}" style="color: #0f172a; text-decoration: underline;">${data.phone}</a></span>
          </div>
          <div class="row">
            <span class="label">Email Address:</span>
            <span class="value">${data.email || "Not Provided"}</span>
          </div>
          <div class="row">
            <span class="label">Requested Service:</span>
            <span class="value">${readableService}</span>
          </div>
          <div class="row">
            <span class="label">Plot Area:</span>
            <span class="value">${data.plotArea || "Standard"}</span>
          </div>
          <div class="row">
            <span class="label">Site Location:</span>
            <span class="value">${data.plotLocation || "Madurai Region"}</span>
          </div>
          <div class="row">
            <span class="label">Expected Start:</span>
            <span class="value">${data.timeline || "Immediate"}</span>
          </div>

          ${data.notes ? `
            <div style="margin-top: 16px;">
              <strong style="font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Client Notes & Specifications:</strong>
              <div class="notes-box">${data.notes.replace(/\n/g, "<br />")}</div>
            </div>
          ` : ""}

          <div style="text-align: center; margin-top: 24px;">
            <a href="tel:${data.phone}" class="cta-btn">Call Client (${data.phone})</a>
          </div>
        </div>
        <div class="footer">
          Elite Homes Civil Engineering &bull; 100% Milestone BOQ Construction &bull; Madurai
        </div>
      </div>
    </body>
    </html>
  `;

  // Send admin email
  await transporter.sendMail({
    from: `"${senderName}" <${senderEmail}>`,
    to: receiverEmail,
    replyTo: data.email || senderEmail,
    subject: `[Civil Lead ${data.refId}] ${data.name} • ${readableService}`,
    html: adminHtml,
  });

  // 2. Client Confirmation Email (if user provided an email)
  if (data.email && data.email.includes("@")) {
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
          .card { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; }
          .header { background: #0d0d0d; color: #ffffff; padding: 28px 32px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 800; }
          .content { padding: 32px; font-size: 14px; line-height: 1.6; color: #334155; }
          .ref-box { background: #f1f5f9; border-left: 4px solid #0d0d0d; padding: 12px 16px; border-radius: 4px; margin: 20px 0; font-size: 13px; }
          .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>Elite Homes &bull; Inquiry Received</h1>
          </div>
          <div class="content">
            <p>Dear <strong>${data.name}</strong>,</p>
            <p>Thank you for connecting with Elite Homes. We have received your inquiry regarding <strong>${readableService}</strong>.</p>
            
            <div class="ref-box">
              <strong>Your Reference ID: ${data.refId}</strong><br />
              Registered on: ${timestamp}
            </div>

            <p>One of our registered civil structural engineers will review your site parameters and call you at <strong>${data.phone}</strong> within 24 business hours to arrange a complimentary plot level assessment and itemized Bill of Quantities (BOQ).</p>

            <p>For urgent assistance, feel free to contact our direct engineering desk at <strong>+91 98421 23456</strong>.</p>

            <p style="margin-top: 24px;">Warm regards,<br /><strong>Civil Engineering Division</strong><br />Elite Homes, Madurai</p>
          </div>
          <div class="footer">
            Elite Homes &bull; Monolithic RCC Framing &bull; 10-Year Bonded Structural Guarantee
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      await transporter.sendMail({
        from: `"${senderName}" <${senderEmail}>`,
        to: data.email,
        subject: `Inquiry Confirmation [${data.refId}] • Elite Homes Civil Constructions`,
        html: clientHtml,
      });
    } catch (clientErr) {
      console.warn("[Nodemailer] Client receipt email failed, but admin email was sent:", clientErr);
    }
  }

  return {
    success: true,
    delivered: true,
    refId: data.refId,
  };
}

