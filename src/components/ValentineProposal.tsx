import { useState, useRef, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Celebration from "./Celebration";

const ValentineProposal = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const funnyMessages = [
    "Think again! 💕",
    "Are you sure? 🥺",
    "Please say yes! 💖",
    "Don't break my heart! 💔",
    "One more chance! 🌹",
    "Come on! 😘",
    "Really?! 😢",
    "You know you want to! 💗",
  ];

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setNoAttempts((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setHasAccepted(true);
  };

  if (hasAccepted) {
    return <Celebration />;
  }

  return (
    <div className="min-h-screen bg-blush flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative hearts */}
      <div className="absolute top-10 left-10 animate-pulse-love">
        <Heart className="w-16 h-16 text-primary/20 fill-primary/10" />
      </div>
      <div className="absolute top-20 right-16 animate-float-heart" style={{ animationDelay: "0.5s" }}>
        <Heart className="w-12 h-12 text-accent/30 fill-accent/20" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float-heart" style={{ animationDelay: "1s" }}>
        <Heart className="w-10 h-10 text-coral/30 fill-coral/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse-love" style={{ animationDelay: "1.5s" }}>
        <Heart className="w-14 h-14 text-primary/25 fill-primary/15" />
      </div>

      {/* Sparkles */}
      <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-gold animate-sparkle" />
      <Sparkles className="absolute top-1/3 right-1/3 w-4 h-4 text-gold animate-sparkle" style={{ animationDelay: "0.7s" }} />
      <Sparkles className="absolute bottom-1/3 left-1/3 w-5 h-5 text-gold animate-sparkle" style={{ animationDelay: "1.4s" }} />

      {/* Main content */}
      <div className="text-center z-10 max-w-lg mx-auto">
        {/* Animated heart */}
        <div className="mb-6 animate-pulse-love">
          <Heart className="w-24 h-24 mx-auto text-primary fill-primary drop-shadow-lg" />
        </div>

        {/* Title */}
        <h1 className="font-script text-5xl md:text-7xl text-primary mb-4 drop-shadow-sm">
          Dear Manish
        </h1>

        {/* Question */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20 mb-8">
          <h2 className="font-script text-3xl md:text-5xl text-foreground mb-2">
            Will You Be My Valentine?
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4">
            Every moment with you feels like a beautiful dream 💕
          </p>
        </div>

        {/* Funny message when trying to click NO */}
        {noAttempts > 0 && (
          <p className="text-accent font-semibold text-xl mb-4 animate-bounce-in">
            {funnyMessages[noAttempts % funnyMessages.length]}
          </p>
        )}

        {/* Buttons container */}
        <div
          ref={containerRef}
          className="relative h-32 w-full max-w-md mx-auto"
        >
          {/* YES Button - stays in place */}
          <Button
            onClick={handleYesClick}
            className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-romantic text-primary-foreground hover:scale-110 transition-all duration-300 text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl font-bold"
          >
            YES! 💖
          </Button>

          {/* NO Button - runs away */}
          <Button
            ref={noButtonRef}
            variant="outline"
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="absolute transition-all duration-200 ease-out border-2 border-muted-foreground/30 text-muted-foreground hover:border-muted-foreground/50 text-lg px-6 py-5 rounded-full"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              left: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? "65%" : "0",
              top: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? "50%" : "0",
              ...(noButtonPosition.x === 0 && noButtonPosition.y === 0
                ? { transform: "translate(-50%, -50%)" }
                : {}),
            }}
          >
            No 😅
          </Button>
        </div>

        {/* Hint text */}
        <p className="text-muted-foreground text-sm mt-8 font-body">
          Psst... that "No" button seems a bit shy! 😉
        </p>
      </div>
    </div>
  );
};

export default ValentineProposal;
