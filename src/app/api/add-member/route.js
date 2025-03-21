import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, mobile, age, membership } = await req.json();

    // Validate inputs
    if (!name || !email || !mobile) {
      return NextResponse.json({ error: "Name, Email, and Mobile are required" }, { status: 400 });
    }

    const validAge = age !== undefined && age !== null ? age : 18;
    const validMembership = membership || "1 Month";

    const [result] = await db.query(
      "INSERT INTO members (name, email, mobile, age, membership) VALUES (?, ?, ?, ?, ?)",
      [name, email, mobile, validAge, validMembership]
    );

    return NextResponse.json({ success: true, result }, { status: 200 });

  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
