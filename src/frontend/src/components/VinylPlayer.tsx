import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/assetUrl';

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(assetUrl('audio.mp3'));
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Vinyl record */}
      <div className="relative h-64 w-64 lg:h-96 lg:w-96">
        <img
          src={assetUrl('vinyl.png')}
          alt="Vinyl record"
          className={`h-full w-full object-contain transition-transform duration-300 ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
          style={{
            animationDuration: isPlaying ? '3s' : undefined,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        />

        {/* Play/Pause button centered on vinyl */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            onClick={togglePlayPause}
            size="icon"
            className="h-16 w-16 rounded-full bg-white/90 text-black shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus-visible:scale-110 focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent lg:h-20 lg:w-20"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 lg:h-10 lg:w-10" />
            ) : (
              <Play className="h-8 w-8 lg:h-10 lg:w-10" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
