import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@lib/Button/Button';

import MobileNav from '../MobileNav/MobileNav';

export default function TopNav() {
  const [topValue, setTopValue] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        setTopValue(-currentScrollY);
      } else {
        // nav hidden when scroll down more than 40px
        setTopValue(-75);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-10 h-[75px] w-full transition-all duration-500 ease-in-out ${
          topValue === -75 ? 'bg-transparent' : 'bg-[#2b2d42]'
        } hidden md:block`}
        style={{ top: `${topValue}px` }}
      >
        <div className="mx-auto flex h-full max-w-[1050px] items-center justify-between px-4">
          <div className="cursor-pointer text-2xl font-bold text-white">Game List</div>
          <nav className="ml-10">
            <ul className="flex space-x-6">
              <li>
                <Button className="text-white" variant="ghost">
                  Home
                </Button>
              </li>
              <li>
                <Button className="text-white" variant="ghost">
                  Game List
                </Button>
              </li>
              <li>
                <Button className="text-white" variant="ghost">
                  Social
                </Button>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-2">
            <Button className="text-white" onClick={() => {
              navigate('/login');
            }} variant="ghost">
              Login
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => {
              navigate('/signup');
            }}>
              Sign up
            </Button>
          </div>
        </div>
      </header>

      {/* mobile menu button */}
      <div className="fixed right-4 top-4 z-50 md:hidden">
        <Button
          className="h-12 w-12 rounded-full bg-[#2b2d42] text-white shadow-lg"
          onClick={() => setIsMobileMenuOpen(true)}
          size="icon"
          variant="outline"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* mobile menu dialog */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
