import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";


export default async function Index() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/shopping-online.jpg')] bg-cover bg-center bg-no-repeat relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        {/* You can add other content or overlay here if needed */}
      </div>
      <Footer />
    </>
  );
}
