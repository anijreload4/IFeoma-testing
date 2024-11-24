import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { House, Users, Heart, Camera, List } from '@phosphor-icons/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: House, label: 'Home', href: '/' },
    { icon: Users, label: 'Family Messages', href: '/family' },
    { icon: Heart, label: 'Friends Messages', href: '/friends' },
    { icon: Camera, label: 'Media Sanctuary', href: '/media' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-md rounded-full"
      >
        <List size={24} color="#fff" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-md p-6 pt-16 z-40"
          >
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 5 }}
                  className="text-white"
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}