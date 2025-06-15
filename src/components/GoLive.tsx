
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const GoLive = () => {
    const navigate = useNavigate();

    const handleGoLive = () => {
        navigate('/live');
    };

    return (
        <section className="py-12 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                    Go Live and Share Your Voice
                </h2>
                <p className="mt-4 text-lg leading-8 text-secondary-foreground/80">
                    Start a live stream, engage with your audience, and build your community.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button size="lg" onClick={handleGoLive}>
                        Go Live Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default GoLive;
