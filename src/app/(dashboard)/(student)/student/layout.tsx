// app/student/layout.tsx
import React from 'react';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="student-layout">
      <nav>Student Navbar</nav>
      <main>{children}</main>
    </div>
  );
}
