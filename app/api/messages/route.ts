import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    const data = await sql`SELECT * FROM messages ORDER BY created_at DESC`;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil pesan" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();
    
    // DETEKSI SESI REALTIME
    const userAgent = req.headers.get("user-agent") || "";
    let os = "UNKNOWN";
    if (userAgent.includes("Win")) os = "WINDOWS";
    else if (userAgent.includes("Android")) os = "ANDROID";
    else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) os = "IOS";
    else if (userAgent.includes("Mac")) os = "MACOS";
    else if (userAgent.includes("Linux")) os = "LINUX";

    // DETEKSI LOKASI (Vercel Geolocation)
    const city = req.headers.get("x-vercel-ip-city") || "Jakarta";

    await sql`
      INSERT INTO messages (name, email, phone, message, os, city) 
      VALUES (${name}, ${email}, ${phone}, ${message}, ${os}, ${city})
    `;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengirim pesan" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (!id) return NextResponse.json({ error: "ID dibutuhkan" }, { status: 400 });

    await sql`DELETE FROM messages WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus pesan" }, { status: 500 });
  }
}