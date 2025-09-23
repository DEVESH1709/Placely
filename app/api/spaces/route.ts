import {NextResponse} from "next/server";
import {spaces} from "@/data/spaces";

export async function GET() {
  return NextResponse.json(spaces);
}