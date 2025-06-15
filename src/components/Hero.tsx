
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(250,204,21,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-24 sm:py-32 lg:py-40 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Unlock Your Voice. <br />
            <span className="text-primary">Inspire Africa.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Master the art of communication with expert-led courses, live sessions, and AI-powered feedback. For students, teachers, and creators across Africa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => handleScroll('courses')}>Explore Courses</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => handleScroll('courses')}>Watch a Free Lesson</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
