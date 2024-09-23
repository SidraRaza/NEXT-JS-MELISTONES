import Link from "next/link";
import React from "react";
import { EnvVarWarning } from './env-var-warning';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import HeaderAuth from "@/components/header-auth";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-0">
        {/* Logo or Brand Name */}
        <div className="text-white font-bold text-2xl ml-20 border:rounded-3xl">
          {/* Hide the image on smaller screens and show on larger ones */}
          <img 
            src="/300s.jpg" 
            alt="logo" 
            width={50} 
            height={50} 
            className="hidden lg:block"
          />
        </div>

        {/* Right-side content (Env Vars or Auth buttons) */}
        <div className="flex gap-4 text-white mr-20">
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
