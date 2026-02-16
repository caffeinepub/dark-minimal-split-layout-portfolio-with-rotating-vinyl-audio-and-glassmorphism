import { useState } from 'react';
import VinylPlayer from './components/VinylPlayer';
import CategoryOverlay from './components/CategoryOverlay';
import { categories } from './content/categories';
import { assetUrl } from './lib/assetUrl';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background with dimming overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assetUrl('bg.png')})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* Left column */}
        <div className="flex flex-1 flex-col items-start justify-center px-8 py-12 lg:px-16 lg:py-20">
          <div className="w-full max-w-md space-y-12">
            {/* Title */}
            <h1 className="text-5xl font-light tracking-tight text-white lg:text-6xl">
              shibhi.studio
            </h1>

            {/* Tagline */}
            <p className="font-serif text-xl italic text-white/90 lg:text-2xl">
              Not just for a television, Teleport to where it's written.
            </p>

            {/* Categories */}
            <nav className="space-y-4" role="navigation" aria-label="Portfolio categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group block w-full text-left text-2xl font-light text-white transition-all duration-300 hover:translate-x-2 hover:text-white/80 focus-visible:translate-x-2 focus-visible:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent lg:text-3xl"
                  aria-label={`View ${category.name} portfolio`}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                    {category.name}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right column - Vinyl Player */}
        <div className="flex flex-1 items-center justify-center px-8 py-12 lg:px-16 lg:py-20">
          <VinylPlayer />
        </div>
      </div>

      {/* Category Overlay */}
      <CategoryOverlay
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        category={categories.find((c) => c.id === selectedCategory) || null}
      />

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-black/20 px-6 py-4 text-center text-sm text-white/60 backdrop-blur-sm">
        <p>
          © {new Date().getFullYear()} shibhi.studio · Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'shibhi-studio'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white/80"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
