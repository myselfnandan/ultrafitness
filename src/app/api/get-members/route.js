import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Fetching members from database...");

    const [rows] = await db.query(
      "SELECT id, name, email, mobile, age, membership AS plan FROM members"
    );

    console.log("Database Query Result:", rows); // Debugging

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database Fetch Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
