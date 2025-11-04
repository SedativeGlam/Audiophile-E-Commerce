// src/app/api/send-order/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type EmailPayload = {
  email: string;
  name: string;
  orderId: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  totals: {
    subtotal: number;
    shipping: number;
    taxes: number;
    grandTotal: number;
  };
  shipping: {
    address: string;
    zip: string;
    city: string;
    country: string;
  };
};

export async function POST(req: Request) {
  try {
    const data: EmailPayload = await req.json();

    if (!data || !data.email) {
      return NextResponse.json(
        { error: "Missing email or payload" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build HTML email (simple responsive template)
    const html = buildOrderEmailHTML(data);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: `Order Confirmation — ${data.orderId}`,
      html,
    });

    return NextResponse.json({ ok: true, info });
  } catch (err) {
    console.error("send-order error", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function buildOrderEmailHTML(data: EmailPayload) {
  const itemsHtml = data.items
    .map(
      (it) => `
      <tr>
        <td style="padding:8px 0;">${escapeHtml(it.name)}</td>
        <td style="padding:8px 0;text-align:right;">$${it.price.toLocaleString()}</td>
        <td style="padding:8px 0;text-align:right;">x${it.quantity}</td>
      </tr>`
    )
    .join("");

  return `
  <div style="font-family: Arial, sans-serif; color: #111; line-height:1.4; width:100%; max-width:680px; margin:0 auto; padding:20px;">
    <h2 style="color:#111;">Thank you, ${escapeHtml(data.name)}!</h2>
    <p>Your order <strong>#${escapeHtml(data.orderId)}</strong> was received. Summary:</p>

    <table width="100%" style="border-collapse:collapse; margin-top:16px;">
      <thead>
        <tr>
          <th style="text-align:left; padding-bottom:8px;">Item</th>
          <th style="text-align:right; padding-bottom:8px;">Price</th>
          <th style="text-align:right; padding-bottom:8px;">Qty</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>

    <div style="margin-top:16px; border-top:1px solid #eee; padding-top:12px;">
      <p style="margin:4px 0;">Subtotal: <strong>$${data.totals.subtotal.toLocaleString()}</strong></p>
      <p style="margin:4px 0;">Shipping: <strong>$${data.totals.shipping.toLocaleString()}</strong></p>
      <p style="margin:4px 0;">Taxes: <strong>$${data.totals.taxes.toLocaleString()}</strong></p>
      <p style="margin:8px 0; font-size:18px;">Grand total: <strong>$${data.totals.grandTotal.toLocaleString()}</strong></p>
    </div>

    <h4 style="margin-top:20px;">Shipping details</h4>
    <p style="margin:6px 0;">${escapeHtml(data.shipping.address)}, ${escapeHtml(data.shipping.city)}, ${escapeHtml(data.shipping.zip)}, ${escapeHtml(data.shipping.country)}</p>

    <p style="margin-top:18px;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL || ""}/order/${encodeURIComponent(data.orderId)}" style="color:#d87d4a; text-decoration:none;">
        View your order
      </a>
    </p>

    <hr style="margin-top:20px; border:none; border-top:1px solid #eee;" />
    <p style="font-size:13px; color:#666;">If you need help, reply to this email or contact support@yourdomain.com</p>
  </div>
  `;
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
