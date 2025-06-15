
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Video } from 'lucide-react';

const ShareVideo = () => {
    const { toast } = useToast();

    const handleShareVideo = () => {
        toast({
            title: "Coming Soon!",
            description: "Video sharing functionality is under construction. Check back soon!",
        });
    };

    return (
        <section className="py-12 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                    Share Your Speaking Journey
                </h2>
                <p className="mt-4 text-lg leading-8 text-secondary-foreground/80">
                    Have a speech or presentation you're proud of? Share it with our community and inspire others!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button size="lg" onClick={handleShareVideo}>
                        <Video className="mr-2 h-5 w-5" />
                        Share Your Video
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ShareVideo;
