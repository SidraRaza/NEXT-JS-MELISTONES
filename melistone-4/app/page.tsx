
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Img from "next/image";
import React from "react";

export default async function Index() {
  return (
    <>
     <Navbar />
     <div className="min-h-screen bg-gray-200 text-center pt-36 text-4xl ">
     Well come to my TodoList App
    </div>
   
    </>
  );
}
