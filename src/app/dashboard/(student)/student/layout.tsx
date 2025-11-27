// app/student/layout.tsx
import React from 'react';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="student-layout">
      <main>{children}</main>
    </div>
  );
}
