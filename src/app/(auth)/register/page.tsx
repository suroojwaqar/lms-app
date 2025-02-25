// // src/app/(auth)/register/page.tsx (updated)
// "use client";
// import LoginSidebar from "@/components/login-sidebar";

// import { useRouter } from "next/navigation";
// import { useRegistration } from "@/hooks/use-registration";
// import { ParentRegistrationForm } from "@/components/auth/parent-registration-form";
// import { OTPVerification } from "@/components/auth/otp-verification";
// import { StudentRegistrationForm } from "@/components/auth/student-registration-form";
// import { RegistrationStepper } from "@/components/auth/registration-stepper";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Card } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import Link from "next/link";

// export default function RegisterPage() {
//   const router = useRouter();
//   const { toast } = useToast();
//   const {
//     isLoading,
//     error,
//     registrationData,
//     registerParent,
//     verifyOTP,
//     resendOTP,
//     registerStudent
//   } = useRegistration();

//   const currentStep = !registrationData.userId
//     ? 1
//     : !registrationData.isVerified
//     ? 2
//     : 3;


    

//   const handleParentRegistration = async (data: any) => {
//     try {
//       await registerParent(data);
//       toast({
//         title: "Registration Successful",
//         description: "Please check your email for the verification code."
//       });
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Registration Failed",
//         description:
//           error instanceof Error ? error.message : "Something went wrong"
//       });
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       await resendOTP();
//       toast({
//         title: "OTP Resent",
//         description: "A new verification code has been sent to your email."
//       });
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Failed to Resend",
//         description:
//           error instanceof Error
//             ? error.message
//             : "Failed to resend verification code"
//       });
//     }
//   };

//   const handleOTPVerification = async (otp: string) => {
//     try {
//       await verifyOTP(otp);
//       toast({
//         title: "Email Verified",
//         description: "Your email has been verified successfully."
//       });
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Verification Failed",
//         description:
//           error instanceof Error ? error.message : "Failed to verify OTP"
//       });
//     }
//   };

//   const handleStudentRegistration = async (data: any) => {
//     try {
//       if (registerStudent) {
//         await registerStudent(data);
//       } else {
//         throw new Error("registerStudent is not defined");
//       }
//       toast({
//         title: "Student Added",
//         description:
//           "Student registered successfully. Proceeding to aptitude test."
//       });
//       // Navigate to aptitude test
//       router.push(`/aptitude-test/${registrationData.studentId}`);
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Registration Failed",
//         description:
//           error instanceof Error ? error.message : "Failed to register student"
//       });
//     }
//   };

//   return (
//     <main className="min-h-screen flex">
//       <LoginSidebar />
//       <section className="w-full lg:w-1/2 p-8 flex items-center justify-center">
//         {/* <LoginForm /> */}
//         <div className="w-full">
//           <div className="container max-w-4xl mx-auto p-6">
//               <RegistrationStepper currentStep={currentStep} />

//               {error && (
//                 <Alert variant="destructive" className="mt-6">
//                   <AlertDescription>{error}</AlertDescription>
//                 </Alert>
//               )}

//               <div className="mt-8">
//                 {currentStep === 1 && (
//                   <ParentRegistrationForm
//                     onSubmit={handleParentRegistration}
//                     isLoading={isLoading}
//                   />
//                 )}

//                 {currentStep === 2 && registrationData.email && (
//                   <OTPVerification
//                     email={registrationData.email}
//                     onVerify={handleOTPVerification}
//                     onResend={handleResendOTP}
//                     isLoading={isLoading}
//                   />
//                 )}

//                 {currentStep === 3 && (
//                   <StudentRegistrationForm
//                     onSubmit={handleStudentRegistration}
//                     isLoading={isLoading}
//                   />
//                 )}
//               </div>

//               <div className="text-center text-sm mt-4">
//                 Already have an account?{" "}
//                 <Link href="/login" className="underline underline-offset-4">
//                   Log in
//                 </Link>
//               </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
