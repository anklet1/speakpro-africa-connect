
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, Share, User, Camera } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Live = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const streamRef = useRef<MediaStream | null>(null);
    const [comments, setComments] = useState<{ user: string; text: string }[]>([]);
    const [newComment, setNewComment] = useState("");
    const { toast } = useToast();

    const startCamera = async () => {
        if (streamRef.current) {
            return;
        }
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
            streamRef.current = mediaStream;
            setIsCameraOn(true);
        } catch (err) {
            console.error("Error accessing camera:", err);
            toast({
                variant: "destructive",
                title: "Camera Error",
                description: "Could not access your camera. Please check permissions.",
            });
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
            if (videoRef.current) videoRef.current.srcObject = null;
            setIsCameraOn(false);
        }
    };
    
    const toggleStream = () => {
        if (isCameraOn) {
            stopCamera();
        } else {
            startCamera();
        }
    };

    useEffect(() => {
        startCamera();
        return () => {
            stopCamera();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAction = (action: string) => {
        toast({
            title: "Coming Soon!",
            description: `The "${action}" feature is under development.`,
        });
    };

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, { user: "You", text: newComment.trim() }]);
            setNewComment("");
            toast({
                title: "Coming Soon!",
                description: "Live chat is not connected to a backend yet.",
            });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto p-4 flex flex-col lg:flex-row gap-8">
                <div className="flex-grow lg:w-3/4 flex flex-col">
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover"></video>
                        {!isCameraOn && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
                                <Camera size={48} className="text-muted-foreground"/>
                                <p className="mt-2 text-lg">Camera is off</p>
                                <Button onClick={toggleStream} className="mt-4">Start Camera</Button>
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                             <span className="bg-red-600 text-white text-xs font-bold mr-2 px-2.5 py-1 rounded-full uppercase">Live</span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                         <div>
                            <h1 className="text-2xl font-bold">My Awesome Livestream</h1>
                            <p className="text-muted-foreground flex items-center gap-2"><User size={16} /> You</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap justify-end">
                            <Button variant="outline" onClick={() => handleAction('like')}>
                                <ThumbsUp className="mr-2" /> Like
                            </Button>
                            <Button variant="outline" onClick={() => handleAction('share')}>
                                <Share className="mr-2" /> Share
                            </Button>
                            <Button variant="outline" onClick={() => handleAction('follow')}>
                                <User className="mr-2" /> Follow
                            </Button>
                            <Button onClick={toggleStream} variant={isCameraOn ? "destructive" : "default"}>
                                {isCameraOn ? 'Stop Stream' : 'Go Live'}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4 flex flex-col bg-muted/40 rounded-lg p-4 max-h-[calc(100vh-200px)]">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Live Chat</h2>
                    <div className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2">
                        {comments.map((comment, index) => (
                            <div key={index} className="text-sm">
                                <span className="font-semibold text-primary">{comment.user}: </span>
                                <span>{comment.text}</span>
                            </div>
                        ))}
                        {comments.length === 0 && (
                            <p className="text-muted-foreground text-center italic">Chat is quiet... for now.</p>
                        )}
                    </div>
                    <form onSubmit={handleAddComment} className="flex gap-2 pt-2 border-t">
                        <Input 
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Say something..." 
                        />
                        <Button type="submit">
                            Send
                        </Button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Live;
