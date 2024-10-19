import { useState, useEffect } from 'react';
import { Button } from '@lib/Button/Button';

export default function TopNav() {
  const [topValue, setTopValue] = useState(0);

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
    <header
      style={{ top: `${topValue}px` }}
      className={`fixed z-10 h-[75px] w-full transition-all duration-500 ease-in-out ${
        topValue === -75 ? 'bg-transparent' : 'bg-[#2b2d42]'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1050px] items-center justify-between px-4">
        <div className="cursor-pointer text-2xl font-bold text-white">Game List</div>
        <nav className="ml-10">
          <ul className="flex space-x-6">
            <li>
              <Button variant="ghost" className="text-white">
                Home
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="text-white">
                Game List
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="text-white">
                Social
              </Button>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-white">
            Login
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Sign up</Button>
        </div>
      </div>
    </header>
  );
}
