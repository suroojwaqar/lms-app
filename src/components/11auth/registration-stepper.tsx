// src/components/auth/registration-stepper.tsx
import { cn } from "@/lib/utils";
import {
  UserCircle,
  Mail,
  GraduationCap,
  BookOpen,
  Star,
  Trophy,
  Target,
  ChevronRight
} from "lucide-react";



interface RegistrationStepperProps {
  currentStep: number;
  steps?: Array<{
    title: string;
    description: string;
    icon: JSX.Element;
  }>;
}

const defaultSteps = [


  {
    title: "Parent Details",
    description: "Create parent account",
   icon: <UserCircle className="w-8 h-8 text-purple-500" /> 
  },
  {
    title: "Email Verification",
    description: "Verify with OTP",
    icon: <Mail className="w-8 h-8 text-blue-500" /> 
  },
  {
    title: "Student Details",
    description: "Add student information",
    icon: <GraduationCap className="w-8 h-8 text-green-500" /> 
  }
];

export function RegistrationStepper({
  currentStep,
  steps = defaultSteps
}: RegistrationStepperProps) {
  return (
    <div className="relative">
      <div
        className="absolute top-5 left-0 w-full h-[2px] bg-muted"
        aria-hidden="true"
      >
        <div
          className="h-full bg-primary transition-all duration-500 ease-in-out"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>

      <div className="relative flex justify-between w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isComplete = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <div
              key={step.title}
              className={cn(
                "flex items-center",
                stepNumber !== steps.length && "flex-1"
              )}
            >
              <div className="flex items-center flex-col">
                <div
                  className={cn(
                    "rounded-full w-10 h-10 flex items-center justify-center border-2 transition-colors duration-200",
                    isComplete && "bg-primary border-primary",
                    isCurrent && "border-0",
                    !isComplete && !isCurrent && "border-muted"
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      isComplete && "text-primary-foreground",
                      isCurrent && "text-blue-600",
                      !isComplete && !isCurrent && "text-blue-600"
                    )}
                  >
                    {/* {stepNumber} */}
                    {step.icon}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
       
      </div>
    </div>
  );
}
