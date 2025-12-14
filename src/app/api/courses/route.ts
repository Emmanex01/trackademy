// src/app/api/courses/route.ts
import prisma from "@/lib/prisma";
import { createCourseSchema } from "@/lib/definitions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createCourseSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const course = await prisma.course.create({
    data: {
      courseName: data.courseName,
      summary: data.summary,
      teacherId: data.teacherId,
      duration: data.duration,
      startDate: new Date(data.startDate),

      lessons:
        data.lessons && data.lessons.length > 0
          ? {
              create: data.lessons.map((l) => ({
                title: l.title,
                author: l.author || "",
                videoUrl: l.videoUrl || null,
                date: l.date ? new Date(l.date) : new Date(), // REQUIRED fallback
                duration: l.duration || 0,
              })),
            }
          : undefined,

      resources:
        data.resources && data.resources.length > 0
          ? {
              create: data.resources.map((r) => ({
                title: r.title,
                description: r.description,
                categories: r.categories || [],

                // ResourceType enum fallback (choose one from your schema)
                type: r.type ?? "TEMPLATE",

                // Required string fallback
                author: r.author || "",
              })),
            }
          : undefined,
    },
  });

  return NextResponse.json({ course });
}

export async function GET() {
  const courses = await prisma.course.findMany();
  return NextResponse.json(courses);
}
