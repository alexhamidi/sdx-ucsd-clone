"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import { EventsSidebar } from "@/components/EventsSidebar";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface project {
  name: string;
  description: string;
  link: string;
  creator: string;
  creator_linkedin_url: string;
  creator_github_url: string;
  image: string;
}

interface event {
  name: string;
  description: string;
  linkedin_link: string;
  luma_link: string;
  image: string;
  date: string;
}

const events: event[] = [
  {
    name: "Perplexity Hack Day",
    description: "A 5-hour hack session bringing together 25+ UCSD AI builders. Teams built projects including news sentiment analysis, MCQ generation from class notes, sleep analysis, iMessage question answering, and solar panel defect classification.",
    linkedin_link: "https://www.linkedin.com/feed/update/urn:li:activity:7305304006338166785/?actorCompanyId=104974111",
    luma_link: "https://lu.ma/o6649x57?tk=jDST4v",
    image: "/perplexity.png",
    date: "March 10, 2025",
  },
  {
    name: "February 2025 Demo Day",
    description: "A showcase of projects built by students at UCSD",
    linkedin_link: "https://www.linkedin.com/feed/update/urn:li:activity:7295525625920991233",
    luma_link: "https://lu.ma/o6649x57?tk=jDST4v",
    image: "/feb_demo.png",
    date: "February 12, 2025",
  },
  {
    name: "January 2025 Demo Day",
    description: "A showcase of projects built by students at UCSD",
    linkedin_link: "https://www.linkedin.com/feed/update/urn:li:activity:7290405859086450688",
    luma_link: "https://lu.ma/o6649x57?tk=jDST4v",
    image: "/jan_demo.png",
    date: "January 29, 2025",
  }
];

const projects: project[] = [
  {
    name: "InternPilot",
    description: "A tool that helps students find internships at startups ",
    link: "https://internpilot.vercel.app/",
    creator: "Aditya Kakarla",
    creator_linkedin_url: "https://www.linkedin.com/in/aditya-kakarla/",
    creator_github_url: "https://github.com/adityakakarla",
    image: "/internpilot.png",
  },
  {
    name: "ResearchKG",
    description: "Generate knowledge graphs from research papers",
    link: "https://researchkg-frontend-352285653331.us-central1.run.app",
    creator: "Pranav Singh",
    creator_linkedin_url: "https://www.linkedin.com/in/pranav-singh-usa/",
    creator_github_url: "https://github.com/pranav-singh",
    image: "/researchkg.png",
  },
  {
    name: "Linkd",
    description: "People search engine",
    link: "https://yc.uselinkd.com/",
    creator: "Tom Zheng",
    creator_linkedin_url: "https://www.linkedin.com/in/toomzheng/",
    creator_github_url: "https://github.com/toomzheng",
    image: "/linkd.png",
  },
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEventsSidebarOpen, setIsEventsSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* Sidebars */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        projects={projects}
      />
      <EventsSidebar
        isOpen={isEventsSidebarOpen}
        onClose={() => setIsEventsSidebarOpen(false)}
        events={events}
      />

      {/* Events Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 1
        }}
        className="fixed left-6 top-32 z-[100]"
      >
        <button
          onClick={() => setIsEventsSidebarOpen(true)}
          className="group flex items-center gap-3 bg-[#252525]/90 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 border border-gray-800/50 hover:border-gray-700/80 hover:translate-x-[4px]"
        >
          <Menu className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
            what we've been doing
          </span>
        </button>
      </motion.div>

      {/* Projects Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 1
        }}
        className="fixed right-6 top-32 z-[100]"
      >
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="group flex items-center gap-3 bg-[#252525]/90 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 border border-gray-800/50 hover:border-gray-700/80 hover:translate-x-[-4px]"
        >
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
            what we've been building
          </span>
          <Menu className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </motion.div>

      {/* Sponsors marquee section */}
      <div className="fixed top-0 left-0 w-full overflow-hidden py-6">
        <div className="flex align-middle justify-center">Sponsors</div>
        <div className="whitespace-nowrap inline-block animate-marquee">
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/3269827270.png"
              alt="anthropic"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/399659983.png"
              alt="elevenlabs"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/281542554.png"
              alt="hugging face"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/2714095024.png"
              alt="openai"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/2228443562.png"
              alt="qualcomm"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/3343443258.png"
              alt="replit"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/1374159968.png"
              alt="vercel"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/1970707969.png"
              alt="ucsd"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          {/* Duplicate for continuous scrolling effect */}
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/3269827270.png"
              alt="anthropic"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/399659983.png"
              alt="elevenlabs"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/281542554.png"
              alt="hugging face"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className="inline-block align-middle mx-6">
            <Image
              src="https://ext.same-assets.com/3043200819/2714095024.png"
              alt="openai"
              width={128}
              height={64}
              className="w-32 h-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl space-y-6">
          {/* SDX Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="https://ext.same-assets.com/3043200819/849522504.png"
              alt="SDX Logo"
              width={256}
              height={128}
              className="w-64 h-auto"
            />
          </div>

          {/* Chapter heading */}
          <h1 className="text-3xl font-bold mb-4 text-center">SDx @ UC San Diego</h1>

          {/* Description */}
          <p className="text-lg mb-6 text-left">
            SDx @ UC San Diego is an invite-only meetup where the best UCSD students
            building with AI get to share their latest experiments and projects with
            peers. We curate small groups for each event to make sure it is a safe and
            fun place to demo and to keep the quality high.
          </p>

          {/* Contact button */}
          <div className="text-center">
            <Link href="mailto:ucsd@sdx.community">
              <Button
                className="bg-white text-black p-6 rounded-full hover:bg-gray-200 transition-colors text-lg font-semibold">
                Contact
              </Button>
            </Link>
            <Button
                onClick={() => {
                  window.open("https://lu.ma/sdx", "_blank", "noreferrer noopener");
                }}
                className="bg-white text-black p-6 rounded-full hover:bg-gray-200 transition-colors text-lg font-semibold">
                Events
              </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

