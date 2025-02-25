"use client";

import Image from "next/image";
import { ZovoSymbol } from "../../public/images";
import { ModeToggle } from "@/components/mode-toggle";

export default function LoginSidebar() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#011428] text-white p-8 flex-col relative overflow-hidden">
      {/* ModeToggle floating on the right side */}
      <div className="absolute top-4 right-4 z-20">
        <ModeToggle />
      </div>

      <div className="z-10 relative">
        {/* Logo */}
        <div className="mb-20">
          <Image
            src={ZovoSymbol}
            alt="Tidio Logo"
            width={120}
            height={40}
            className="text-white"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-12 pl-20 pr-20">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">test The Ultimate Learning Hub for Your Kids</h1>
            <p className="text-gray-400">Give your child the best tools to succeed in school and beyond.            </p>
          </div>

          <div className="space-y-4">
            {[
              "Seamlessly access lessons, homework, and quizzes in one place.",
              "Help your child stay on track with real-time notifications and updates.",
              "Connect with teachers or tutors directly to address questions or concerns.",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#3385FF] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <h2 className="text-2xl font-bold mb-6">Join thousands of families supporting their child’s education with ease.</h2>
            <div className="grid grid-cols-4 gap-8 items-center">
              {["Capterra", "GetApp", "Software Advice", "Shopify"].map((company, i) => (
                <div key={i} className="text-center">
                  <p className="text-sm mb-1">{company}</p>
                  <p className="text-sm text-gray-400">Rating 4.8</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative V shape */}
      <div className="absolute right-0 top-0 w-2/3 h-full">
        <div className="w-full h-full bg-[#4BF3A3] opacity-20 transform rotate-12 translate-x-1/2" />
      </div>
    </div>
  );
}