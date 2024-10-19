import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@lib/Button/Button';
import * as Dialog from '@radix-ui/react-dialog';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navigate = useNavigate();

  return (
    <Dialog.Root onOpenChange={onClose} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-[#2b2d42] p-6 shadow-lg">
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <Button className="text-white" size="icon" variant="ghost">
                <X className="h-6 w-6" />
              </Button>
            </Dialog.Close>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Button className="w-full justify-start text-white" variant="ghost">
                  Home
                </Button>
              </li>
              <li>
                <Button className="w-full justify-start text-white" variant="ghost">
                  Game List
                </Button>
              </li>
              <li>
                <Button className="w-full justify-start text-white" variant="ghost">
                  Social
                </Button>
              </li>
            </ul>
          </nav>
          <div className="mt-8 space-y-4">
            <Button
              className="w-full text-white hover:bg-white hover:text-black"
              onClick={() => {
                navigate('/login');
                onClose();
              }}
              variant="ghost"
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
