import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Category } from '@/content/categories';

interface CategoryOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
}

export default function CategoryOverlay({ isOpen, onClose, category }: CategoryOverlayProps) {
  if (!category) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glassmorphism max-h-[85vh] max-w-2xl border-white/20 bg-black/40 text-white backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-light tracking-tight">
            {category.name}
          </DialogTitle>
          <DialogDescription className="text-lg text-white/70">
            {category.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="mt-6 max-h-[60vh] pr-4">
          <div className="space-y-6">
            {category.content.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="text-base leading-relaxed text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full text-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Close overlay"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
