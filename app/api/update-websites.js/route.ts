import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // Parse the incoming JSON body
  const { websites } = await req.json();

  // You can handle the websites here (e.g., save to database or process them)
  console.log("Received websites to block:", websites);

  // Send a response back
  return NextResponse.json({ success: true, message: "Websites updated." });
}
