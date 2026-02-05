import { useEffect, useState } from "react";
import { Heart, Sparkles, Stars } from "lucide-react";

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
}

const Celebration = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showContent, setShowContent] = useState(false);

  const colors = [
    "text-primary",
    "text-accent",
    "text-coral",
    "text-gold",
    "text-rose-light",
  ];

  useEffect(() => {
    // Generate confetti
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setConfetti(newConfetti);

    // Show content after a short delay
    setTimeout(() => setShowContent(true), 500);
  }, []);

  const loveMessages = [
    "You make my heart skip a beat 💓",
    "Every day with you is a gift 🎁",
    "You're my favorite person in the world 🌍",
    "My heart belongs to you forever 💕",
    "Thank you for being mine 💖",
  ];

  return (
    <div className="min-h-screen bg-blush flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti hearts */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className={`absolute top-0 animate-confetti ${c.color}`}
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </div>
      ))}

      {/* Main celebration content */}
      {showContent && (
        <div className="text-center z-10 max-w-2xl mx-auto">
          {/* Big animated heart */}
          <div className="animate-bounce-in mb-8">
            <div className="relative inline-block">
              <Heart className="w-32 h-32 text-primary fill-primary animate-pulse-love drop-shadow-2xl" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-gold animate-sparkle" />
              <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-gold animate-sparkle" style={{ animationDelay: "0.5s" }} />
              <Stars className="absolute top-0 left-0 w-6 h-6 text-accent animate-sparkle" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Yay message */}
          <h1 
            className="font-script text-6xl md:text-8xl text-primary mb-6 animate-bounce-in drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Yaaay!!! 🎉
          </h1>

          <h2 
            className="font-script text-4xl md:text-5xl text-foreground mb-8 animate-bounce-in"
            style={{ animationDelay: "0.4s" }}
          >
            I knew you'd say Yes! 💕
          </h2>

          {/* Love card */}
          <div 
            className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/30 mb-8 animate-bounce-in"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="font-script text-3xl text-primary mb-6">
              Dear Manish ❤️
            </h3>
            <p className="text-foreground font-body text-lg leading-relaxed mb-6">
              Thank you for making me the happiest person in the world! 
              You are my sunshine on cloudy days, my comfort in storms, 
              and my reason to smile every single day.
            </p>
            <p className="text-foreground font-body text-lg leading-relaxed mb-6">
              I promise to love you, cherish you, and annoy you for 
              the rest of our lives. Here's to our beautiful journey 
              together! 🌹
            </p>
            <p className="font-script text-2xl text-accent">
              Forever Yours,<br />
              Your Valentine 💖
            </p>
          </div>

          {/* Love messages carousel */}
          <div 
            className="space-y-4 animate-bounce-in"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-muted-foreground font-body mb-4">
              Some reasons why I love you:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {loveMessages.map((message, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md animate-float-heart"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {message}
                </span>
              ))}
            </div>
          </div>

          {/* Final heart row */}
          <div className="flex justify-center gap-4 mt-12 animate-bounce-in" style={{ animationDelay: "1s" }}>
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 text-primary fill-primary animate-pulse-love"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>

          <p className="font-script text-3xl text-primary mt-8 animate-wiggle">
            Happy Valentine's Day! 💝
          </p>
        </div>
      )}
    </div>
  );
};

export default Celebration;
