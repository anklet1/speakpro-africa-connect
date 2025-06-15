
import { CourseCard } from './CourseCard';

const courses = [
  {
    title: 'Public Speaking Mastery: From Fear to Stage Presence',
    instructor: 'Dr. Esi Ansah',
    level: 'Beginner',
    rating: 4.9,
    reviewCount: 1245,
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Persuasive Communication for Leaders and Innovators',
    instructor: 'Vusi Thembekwayo',
    level: 'Pro',
    rating: 5.0,
    reviewCount: 3890,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Mastering Debates and High-Stakes Interviews',
    instructor: 'Juliana Kanyomozi',
    level: 'Intermediate',
    rating: 4.8,
    reviewCount: 852,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
];

export function Courses() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Courses</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Start your learning journey with our most popular courses.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
