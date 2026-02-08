import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// GET: Mengambil data untuk History & Live Chat
export async function GET() {
  try {
    const messages = await sql`
      SELECT * FROM messages 
      ORDER BY created_at DESC
    `;
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// POST: Menyimpan Chat Baru / Komentar
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, text, name, email, phone, message } = body;

    // Jika datang dari sistem Chat (punya username & text)
    if (username && text) {
      const newMessage = await sql`
        INSERT INTO messages (username, text, name, created_at)
        VALUES (${username}, ${text}, ${username}, NOW())
        RETURNING *
      `;
      return NextResponse.json(newMessage[0]);
    } 
    
    // Jika datang dari Form Kontak Biasa (punya name, email, dll)
    else if (name && message) {
      const newMessage = await sql`
        INSERT INTO messages (name, email, phone, message, created_at)
        VALUES (${name}, ${email || null}, ${phone || null}, ${message}, NOW())
        RETURNING *
      `;
      return NextResponse.json(newMessage[0]);
    }

    return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });

  } catch (error: any) {
    console.error("Post Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}