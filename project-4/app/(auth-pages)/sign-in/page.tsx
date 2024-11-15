import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Navbar from "@/components/Navbar";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "lucide-react";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
 
  return (
   <>
   
    <form className="flex-1 flex flex-col min-w-64 mx-auto border-2 mt-36 p-6 shadow-lg ">
      <h1 className="text-2xl font-medium ">Sign in</h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 ">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="Enter your email.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction} className="bg-black text-white hover:bg-gray-800">
          Sign in
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
    </>
  );
}
