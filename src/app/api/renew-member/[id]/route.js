import db from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;

  try {
    const [result] = await db.query(
      "UPDATE members SET renewed_at = NOW() WHERE id = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: "Membership renewed successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Member not found." }, { status: 404 });
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
