import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@lib/Button/Button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
} from '@src/lib/Sheet/Sheet';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navigate = useNavigate();

  return (
    <Sheet onOpenChange={onClose} open={isOpen}>
      <SheetOverlay />
      <SheetContent hideCloseButton className="w-4/5 max-w-sm bg-[#2b2d42] p-6" side="right">
        <div className="flex justify-end">
          <SheetClose asChild>
            <Button className="text-white" size="icon" variant="ghost">
              <X className="h-6 w-6" />
            </Button>
          </SheetClose>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Button className="w-full justify-center text-white" variant="ghost">
                Home
              </Button>
            </li>
            <li>
              <Button className="w-full justify-center text-white" variant="ghost">
                Game List
              </Button>
            </li>
            <li>
              <Button className="w-full justify-center text-white" variant="ghost">
                Social
              </Button>
            </li>
          </ul>
        </nav>
        <div className="mt-48 space-y-4">
          <Button
            className="w-full text-cyan-700 hover:bg-white hover:text-black"
            onClick={() => {
              navigate('/login');
              onClose();
            }}
            variant="secondary"
          >
            Login
          </Button>
          <Button
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              navigate('/signup');
              onClose();
            }}
          >
            Sign up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
