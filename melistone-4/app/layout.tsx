
import { GeistSans } from "geist/font/sans";

import "./globals.css";


import { title } from "process";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >  */}
           <main> 
            <div>
              {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div>  */}
                   {/* <div> */}
                    {/* <Link href={"/"}>Next.js Supabase Starter</Link>
                    <div className="flex items-center gap-2">
                      <DeployButton />
                    </div> */}
                  {/* </div> */}
                  
                  {/* {!hasEnvVars ?  <EnvVarWarning /> : <HeaderAuth /> } */}
                 
                
                
                 
                {/* </div>
              </nav> */}
              <div>
                {children}
              
              </div>

              {/* <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16"> */}
                {/* <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p> */}
                {/* <ThemeSwitcher /> */}
              {/* </footer> */}
            </div>
          </main>  
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
