"use client";

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel-other/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import DashboardSingleCard from "@/components/dashboard-single-card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { useState, useEffect } from "react";
import { Clock, HelpCircle, ChevronLeft } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const questions = [
  "Do you like finding spelling mistakes and grammatical errors in your workbook?",
  "How much do you enjoy solving mathematical puzzles?",
  "Are you interested in learning about different cultures and languages?",
  "Do you prefer working with your hands to build or fix things?",
  "How comfortable are you with public speaking?",
  "Do you enjoy analyzing data and finding patterns?",
  "Are you drawn to creative activities like painting or writing?",
  "How much do you like organizing and planning events?",
  "Are you interested in understanding how machines and electronics work?",
  "Do you enjoy helping others solve their personal problems?",
  "How much do you like conducting scientific experiments?",
  "Are you interested in current events and politics?",
  "Do you enjoy physical activities and sports?",
  "How much do you like working with animals?",
  "Are you interested in financial markets and economics?",
  "Do you enjoy teaching or explaining concepts to others?",
  "How much do you like designing logos or user interfaces?",
  "Are you interested in environmental issues and sustainability?",
  "Do you enjoy strategizing and making long-term plans?",
  "How much do you like performing or being on stage?"
];

export default function AptitudeTest() {
  // Move all hooks to the top, before any conditional logic
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(20).fill(""));
  const [isTestComplete, setIsTestComplete] = useState(false);
  const sidebar = useStore(useSidebar, (x) => x);

  useEffect(() => {
    if (answers.every((answer) => answer !== "")) {
      setIsTestComplete(true);
    }
  }, [answers]);

  // Guard clause after all hooks
  if (!sidebar) {
    return null;
  }

  const { settings, setSettings } = sidebar;

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < 19) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <ContentLayout title="Dashboard">
      <div className="hidden">
        <TooltipProvider>
          <div className="flex gap-6 mt-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is-hover-open"
                    onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                    checked={settings.isHoverOpen}
                  />
                  <Label htmlFor="is-hover-open">Hover Open</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>When hovering on the sidebar in mini state, it will open</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="disable-sidebar"
                    onCheckedChange={(x) => setSettings({ disabled: x })}
                    checked={settings.disabled}
                  />
                  <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hide sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>


    <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex items-center justify-between mb-8">
       
          <div className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>13:50</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Interest & Aptitude Test
            </h1>

            {isTestComplete ? (
              <div className="text-center py-12 bg-indigo-50 rounded-xl">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                  Test Complete!
                </h2>
                <p className="text-gray-600">
                  Thank you for completing the aptitude test.
                </p>
                <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white">
                  View Results
                </Button>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-xl text-gray-800 font-semibold mb-6">
                  Q{currentQuestion + 1}. {questions[currentQuestion]}
                </h2>

                <RadioGroup
                  value={answers[currentQuestion]}
                  onValueChange={handleAnswer}
                  className="flex flex-col gap-4"
                >
                  {[
                    "Strongly Dislike",
                    "Dislike",
                    "Unsure",
                    "Like",
                    "Strongly Like"
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-3 rounded-xl border-2 border-indigo-100 p-4 cursor-pointer hover:bg-indigo-50 transition-colors"
                    >
                      <RadioGroupItem
                        value={option}
                        id={`${currentQuestion}-${option}`}
                        className="border-indigo-300 text-indigo-600 focus:border-indigo-600"
                      />
                      <Label
                        htmlFor={`${currentQuestion}-${option}`}
                        className="cursor-pointer text-gray-700 font-medium text-lg flex-grow"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {!isTestComplete && (
              <div className="flex justify-between items-center mt-8">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <div className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of 20
                </div>
              </div>
            )}

            <div className="mt-8">
              <Progress
                value={((currentQuestion + 1) / 20) * 100}
                className="h-2"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Progress</span>
                <span>{Math.round(((currentQuestion + 1) / 20) * 100)}%</span>
              </div>
            </div>
          </div>

          <div className="md:w-64">
            <h3 className="text-gray-800 font-semibold mb-4">Question List</h3>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isTestComplete && setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium flex items-center justify-center transition-all
                    ${
                      index === currentQuestion
                        ? "bg-indigo-600 text-white shadow-lg scale-110"
                        : answers[index]
                        ? "bg-indigo-100 text-indigo-600 border-2 border-indigo-300"
                        : "text-gray-400 hover:bg-indigo-50 border border-gray-200"
                    }
                    ${isTestComplete ? "cursor-default" : "cursor-pointer"}
                  `}
                  disabled={isTestComplete}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button className="text-gray-500 flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors">
            <HelpCircle className="w-4 h-4" />
            Need help?
          </button>
        </div>
      </div>
    </div>
    </ContentLayout>
  );
}
