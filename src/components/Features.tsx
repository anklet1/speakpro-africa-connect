
import { Video, Radio, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: Video,
    name: 'Extensive Video Library',
    description: 'Access a rich collection of on-demand courses on public speaking, debating, and more, for all skill levels.',
  },
  {
    icon: Radio,
    name: 'Interactive Live Streams',
    description: 'Join live classes with real-time chat, Q&A, and polls. Interact with instructors and peers from across the continent.',
  },
  {
    icon: BrainCircuit,
    name: 'AI-Powered Feedback',
    description: 'Upload your practice speeches and receive instant, personalized feedback on your pace, clarity, and tone.',
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why SpeakPro Africa?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete ecosystem to build your communication confidence.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="p-8 bg-background rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
