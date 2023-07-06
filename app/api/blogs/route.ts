// static route page
import { addPost, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

// building the Rest API for the application
export const GET = async (req: Request, res: Response) => {
  try {
    const posts = getPosts();
    return NextResponse.json({ messaage: "OK", posts }, { status: 200 });
  } catch (err) {
    //  NextResponse from next server
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, desc } = await req.json();
  try {
    const post = { title, desc, date: new Date(), id: Date.now().toString() };
    // to insert to database
    addPost(post);
    return NextResponse.json({ messaage: "OK", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};
