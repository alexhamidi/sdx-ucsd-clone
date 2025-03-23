"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Event {
  name: string;
  description: string;
  linkedin_link: string;
  luma_link: string;
  image: string;
  date: string;
}

interface EventsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  events: Event[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  }
};

export function EventsSidebar({ isOpen, onClose, events }: EventsSidebarProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[150]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed left-0 top-0 h-full w-[420px] bg-[#1a1a1a]/95 backdrop-blur-md border-r border-gray-800/50 z-[200] overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="p-6 sticky top-0 bg-[#1a1a1a]/80 backdrop-blur-sm border-b border-gray-800/50 flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Past Events</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800/80 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400 hover:text-white transition-colors" />
              </button>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="p-6 space-y-6"
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.name}
                  variants={item}
                  className="group"
                >
                  <div className="bg-[#252525]/80 backdrop-blur-sm p-5 rounded-xl hover:bg-[#2a2a2a]/90 transition-all duration-300 border border-gray-800/50 hover:border-gray-700/80 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/20">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 420px) 100vw, 420px"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white/90">{event.name}</h3>
                    <p className="text-gray-400/90 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500/90">{event.date}</span>
                      <div className="flex items-center space-x-4">
                        <Link
                          href={event.linkedin_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400/90 hover:text-white transition-colors"
                        >
                          LinkedIn
                        </Link>
                        <Link
                          href={event.luma_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400/90 hover:text-white transition-colors"
                        >
                          Luma
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
