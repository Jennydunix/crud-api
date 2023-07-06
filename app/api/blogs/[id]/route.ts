import { deletePost, getByID, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    // get a post by its Id
    const id = req.url.split("blogs/")[1];
    const post = getByID(id); // Call getByID with the ID
    if (!post) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    // Update a post by its Id
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, desc);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    // get a post by its Id
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
