import { PrismaClient } from "../src/app/generated/prisma/client"
const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Create a test student user
  const user = await prisma.user.upsert({
    where: { email: "sophia@example.com" },
    update: {},
    create: {
      email: "sophia@example.com",
      name: "Sophia",
      password: "password@123",
      role: "STUDENT",
      student: {
        create: {}
      }
    },
    include: {
    student: true
  }
  });

  const studentId = user.student!.id;

  // 2️⃣ Add student dashboard stats
  await prisma.studentStats.upsert({
    where: { studentId },
    update: {},
    create: {
      studentId,
      streak: 12,
      activeCourses: 3,
      weeklyHours: 12,
      avgScore: 88
    }
  });

  // 3️⃣ Create a teacher
  const teacher = await prisma.user.create({
    data: {
      email: "teacher@example.com",
      name: "Dr. Amaka Umeh",
      password: "password@1234",
      role: "TEACHER",
      teacher: { create: {} }
    },
    include: {
    teacher: true
  }
  });

  const teacherId = teacher.teacher!.id;

  // 4️⃣ Create a courses
  const course1 = await prisma.course.create({
      data: {
        courseName: "Introduction to Product Management",
        summary: "Learn the basics of product management.",
        teacherId
      }
  });

  const course2 = await prisma.course.create({
      data: {
        courseName: "Introduction to Quality Assurance",
        summary: "Learn the basics of quality assurance.",
        teacherId
      }
  });

  const course3 = await prisma.course.create({
      data: {
        courseName: "Introduction to Food Safety",
        summary: "Learn the basics of food safety.",
        teacherId
      },
  });

  // 5️⃣ Enroll the student in the course
  await prisma.enrollment.createMany({
    data: [
      {
      studentId,
      courseId: course1.id
    },
    {
      studentId,
      courseId: course2.id
    },
    {
      studentId,
      courseId: course3.id
    },
  ]
  });

  // 6️⃣ Create lessons (matching your UI)
  const lesson1 = await prisma.lesson.create({
    data: {
      title: "Introduction to Product Management",
      author: 'Dr. Amaka Umeh',
      videoUrl: 'example-video.mp4',
      date: new Date(),
      duration: 45,
      isLive: true,
      courseId: course1.id
    }
  });

  const lesson2 = await prisma.lesson.create({
    data: {
      title: "Introduction to Quality Assurance",
      author: 'Dr. Amaka Umeh',
      videoUrl: 'example-video.mp4',
      date: new Date(),
      duration: 45,
      isLive: false,
      courseId: course2.id
    }
  });

  const lesson3 = await prisma.lesson.create({
    data: {
      title: "Introduction to Quality safety",
      author: 'Dr. Amaka Umeh',
      videoUrl: 'example-video.mp4',
      date: new Date(),
      duration: 45,
      isLive: false,
      courseId: course2.id
    }
  });

  // 7️⃣ Add progress
  await prisma.lessonProgress.create({
    data: {
      studentId,
      lessonId: lesson2.id,
      progress: 65,
      score: null,
    }
  });

  await prisma.lessonProgress.create({
    data: {
      studentId,
      lessonId: lesson1.id,
      progress: 30,
      score: null,
    }
  });

  await prisma.lessonProgress.create({
    data: {
      studentId,
      lessonId: lesson3.id,
      progress: 90,
      score: null,
    }
  });

  // 8️⃣ Add learning goals
  await prisma.goal.createMany({
  data: [
    {
      studentId,
      title: "Complete 3 lessons this week",
      description: "Stay consistent by completing three lessons.",
      progress: 50,
      targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    },
    {
      studentId,
      title: "Study at least 5 hours",
      description: "Dedicate 5 hours of study time this week.",
      progress: 20,
      targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }
  ]
});


  // 9️⃣ Add resources
  await prisma.resource.createMany({
  data: [
    {
      title: "Product Management Framework Guide",
      description: "Comprehensive guide covering popular PM frameworks including RICE, MoSCoW, and Jobs-to-be-Done",
      categories: ["All", "Documents"],
      type: "pdf",
      author: "Dr. Amaka Umeh",
      rating: 4.8,
      icon: "scroll_text"
    },
    {
      title: "UX Research Methods Video Series",
      description: "Complete video series covering user interviews, surveys, usability testing, and analysis techniques",
      categories: ["All", "Videos"],
      type: "video",
      author: "Prof. Daniel Eze",
      rating: 4.9,
      icon: "video"
    },
    {
      title: "Digital Marketing Case Studies",
      description: "Real-world case studies from successful digital marketing campaigns across different industries",
      categories: ["All", "Documents"],
      type: "pdf",
      author: "Sarah Johnson",
      rating: 4.8,
      icon: "scroll_text"
    },
    {
      title: "Recorded Lecture: Product Strategy",
      description: "Full lecture recording covering product vision, roadmapping, and stakeholder alignment",
      categories: ["All", "Recordings"],
      type: "recording",
      author: "Dr. Amaka Umeh",
      rating: 4.9,
      icon: "mic"
    },
    {
      title: "Product Management Framework Guide",
      description: "Comprehensive guide covering popular PM frameworks including RICE, MoSCoW, and Jobs-to-be-Done",
      categories: ["All", "Documents"],
      type: "pdf",
      author: "Dr. Amaka Umeh",
      rating: 4.7,
      icon: "scroll_text"
    }
  ]
});



  // 🔟 Add recent activities
  await prisma.activityLog.createMany({
    data: [
      { studentId, activity: "Completed Lesson 3 in React Course" },
      { studentId, activity: "Downloaded Resource in Project Management" },
      { studentId, activity: "Uploaded Resource in Project Management" }
    ]
  });

  // 1️⃣1️⃣ Add achievements
  // Create achievements one by one to get their IDs
const achievement1 = await prisma.achievement.create({
  data: {
    name: "Perfect Attendance",
    description: "No absences for entire semester",
    icon: "FileText"
  }
});

const achievement2 = await prisma.achievement.create({
  data: {
    name: "Math Whiz",
    description: "Top scorer in mathematics",
    icon: "FileText"
  }
});
const achievement3 = await prisma.achievement.create({
  data: {
    name: "Assignment Ace",
    description: "First Assignment Completed",
    icon: "FileText"
  }
});

console.log(achievement1.id); // ✅ Works: "clxyz123..."
console.log(achievement2.id); // ✅ Works: "clxyz124..."

  await prisma.studentAchievement.createMany({
    data: [
      {
      studentId,
      achievementId: achievement1.id
    },
    {
      studentId,
      achievementId: achievement2.id
    },
    {
      studentId,
      achievementId: achievement3.id
    }
  ]
  });

  console.log("Database seeded successfully!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
