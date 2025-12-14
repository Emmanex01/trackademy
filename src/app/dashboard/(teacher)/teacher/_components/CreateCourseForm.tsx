"use client";

import React, { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCourseFormValues, createCourseSchema } from "@/lib/definitions";


// ---------------------------
// Helpers
// ---------------------------
const emptyLesson = () => ({ title: "", author: "", videoUrl: "", date: "", duration: undefined });
const emptyResource = () => ({ title: "", description: "", categories: [], type: "", author: "" });

// ---------------------------
// Tailwind Multi-Step Wizard Component
// ---------------------------
export default function CreateCourseForm({ teachers }: { teachers: { id: string; name: string } [] }) {
  const methods = useForm<CreateCourseFormValues>({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      courseName: "",
      summary: "",
      teacherId: "",
      duration: 1,
      startDate: new Date().toISOString().slice(0, 10),
      lessons: [emptyLesson()],
      resources: []
    }
  });

  const { control, handleSubmit, getValues, trigger, register, formState } = methods;
  const { errors } = formState;

  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lessonsFA = useFieldArray({ control, name: "lessons" });
  const resourcesFA = useFieldArray({ control, name: "resources" });

  const steps = ["Course", "Lessons", "Resources", "Review"] as const;

  async function validateStep(currentStep: number) {
    if (currentStep === 0) {
      return await trigger(["courseName", "teacherId", "duration", "startDate"]);
    }
    if (currentStep === 1) {
      const lessons = getValues("lessons") || [];
      for (let i = 0; i < lessons.length; i++) {
        const ok = await trigger([`lessons.${i}.title` as any]);
        if (!ok) return false;
      }
      return true;
    }
    return true;
  }

  async function next() {
    const ok = await validateStep(step);
    if (!ok) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(values: CreateCourseFormValues) {
    console.log("Submitting", values);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Failed to create course");
      }

      await res.json();
      alert("Course created successfully");
      // optionally reset or redirect
    } catch (err) {
      console.error(err);
      alert((err as Error).message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Create Course</h2>

      {/* step indicators */}
      <div className="flex items-center gap-4 mb-6">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                i === step ? "bg-blue-600 text-white" : i < step ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            <div className={`text-sm ${i === step ? "font-semibold" : "text-gray-500"}`}>{label}</div>
          </div>
        ))}
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, (errors) => console.log("Form Errors:", errors))} className="space-y-6">
          {/* Step 0: Course */}
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Course name</label>
                <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register("courseName")} />
                {errors.courseName && <p className="text-sm text-red-500">{errors.courseName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Teacher</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register("teacherId")}>
                  <option value="">Select a teacher</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                  {/* <option value={teachers.id}>{teachers.name}</option> */}
                </select>
                {errors.teacherId && <p className="text-sm text-red-500">{errors.teacherId.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (hours)</label>
                <input type="number" min={1} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register("duration", { valueAsNumber: true })} />
                {errors.duration && <p className="text-sm text-red-500">{errors.duration.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Start date</label>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register("startDate")} />
                {errors.startDate && <p className="text-sm text-red-500">{errors.startDate.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Summary</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register("summary")} />
              </div>
            </div>
          )}

          {/* Step 1: Lessons */}
          {step === 1 && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Lessons</h3>
                <button type="button" onClick={() => lessonsFA.append(emptyLesson())} className="px-3 py-1 rounded-md border">
                  + Add Lesson
                </button>
              </div>

              <div className="space-y-4">
                {lessonsFA.fields.map((field, idx) => (
                  <div key={field.id} className="border rounded-md p-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Lesson {idx + 1}</h4>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => lessonsFA.remove(idx)} className="text-sm text-red-600">
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`lessons.${idx}.title` as const)} />
                        {errors?.lessons?.[idx]?.title && <p className="text-sm text-red-500">{errors.lessons[idx].title?.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Author</label>
                        <input 
                          type="text"
                          placeholder="e.g. Dr. Smith"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
                          {...register(`lessons.${idx}.author` as const)} 
                        />
                        {/* Show error if author is missing */}
                        {errors?.lessons?.[idx]?.author && (
                          <p className="text-sm text-red-500">{errors.lessons[idx].author?.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`lessons.${idx}.duration`, { valueAsNumber: true } as any)} />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`lessons.${idx}.date` as const)} />
                      </div>

                      <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Video URL</label>
                        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`lessons.${idx}.videoUrl` as const)} />
                        {errors?.lessons?.[idx]?.videoUrl && <p className="text-sm text-red-500">{errors.lessons[idx].videoUrl?.message}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Resources */}
          {step === 2 && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Resources (optional)</h3>
                <button type="button" onClick={() => resourcesFA.append(emptyResource())} className="px-3 py-1 rounded-md border">
                  + Add Resource
                </button>
              </div>

              <div className="space-y-4">
                {resourcesFA.fields.map((field, idx) => (
                  <div key={field.id} className="border rounded-md p-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Resource {idx + 1}</h4>
                      <button type="button" onClick={() => resourcesFA.remove(idx)} className="text-sm text-red-600">
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`resources.${idx}.title` as const)} />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`resources.${idx}.type` as const)} />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" {...register(`resources.${idx}.description` as const)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-medium mb-3">Review</h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <p className="text-sm text-gray-500">Course name</p>
                  <p className="font-medium">{getValues("courseName")}</p>

                  <p className="mt-2 text-sm text-gray-500">Teacher</p>
                  <p className="font-medium">{teachers.map((e) => e.name)}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{getValues("duration")} hours</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Start date</p>
                      <p className="font-medium">{getValues("startDate")}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Summary</p>
                    <p className="whitespace-pre-wrap">{getValues("summary")}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Lessons ({getValues("lessons")?.length ?? 0})</h4>
                  <div className="space-y-2 mt-2">
                    {(getValues("lessons") || []).map((l, i) => (
                      <div key={i} className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{l.title}</p>
                            <p className="text-sm text-gray-500">{l.author}</p>
                          </div>
                          <div className="text-sm text-gray-600">{l.duration}m</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Resources ({getValues("resources")?.length ?? 0})</h4>
                  <div className="space-y-2 mt-2">
                    {(getValues("resources") || []).map((r, i) => (
                      <div key={i} className="border rounded-md p-3">
                        <p className="font-medium">{r.title}</p>
                        <p className="text-sm text-gray-500">{r.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-2 justify-end">
            {step > 0 && (
              <button type="button" onClick={back} className="px-4 py-2 rounded-md border">
                Back
              </button>
            )}

            {step < steps.length - 1 && (
              <button type="button" onClick={next} className="px-4 py-2 rounded-md bg-blue-600 text-white">
                Next
              </button>
            )}

            {step === steps.length - 1 && (
              <button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded-md bg-green-600 text-white">
                {isSubmitting ? "Creating..." : "Create Course"}
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

/*
================================================================================
Server route example (Next.js App Router): /src/app/api/courses/route.ts
================================================================================
import { NextResponse } from "next/server";
import prisma from "@/app/generated/prisma"; // adjust to your prisma client path
import { createCourseSchema } from "@/lib/validations/course"; // reuse zod schema server-side

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createCourseSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  const data = parsed.data;

  const course = await prisma.course.create({
    data: {
      courseName: data.courseName,
      summary: data.summary,
      teacherId: data.teacherId,
      duration: data.duration,
      startDate: new Date(data.startDate),
      lessons: data.lessons && data.lessons.length > 0 ? { create: data.lessons.map(l => ({
        title: l.title,
        author: l.author,
        videoUrl: l.videoUrl || null,
        date: l.date ? new Date(l.date) : undefined,
        duration: l.duration || 0
      })) } : undefined,
      resources: data.resources && data.resources.length > 0 ? { create: data.resources.map(r => ({
        title: r.title,
        description: r.description,
        categories: r.categories || [],
        type: r.type || undefined,
        author: r.author || undefined
      })) } : undefined
    }
  });

  return NextResponse.json({ course });
}

Notes:
- Extract zod schema to a shared file so both client and server reuse the same validation.
- You may add authentication/authorization checks server-side to ensure teacherId belongs to the user.
- For big uploads (videos), upload to a CDN separately and store URLs in lessons.videoUrl.
================================================================================
*/
