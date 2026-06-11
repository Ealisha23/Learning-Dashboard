"use client";

// components/dashboard/CourseGrid.tsx
// Renders course cards with a staggered entrance animation
// This is a Client Component because Framer Motion needs the browser

import { motion } from "framer-motion";
import { Course } from "@/types";
import CourseCard from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
}

// Animation config for the stagger container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // each card appears 100ms after the previous
    },
  },
};

// Each card fades in and slides up slightly
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="col-span-2 flex items-center justify-center h-32 rounded-2xl border border-dashed border-border">
        <p className="text-text-muted text-sm">No courses found</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="contents" // use CSS grid from parent
    >
      {courses.map((course, index) => (
        <motion.div key={course.id} variants={cardVariants}>
          <CourseCard course={course} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}
