import Link from "next/link";
import React from "react";
import { EnvVarWarning } from './env-var-warning';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import HeaderAuth from "@/components/header-auth";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-blue-500">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-10">
        {/* Logo or Brand Name */}
        <div className="text-2xl text-white ml-2 sm:ml-4 lg:ml-10 hidden sm:block">
          ToDo
        </div>

        {/* Right-side content (Env Vars or Auth buttons) */}
        <div className="flex gap-4 text-white mr-2 sm:mr-5 lg:mr-20">
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
