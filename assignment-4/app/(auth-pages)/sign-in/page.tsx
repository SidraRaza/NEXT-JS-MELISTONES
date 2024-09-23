import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64 bg-white p-4  shadow-lg">
      <h1 className="text-2xl font-medium text-black">Sign in</h1>
      <p className="text-sm text-black mt-4">
        Don't have an account?{" "}
        <Link className=" font-medium underline text-black" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-4 text-black">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="Enter your email" required className="bg-white" />
        <div className="flex justify-between items-center text-black">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline text-black"
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
          className="bg-white"
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction} className="bg-black border-1 p-3 text-white hover:bg-gray-900">
          Sign in
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
