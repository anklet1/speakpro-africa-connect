
import { CourseCard } from "@/components/CourseCard";

const coursesData = [
  {
    title: "Public Speaking Mastery",
    instructor: "Adaobi Nwosu",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 1200,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Advanced Persuasive Communication",
    instructor: "Chinedu Okoro",
    level: "Pro",
    rating: 4.9,
    reviewCount: 980,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Classroom Management for Teachers",
    instructor: "Amina Bello",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 750,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Video Content Delivery",
    instructor: "Musa Adebayo",
    level: "Intermediate",
    rating: 4.6,
    reviewCount: 500,
    imageUrl: "/placeholder.svg",
  },
] as const;

export function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Popular Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the right course to elevate your communication skills.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coursesData.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
