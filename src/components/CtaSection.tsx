
import { Button } from "@/components/ui/button";

export function CtaSection() {
    return (
        <section className="bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-primary/10 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Ready to Find Your Voice?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                        Join thousands of others on their journey to becoming powerful communicators. Your first lesson is on us.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <Button size="lg">Start Learning Now</Button>
                    </div>
                     <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary/50 to-primary/20 opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
