
const testimonials = [
  {
    quote: "SpeakPro Africa completely transformed my confidence. The AI feedback is a game-changer for practicing my presentations.",
    name: "Amina Yusuf",
    title: "University Student, Nigeria",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "As a teacher, the 'Classroom Control' course gave me practical strategies I could implement immediately. Highly recommended!",
    name: "David Ochieng",
    title: "Educator, Kenya",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    quote: "I use the platform to build lessons for my community. The ability to monetize my content has created a new income stream for me.",
    name: "Fatima Diallo",
    title: "Content Creator, Senegal",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Loved by Communicators Across Africa</h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="p-8 bg-background rounded-lg shadow-lg">
              <blockquote>
                <p className="text-base text-muted-foreground">“{testimonial.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
