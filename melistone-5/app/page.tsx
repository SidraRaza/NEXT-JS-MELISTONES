import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Img from "next/image";
import React from "react";

export default async function Index() {
  return (
    <>
     <Navbar />
    <div className="bg-[url('/shopping-online.jpg')] bg-cover bg-center bg-no-repeat relative w-[1280px] h-[500px]">
 
    </div>
    <Footer/>
    </>
  );
}
